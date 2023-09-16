import ContainerBlog from "../container/container";

function HeaderBlog(){
    return(
        <div className="relative" id="home">
            <ContainerBlog>
                <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                    <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                </div>
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Payroll platform</h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">Lleva el control de tu nomina facil, rapido y seguro!</p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <a
                            href="#"
                            className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                            <span className="relative text-base font-semibold text-white">Iniciar</span>
                            </a>
                            <a
                            href="#"
                            className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                            >
                            <span
                                className="relative text-base font-semibold text-primary dark:text-white">Conocenos</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-2/3 text-center mx-auto">
                        <h2 className="mt-8 text-gray-700 dark:text-gray-300 text-3xl md:text-4xl xl:text-5xl">Confian en nosotros</h2>
                    </div>

                    <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/microsoft.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src="./images/clients/airbnb.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                        <img src="./images/clients/google.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/ge.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/netflix.svg" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                    </div>
                </div>
            </ContainerBlog>
        </div>
    )
}

export default HeaderBlog;