import { HtmlHTMLAttributes } from "react";

function TableEmployeeDocuments(){

        
    return(
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-l text-gray-700">Documentos del empleado</summary>
            <div className="collapse-content">
                <section className="container px-4 mx-auto">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <h2 className="text-lg font-medium text-gray-800">Gestion de documentos</h2>

                        <div className="flex items-center mt-4 gap-x-3">
                            <div className="form-control w-full max-w-xs">
                                <div>
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-2 text-center bg-white border-2 border-gray-300  cursor-pointer rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                        </svg>
                                        <h2 className="mt-1 text-xs tracking-wide text-gray-700">Cargar archivo</h2>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden grid grid-cols-4 gap-4 border border-gray-200 md:rounded-lg">
                                    {[1,2,3,4,5].map((item, index) => (
                                        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                                        <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>
                                    
                                        <div className="py-5 text-center">
                                            <a href="#" className="block text-xl font-bold text-gray-800"  role="link">John Doe</a>
                                            <span className="text-sm text-gray-700">Software Engineer</span>
                                        </div>
                                    </div>
                                    ))}
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