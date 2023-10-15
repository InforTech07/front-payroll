"use client";
import StoreHeading from "@/components/store/store-heading";
import NavbarApp from "@/components/navs/navbar-app";
import { useEffect, useState } from "react";
import { IProduct, IBuyOrder } from "@/interfaces/store";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";


import { storeService } from "@/services/store-service";
import { toast } from "react-toastify";

interface IProductCardProps {
    product: IProduct;
    addProduct: (product: IProduct) => void;
}

function ProductCard({ product, addProduct }: IProductCardProps) {
    const divStyle = {
        backgroundImage: `url(${product.image})`,
    };
    return(
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={divStyle}></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 dark:text-white">{product.title}</h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">Q.{product.price}</span>
                    <button
                        onClick={() => addProduct(product)} 
                    className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700  focus:bg-gray-700  focus:outline-none">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}



function StorePage(){
    const [products, setProducts] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);
    const [subTotal, setSubTotal] = useState<number>(0);
    const { data: session } = useSession();
    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IBuyOrder>();
    const getProducts = async () => {
        const products = await storeService.getProducts();
        setProducts(products);
    }

    const addProduct = (product: IProduct) => {
        setCart([...cart, product]);
        setSubTotal(subTotal + product.price);
        //setValue("")
    }

    const removeProduct = (product: IProduct) => {
        const newCart = cart.filter((cartProduct) => cartProduct.id !== product.id);
        setCart(newCart);
        setSubTotal(subTotal - product.price);
    }

    const onSubmit =   handleSubmit((data) => {
        if(subTotal > 0){
            const order = {
                user: session?.user?.id,
                total: subTotal,
            }

            storeService.ToBuyOrder(order).then((res) => {
                toast.success("Compra realizada con exito");
                setCart([]);
                setSubTotal(0);
            }).catch((err) => {
                toast.error("Error al realizar la compra, Revise su saldo");
            });
        }else{
            toast.warning("No tienes productos en el carrito");
        }
    });


    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
            <NavbarApp title="Tienda Solidaria" idBtnDrawer="my-drawer-store" cart={true} subTotal={subTotal} count={cart.length} />
            <StoreHeading />
            <div className="grid grid-cols-3 gap-4">
                {products && products.map((product) => {
                    return <ProductCard addProduct={addProduct} product={product} />
                })}
            </div>
            <div className="drawer">
                <input id="my-drawer-store" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                </div> 
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-store" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Producto
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Precio
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Remove</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {cart && cart.map((product) => (
                            <tr key={product.id}>
                            <td className="px-4 py-4 text-sm text-gray-500  whitespace-break">{product.title}</td>
                            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">Q.{product.price}</td>
                            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            <button onClick={()=>removeProduct(product)} className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot className="bg-gray-50">
                            <tr>
                                <td colSpan={2} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total
                                </td>
                                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Q.{subTotal.toPrecision(4)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="mt-4">
                        <form onSubmit={onSubmit} className="flex flex-cols">
                            {/* <input type="number" {...register("total", { required: true })} value={subTotal} placeholder="Monto" hidden />
                            <input type="number" {...register("user", { required: true })} value="1" placeholder="Monto" hidden/> */}
                            <button type="submit" className="btn btn-success">Comprar</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StorePage;