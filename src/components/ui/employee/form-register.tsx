"use client";
import { useState } from "react";
//import { useforNamem } from "react-hook-forNamem";
//import { IforNamemRegisterCompanies } from '@/entitys/companies';
import { companyService } from '@/services/companie-service';
import { toast } from "react-toastify";


function FormRegisterEmployee(){
    // const {
    //       register, 
    //       handleSubmit, 
    //       forNamemState:{ errors }, 
    //       watch
    // } = useforNamem<IforNamemRegisterCompanies>();

    // const onSubmit =   handleSubmit((data) => {
    //   companyService.registerCompanies(data).then(res => {
    //     if(res.ok){
    //       toast.success("Registro satisfactorio, puede iniciar sesion");
    //       //router.push('/login');
    //       return;
    //     }
    //   }).catch(err => {
    //     toast.error("Lo sentimos, no podemos registrar ahora..!!");
    //     return;
    //   });
      
    // });
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-4" className="btn btn-sm rounded-l btn-neutral text-xs">Nuevo Registro</label> */}
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <div className="menu p-4 w-96 min-h-full bg-base-200">
                    <span className="text-gray-700 text-md text-center">Nuevo Registro</span>
                    <form>
                        <div className="grid grid-cols-1 gap-2 mt-4">
                            <div>
                                <label className="text-gray-700 text-xs" htmlFor="username">Username</label>
                                <input id="username" type="text" className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                            </div>
                            <div>
                                <label className="text-gray-700 text-xs" htmlFor="emailAddress">Email Address</label>
                                <input id="emailAddress" type="email" className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                            </div>
                
                            <div>
                                <label className="text-gray-700 text-xs" htmlFor="password">Password</label>
                                <input id="password" type="password" className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                            </div>
                            <div>
                                <label htmlFor="username" className="text-gray-700 text-xs">Username</label>

                                <input type="text" placeholder="John Doe" className="block  input-sm  w-full placeholder-gray-400/70  rounded-lg border border-red-400 bg-white px-4 py-2 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40" />
                                
                                <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <label htmlFor="Birthday" className="block text-sm text-gray-700">Birthday</label>

                                <input type="date" placeholder="John Doe" className="block  input-sm  w-full placeholder-gray-400/70  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm text-gray-500">Image</label>
                                <input type="file" className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label htmlFor="file" className="block text-sm text-gray-700">File</label>

                                <label htmlFor="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                    </svg>
                                    <h2 className="mt-1 font-medium tracking-wide text-gray-700">Cargar archivo</h2>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="Description" className="block text-sm text-gray-700">Description</label>
                                <textarea placeholder="lorem..." className="block  mt-2 w-full  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                            </div>
    
                        </div>

                        <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-500">Password</label>
                            <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
                        </div>
                        <div className="relative flex items-center mt-2">
                            <button className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300  hover:text-gray-500">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <input type="password" placeholder="********" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Pick the best fantasy franchise</span>
                                <span className="label-text-alt">Alt label</span>
                            </label>
                            <select className="select rounded-lg select-sm">
                                <option disabled selected>Pick one</option>
                                <option className="text-gray-700">Star Wars</option>
                                <option className="text-gray-700">Harry Potter</option>
                                <option className="text-gray-700">Lord of the Rings</option>
                                <option className="text-gray-700">Planet of the Apes</option>
                                <option className="text-gray-700">Star Trek</option>
                            </select>
                            <label className="label">
                                <span className="label-text-alt">Alt label</span>
                                <span className="label-text-alt">Alt label</span>
                            </label>
                            </div>

                    </div>
                
                        <div className="flex justify-start mt-6">
                            <button className="btn btn-sm rounded-l btn-success text-xs">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default FormRegisterEmployee;