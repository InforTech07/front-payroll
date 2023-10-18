"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { userService } from "@/services/user-service";


type FormLogin = {
  email: string;
  password: string;
};

function FormLogin(){
    const [email, setEmail] = useState("");
    const [existUser, setExistUser] = useState(false);
    const router = useRouter();
    const {
          register, 
          handleSubmit, 
          formState:{ errors },
          setValue,
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
          return router.push("/platform");
        }
      });
    });

    const verifyUser = async (e:any) => {
      e.preventDefault();
      const res = await userService.verifyAccount(email);
      if(res.is_default_password){
        toast.info("Usuario encontrado, por favor cambie su contraseña");
        router.push(`/reset-password/${res.id}`);
      }
      if(!res.is_default_password){
        setExistUser(true);
        setValue("email", email);
      }

      if(res.error){
        toast.error("Usuario no encontrado");
      }
    }
    const divStyle = {
      backgroundImage: 'url(https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHBoYXJldHR5LWJveHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)',
    };
    
    return (
      <>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <div className="hidden bg-cover lg:block lg:w-1/2" style={divStyle}></div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="text-xl font-semibold text-center text-gray-600">BIENVENIDO</p>
            {existUser ? (
              <form
                className="mt-12"
                action=""
                method="POST"
                onSubmit={onSubmit}
                >
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">Usuario:</label>
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
                    placeholder="john@doe.com"
                    autoComplete="off" 
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" 
                    type="email" />
                    {errors?.email && (
                      <label className="label">
                        <span className="text-red-600 text-sm">
                          {errors.email.message}
                        </span>
                      </label>
                    )}
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">Password:</label>
                    <input
                      {...register("password", { required: {
                        value: true,
                        message: "Ingrese una contraseña",
                      }
                    })}
                      id="password"
                      name="password"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" 
                      type="password" 
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

                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Ingresar
                    </button>
                </div>
              </form>
            ):(
            <form
              className="mt-12"
              action=""
              method="POST"
              onSubmit={verifyUser}
              >
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">Usuario:</label>
                  <input 
                  id="email"
                  name="email"
                  placeholder="john@doe.com"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" 
                  type="email" />
              </div>
              <div className="mt-6">
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                      Ingresar
                  </button>
              </div>
            </form>)}
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