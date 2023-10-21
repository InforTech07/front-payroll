"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ICompany } from '@/interfaces/companies';
import { companyService } from '@/services/companie-service';
import { mediaService } from "@/services/media-service";
import UploadImage from "../ui/upload-image";
import UploadFile from "../ui/upload-file";
import { toast } from "react-toastify";


function FormCreateCompany(){
    const {
          register, 
          handleSubmit,
          setValue,
          reset, 
          formState:{ errors }, 
          watch
    } = useForm<ICompany>();

    const onSubmit =   handleSubmit((data) => {
      companyService.registerCompany(data).then(res => {
        if(res){
          toast.success("Registro satisfactorio, puede iniciar sesion");
          reset();
          return;
        }
      }).catch(err => {
        toast.error("Lo sentimos, no podemos registrar ahora..!!");
        return;
      });
      
    });
    const setUriImage = (uri:string) => {
        setValue("picture", uri);
    }
    const divStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)',
      };


    return (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-6xl">
        <div className="hidden bg-cover lg:block lg:w-1/2" style={divStyle}></div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="text-xl font-semibold text-center text-gray-600">REGISTRO</p>

                <form onSubmit={onSubmit}>
                    <div className="mt-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="name">Nombre de la empresa o institucion *</label>
                        <input
                        {...register("name", { required: {
                        value: true,
                        message: 'El nombre es requerido'
                        }})}
                        name="name" 
                        id="name" 
                        type="text"
                        placeholder="Nombre de la empresa o institucion ..."
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    {errors?.name && (
                        <label className="label">
                            <span className="text-red-600 text-xs">
                            {errors.name.message}
                            </span>
                        </label>
                        )}
                    </div>
                    <div className="mt-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="phone">Telefono *</label>
                        <input
                            {...register("phone", { required: {
                            value: true,
                            message: 'El telefono es requerido'
                            }})}
                            name="phone" 
                            id="phone" 
                            type="text"
                            placeholder="Telefono ..."
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                           />
                        {errors?.phone && (
                            <label className="label">
                                <span className="text-red-600 text-xs">
                                {errors.phone.message}
                                </span>
                            </label>
                            )}
                    </div>
                    <div className="mt-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="address">Direccion *</label>
                        <input
                            {...register("address", { required: {
                            value: true,
                            message: 'La direccion es requerido'
                            }})}
                            name="address" 
                            id="address" 
                            type="text"
                            placeholder="Direccion ..." 
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        {errors?.address && (
                            <label className="label">
                                <span className="text-red-600 text-xs">
                                {errors.address.message}
                                </span>
                            </label>
                            )}
                    </div>
                    <div className="mt-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="email">Correo electronico (usuario) *</label>
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
                        name="email" 
                        id="email" 
                        type="email"
                        placeholder="example@email.com"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {errors?.email && (
                            <label className="label">
                                <span className="text-red-600 text-xs">
                                {errors.email.message}
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
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
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
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        {errors?.confirmPassword && (
                            <label className="label">
                                <span className="text-red-600 text-xs">
                                {errors.confirmPassword.message}
                                </span>
                            </label>
                            )}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-600">Description *</label>
                        <textarea
                            {...register("description", { required: {
                            value: true,
                            message: 'La descripcion es requerida'
                            }})}
                            name="description"
                            id="description" 
                            placeholder="Descripcion ..." 
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                           ></textarea>
                            {errors?.description && (
                            <label className="label">
                                <span className="text-red-600 text-xs">
                                {errors.description.message}
                                </span>
                            </label>
                            )}
                    </div>
                    <div className="hidden">
                        <label className="text-gray-700 text-xs" htmlFor="create_user">Confirmacion *</label>
                        <input
                            {...register("create_user", { required: {
                                value: true,
                                message: "Ingrese una contraseña",
                                }
                            })}
                            name="create_user" 
                            id="create_user" 
                            type="checkbox" 
                            checked={true}
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                        {errors?.create_user && (
                            <label className="label">
                                <span className="text-red-600 text-xs">
                                {errors.create_user.message}
                                </span>
                            </label>
                            )}
                    </div>
                    <UploadImage label="Logo de la empresa" setUriImage={setUriImage}/>
                    <UploadFile setUriFile={setUriImage}/>
                    <div className="mt-6">
                        <button 
                            type="submit"
                            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );


}

export default FormCreateCompany;