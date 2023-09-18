"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


type FormLogin = {
  email: string;
  password: string;
};

function FormLogin(){
    const router = useRouter();
    const {
          register, 
          handleSubmit, 
          formState:{ errors },
          reset 
    } = useForm<FormLogin>();

    const onSubmit =   handleSubmit((data) => {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((res) => {
        if (res?.error) {
          toast.error("Credenciales incorrectas");
          reset();
          return;
        }
        if (res?.ok) {
          toast.success("Bienvenido");
          return router.push("/dashboard");
        }
      });
    });
    
    return (
      <>
      <div className="relative h-screen flex justify-center before:absolute before:inset-0 before:w-full before:h-[50%]">
             <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                 <div className="m-auto space-y-8 md:w-8/12 lg:w-full">
                     <div className="rounded-xl border backdrop-blur-2xl bg-gray-200 shadow-xl">
                         <div className="lg:grid lg:grid-cols-2">
                             <div className="lg:block" hidden>
                                 <div className='flex flex-col h-full p-6 sm:p-16 items-center justify-center'>
                                     <div aria-hidden="true" className="flex space-x-1">
                                          <div className="h-12 w-12 rounded-full bg-gray-900 dark:bg-white"></div>
                                          <div className="h-24 w-6 bg-primary"></div>
                                     </div>
                                     <div className="flex flex-col space-y-4">
                                         <span className="text-black mt-5 text-center text-3xl">Bienvenido a Payroll</span>
                                         <span className="text-black text-center text-3xl">Tu plataforma de nomina.</span>
                                     </div>
                                 </div>
                             </div>
                        <form
                          className="mt-12"
                          action=""
                          method="POST"
                          onSubmit={onSubmit}
                        >
                              <div className='flex flex-col'>
                                  <h4 className="text-2xl font-semibold text-gray-900">
                                    Ingresa tus credenciales
                                  </h4>
                                  {/* Email Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Correo electronico</span>
                                    </label>
                                    <input
                                      {...register("email", { required: {
                                          value: true,
                                          message: "Ingrese un correo",
                                        }, 
                                        pattern: {
                                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                          message: "Ingrese un correo valido",
                                        }
                                     })}
                                      id="email"
                                      name="email"
                                      type="email"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="john@doe.com"
                                      autoComplete="off" 
                                    />
                                    {errors?.email && (
                                      <label className="label">
                                        <span className="text-red-600 text-sm">
                                          {errors.email.message}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                  {/* password Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Contraseña</span>
                                    </label>
                                    <input
                                      {...register("password", { required: {
                                        value: true,
                                        message: "Ingrese una contraseña",
                                      }
                                     })}
                                      id="password"
                                      name="password"
                                      type="password"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="*********"
                                      autoComplete="off" 
                                    />
                                    {errors?.password && (
                                      <label className="label">
                                        <span className="text-red-600 text-sm">
                                          {
                                            errors.password.message
                                          }
                                        </span>
                                      </label>
                                    )}
                                </div>
                              </div>
                            {/* Submit Button */}
                            <button 
                              type="submit" 
                              className="btn btn-success my-6 rounded-l">Ingresar</button>
                        </form>
                        </div>
                         </div>
                     </div>
                     <div className="text-center space-x-4">
                         <span>&copy; Payroll - Platform</span>
                        <a href="#" className="text-sm hover:text-blue-900">Privacidad & Terminos</a>
                     </div>
                 </div>
             </div>
            </>
    );
}

export default FormLogin;


                {/* Forgot Password Link
                <a
                  href="#"
                  className="mt-4 block text-center text-sm font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  Forgot your password?
                </a> */}