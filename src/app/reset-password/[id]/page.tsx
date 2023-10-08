"use client";
import ContainerBlog from "@/components/container/container";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { userService } from "@/services/user-service";
import { toast } from "react-toastify";

interface IResetPassword{
    id: string;
    password: string;
    confirmPassword: string;
}


function ResetPasswordPage(){
    const router = useRouter();
    const { id } = useParams();
    const {
          register, 
          handleSubmit, 
          formState:{ errors },
          watch,
          reset 
    } = useForm<IResetPassword>();

    const onSubmit = handleSubmit((data) => {
      userService.resetPassword(data).then(() => {
        reset();
        toast.success("Contraseña cambiada con exito");
        router.push("/login");
      }).catch((error) => {
        toast.error(error.message);
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
                                          <div className="h-12 w-12 rounded-full bg-gray-900"></div>
                                          <div className="h-24 w-6 bg-primary"></div>
                                     </div>
                                     <div className="flex flex-col space-y-4">
                                         <span className="text-black mt-5 text-center text-3xl">Payroll</span>
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
                              <div className='flex flex-col gap-4 items-center'>
                                  <h4 className="text-2xl font-semibold text-gray-900">
                                    Cambio de contraseña
                                  </h4>
                                  <div className="hidden">
                                        <label className="text-gray-700 text-xs" htmlFor="id">Password *</label>
                                        <input
                                            {...register("id", { required: {
                                            value: true,
                                            message: 'La password es requerido'
                                            }})}
                                            name="id" 
                                            id="id" 
                                            type="id" 
                                            value={id}
                                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                                        {errors?.id&& (
                                            <label className="label">
                                                <span className="text-red-600 text-xs">
                                                {errors.id.message}
                                                </span>
                                            </label>
                                            )}
                                    </div>
                                  <div className="form-control w-full max-w-xs">
                                        <label className="text-gray-700 text-xs" htmlFor="password">Password *</label>
                                        <input
                                            {...register("password", { required: {
                                            value: true,
                                            message: 'La password es requerido'
                                            }})}
                                            name="password" 
                                            id="password" 
                                            type="password" 
                                            placeholder="********"
                                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                                        {errors?.password && (
                                            <label className="label">
                                                <span className="text-red-600 text-xs">
                                                {errors.password.message}
                                                </span>
                                            </label>
                                            )}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="text-gray-700 text-xs" htmlFor="confirmPassword">Confirmacion *</label>
                                        <input
                                            {...register("confirmPassword", { required: {
                                                value: true,
                                                message: "Ingrese una contraseña",
                                              },
                                              validate: value => value === watch('password') || "Las contraseñas no coinciden"
                                            })}
                                            name="confirmPassword" 
                                            id="confirmPassword" 
                                            type="password" 
                                            placeholder="********"
                                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                                        {errors?.confirmPassword && (
                                            <label className="label">
                                                <span className="text-red-600 text-xs">
                                                {errors.confirmPassword.message}
                                                </span>
                                            </label>
                                            )}
                                    </div>
                                <div className="form-control w-full max-w-xs gap-2">
                                  <button type="submit" className="btn btn-success my-6 rounded-l">Cambiar</button>
                                </div>
                              </div>
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

export default ResetPasswordPage;