import UploadFile from "../ui/upload-file";
import { IEmployeeDocument } from "@/interfaces/hrm";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerEmployeeDocument, getEmployeeDocuments, deleteEmployeeDocument } from "@/redux/hrm/employee-doc-slice";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";


function TableEmployeeDocuments(){
    const params = useParams();
    const dispatch = useAppDispatch();
    const documents = useAppSelector(state => state.employeeDocument.employeeDocuments);
    let documentsSorted:IEmployeeDocument[]  = [];
    if(Array.isArray(documents)){
         documentsSorted = documents.filter((item:IEmployeeDocument) => item.employee === parseInt(params.id as string));
    }
    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        setValue,
        reset,
    } = useForm<IEmployeeDocument>();

    const onSubmit =   handleSubmit((data) => {
        dispatch(registerEmployeeDocument(data)).then(res => {
            if(res){
                reset();
                return;
            }
        });
    });

    const setUriFile = (uri:string) => {
        setValue("file", uri);
        setValue("employee", params.id as string);
    };

    const handleDeleteEmployeeDocument = (id: number) => {
        confirm("¿Estas seguro de eliminar este documento?") && dispatch(deleteEmployeeDocument(id));
    }

    useEffect(() => {
        dispatch(getEmployeeDocuments(params.id as string));
    }, []);
    return(
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-l text-gray-700">Documentos del empleado</summary>
            <div className="collapse-content">
                <section className="container px-4 mx-auto">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <details className=" w-30 collapse bg-white">
                            <summary className="collapse-title text-l text-gray-700">Nuevo</summary>
                            <div className="collapse-content">
                                <section className="container px-4 mx-auto text-gray-700">
                                    <form onSubmit={onSubmit}>
                                        <div className="flex gap-2">
                                            <div>
                                                <UploadFile setUriFile={setUriFile}/>
                                            </div>
                                            <div>
                                                <label className="text-gray-700 text-xs" htmlFor="name">Nombre del departamento</label>
                                                <input
                                                    {...register("name", { required: {
                                                    value: true,
                                                    message: 'El nombre es requerido'
                                                    }})}
                                                    name="name" 
                                                    id="name" 
                                                    type="text" 
                                                    className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                                                    {errors?.name && (
                                                        <label className="label">
                                                            <span className="text-red-600 text-xs">
                                                            {errors.name.message}
                                                            </span>
                                                        </label>
                                                    )}
                                            </div>
                                            <div className="flex justify-start mt-6">
                                                <button className="btn btn-sm rounded-l btn-success text-xs">Guardar</button>
                                            </div>
                                        </div>
                                    </form>
                                </section>
                            </div>   
                        </details> 
                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>Archivo</span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                    tamaño
                                                </th>
                                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                    ver
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                    Opciones
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {documentsSorted && documentsSorted.map((item: IEmployeeDocument, index) => (
                                                <tr>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <div className="flex items-center gap-x-2">
                                                                <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                                    </svg>
                                                                </div>
                                                                
                                                                <div>
                                                                    <h2 className="font-normal text-gray-800">{item.name}</h2>
                                                                    <p className="text-xs font-normal text-gray-500">200 KB</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                                        200 KB
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                        <Link  href={item.file} target="blank" className="text-blue-500 hover:text-indigo-500">Ver el documento</Link>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                        <button  onClick={()=>handleDeleteEmployeeDocument(item.id as number)}  className="px-1 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6 hover:bg-gray-100">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>        
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            </div>
        </details>  
    )
}

export default TableEmployeeDocuments;