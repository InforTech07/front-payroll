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