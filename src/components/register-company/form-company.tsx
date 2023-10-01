"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ICompany } from '@/interfaces/companies';
import { companyService } from '@/services/companie-service';
import { mediaService } from "@/services/media-service";
import UploadImage from "../ui/upload-image";
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


    return (
      <div className="selection: selection:text-white">
          <div className="flex min-h-screen items-center justify-center">
              <div className="flex-1 p-8">
                <div className="mx-auto w-full overflow-hidden rounded-3xl bg-white shadow-xl">
                    {/* Form Body */}
                    <div className="rounded-tr-4xl bg-white px-10 pb-8 pt-4">
                        <form
                          className="mt-12"
                          action=""
                          method="POST"
                          onSubmit={onSubmit}
                        >
                          <div className='grid grid-cols-2 gap-2'>
                              <div className='flex flex-col gap-2'>
                                  <h4 className="text-2xl font-semibold text-black">
                                    Formulario de registro
                                  </h4>
                                  <div className="form-control w-full max-w-xs">
                                    <label className="text-gray-700 text-xs" htmlFor="name">Nombre de la empresa o institucion *</label>
                                    <input
                                        {...register("name", { required: {
                                        value: true,
                                        message: 'El nombre es requerido'
                                        }})}
                                        name="name" 
                                        id="name" 
                                        type="text"
                                        placeholder="Nombre de la empresa o institucion ..."
                                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                                    {errors?.name && (
                                        <label className="label">
                                            <span className="text-red-600 text-xs">
                                            {errors.name.message}
                                            </span>
                                        </label>
                                        )}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="text-gray-700 text-xs" htmlFor="phone">Telefono *</label>
                                    <input
                                        {...register("phone", { required: {
                                        value: true,
                                        message: 'El telefono es requerido'
                                        }})}
                                        name="phone" 
                                        id="phone" 
                                        type="text"
                                        placeholder="Telefono ..."
                                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                                    {errors?.phone && (
                                        <label className="label">
                                            <span className="text-red-600 text-xs">
                                            {errors.phone.message}
                                            </span>
                                        </label>
                                        )}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="text-gray-700 text-xs" htmlFor="address">Direccion *</label>
                                    <input
                                        {...register("address", { required: {
                                        value: true,
                                        message: 'La direccion es requerido'
                                        }})}
                                        name="address" 
                                        id="address" 
                                        type="text"
                                        placeholder="Direccion ..." 
                                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                                    {errors?.address && (
                                        <label className="label">
                                            <span className="text-red-600 text-xs">
                                            {errors.address.message}
                                            </span>
                                        </label>
                                        )}
                                </div>
                                <UploadImage label="Logo de la empresa" setUriImage={setUriImage}/>
                              </div>
                              <div className='flex flex-col gap-2'>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="text-gray-700 text-xs" htmlFor="email">Correo electronico (usuario) *</label>
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
                                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                                        {errors?.email && (
                                            <label className="label">
                                                <span className="text-red-600 text-xs">
                                                {errors.email.message}
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
                                    <div className="form-control w-full max-w-xs">
                                        <label htmlFor="Description" className="block text-sm text-gray-700">Description *</label>
                                        <textarea
                                            {...register("description", { required: {
                                            value: true,
                                            message: 'La descripcion es requerida'
                                            }})}
                                            name="description"
                                            id="description" 
                                            placeholder="Descripcion ..." 
                                            className="block  mt-2 w-full  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                                            {errors?.description && (
                                            <label className="label">
                                                <span className="text-red-600 text-xs">
                                                {errors.description.message}
                                                </span>
                                            </label>
                                            )}
                                    </div>
                                    <div className="form-control w-full max-w-xs hidden">
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
                                </div>
                            </div>
                            {/* Submit Button */}
                            <div className="flex justify-start mt-6">
                                <button className="btn btn-sm rounded-l btn-success text-xs">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );


}

export default FormCreateCompany;