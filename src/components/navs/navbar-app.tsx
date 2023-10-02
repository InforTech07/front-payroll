type NavbarAppProps = {
    title: string;
    idBtnDrawer: string;
}

function NavbarApp({title, idBtnDrawer}: NavbarAppProps){
    return(
        <nav className="bg-gray-200 shadow rounded-xl">
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
                    <a href="#" className="text-blue-600 text-xs hover:underline">
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
                    <label htmlFor={idBtnDrawer} className="rounded-l px-1 py-1 text-xs transition-colors duration-200 sm:text-base sm:px-6 hover:bg-gray-100">Nuevo</label>
                    <button className="px-1 py-1 text-xs  text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 hover:bg-gray-100">
                        Informe
                    </button>

                    <button className="px-1 py-1 text-xs  text-gray-600 transition-colors duration-200 sm:text-base sm:px-6  hover:bg-gray-100">
                        Buscador
                    </button>

                    <button className="px-1 py-1 text-xs  text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 hover:bg-gray-100">
                        Otra opcion
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarApp;