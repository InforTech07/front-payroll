"use client";
import ContainerBlog from "@/components/container/container";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { userService } from "@/services/user-service";
import { toast } from "react-toastify";
import Link from "next/link";

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
    const divStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHBoYXJldHR5LWJveHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)',
      };
    return (
        <div className="relative h-screen flex flex-col items-center justify-center">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <div className="hidden bg-cover lg:block lg:w-1/2" style={divStyle}></div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="text-xl font-semibold text-center text-gray-600">BIENVENIDO</p>
                        <form
                          className="mt-12"
                          action=""
                          method="POST"
                          onSubmit={onSubmit}
                        >
                              <div>
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
                                  <div className="mt-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="password">Password *</label>
                                        <input
                                            {...register("password", { required: {
                                            value: true,
                                            message: 'La password es requerido'
                                            }})}
                                            name="password" 
                                            id="password" 
                                            type="password" 
                                            placeholder="********"
                                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                                           />
                                        {errors?.password && (
                                            <label className="label">
                                                <span className="text-red-600 text-xs">
                                                {errors.password.message}
                                                </span>
                                            </label>
                                            )}
                                    </div>
                                    <div className="mt-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="confirmPassword">Confirmacion *</label>
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
                                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                                            />
                                        {errors?.confirmPassword && (
                                            <label className="label">
                                                <span className="text-red-600 text-xs">
                                                {errors.confirmPassword.message}
                                                </span>
                                            </label>
                                            )}
                                    </div>
                                    <div className="mt-6">
                                        <button 
                                            type="submit"
                                            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                            Cambiar
                                        </button>
                                    </div>
                              </div>
                        </form>
                        <div className="mt-6">
                            <Link href="/login"
                                className="w-full px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">
                                Regresar
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ResetPasswordPage;