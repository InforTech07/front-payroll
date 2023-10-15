type NavbarAppProps = {
    title: string;
    idBtnDrawer: string;
    cart?: boolean;
    subTotal?: number;
    count?: number;
}

function NavbarApp({title, idBtnDrawer, cart=false, subTotal=0, count=0}: NavbarAppProps){
    return(
        <nav className="bg-gray-200 rounded-md">
            <div className="flex items-center justify-between p-2 mx-auto text-gray-600 capitalize">
                <div className="flex items-center  overflow-x-auto whitespace-nowrap">
                    <a href="#" className="text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </a>
                    <span className="mx-3 text-gray-500 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <a href="#" className="text-gray-900 text-base font-semibold hover:underline">
                        {title}
                    </a>
                </div>
                <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                    <div className="relative hidden">
                        <input type="text" className="w-full py-1 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Search"/>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </div>
                    <label htmlFor={idBtnDrawer} className="rounded-md px-1 py-1 text-base transition-colors duration-200 sm:text-xs sm:px-6 hover:bg-gray-100">Nuevo</label>
                    {/* <button className="px-1 py-1 text-xs  text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 hover:bg-gray-100">
                        Comision Venta
                    </button>

                    <button className="px-1 py-1 text-xs  text-gray-600 transition-colors duration-200 sm:text-base sm:px-6  hover:bg-gray-100">
                        Bono Produccion
                    </button> */}

                    
                </div>
                {
                        cart && (
                            <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{count}</span>
                                    </div>
                                </label>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                    <span className="font-bold text-lg text-black">{count} Productos </span>
                                    <span className="text-info">Subtotal: {subTotal.toPrecision(4)}</span>
                                    <div className="card-actions">
                                        <label htmlFor="my-drawer-store" className="btn btn-success btn-sm drawer-button">Ver Productos</label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    }
            </div>
        </nav>
    )
}

export default NavbarApp;