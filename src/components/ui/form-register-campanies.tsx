"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IFormRegisterCompanies } from '@/interfaces/companies';
import { companyService } from '@/services/companie-service';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


// const resolver: Resolver<FormRegisterCompaniesValues> = async (values) => {
//   return {
//     values: values.companies ? values : {},
//     errors: !values.companies
//       ? {
//           companies: {
//             type: "required",
//             message: "Ingrese un nombre",
//           },
//         }
//       : {},
//   }
// };

function FormRegisterCampanies(){
    const router = useRouter();
    const {
          register, 
          handleSubmit, 
          formState:{ errors }, 
          watch
    } = useForm<IFormRegisterCompanies>();

    const onSubmit =   handleSubmit((data) => {
      companyService.registerCompanies(data).then(res => {
        if(res){
          toast.success("Registro satisfactorio, puede iniciar sesion");
          //router.push('/login');
          return;
        }
      }).catch(err => {
        toast.error("Lo sentimos, no podemos registrar ahora..!!");
        return;
      });
      
    });
    
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
                              <div className='flex flex-col'>
                                  <h4 className="text-2xl font-semibold text-black">
                                    Datos de la empresa
                                  </h4>
                                  {/* name company Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Nombre de la empresa</span>
                                    </label>
                                    <input
                                      {...register("name", { required: {
                                        value: true,
                                        message: "Ingrese un nombre",
                                      } })}
                                      id="name"
                                      name="name"
                                      type="text"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="micromercado"
                                      autoComplete="off" 
                                    />
                                    {errors?.name && (
                                      <label className="label">
                                        <span className="text-red-600 text-sm">
                                          {errors.name.message}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                  {/* phone company Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Telefono de la empresa</span>
                                    </label>
                                    <input
                                      {...register("phone", { required: {
                                        value: true,
                                        message: "Ingrese un telefono",
                                      } })}
                                      id="phone"
                                      name="phone"
                                      type="text"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="1232344"
                                      autoComplete="off" 
                                    />
                                    {errors?.phone && (
                                      <label className="label">
                                        <span className="text-red-600 text-sm">
                                          {errors.phone.message}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                  {/* name company Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Direccion de la empresa</span>
                                    </label>
                                    <input
                                      {...register("address", { required: {
                                        value: true,
                                        message: "Ingrese una direccion",
                                      } })}
                                      id="address"
                                      name="address"
                                      type="text"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="Av. 1234"
                                      autoComplete="off" 
                                    />
                                    {errors?.address && (
                                      <label className="label">
                                        <span className="text-red-600 text-sm">
                                          {errors.address.message}
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                  {/* Description companies */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Descripcion</span>
                                    </label>
                                    <textarea 
                                      {...register("description", { required:{
                                        value: true,
                                        message: "Ingrese una descripcion",
                                      } })}
                                      id="description"
                                      name="description"
                                      placeholder="descripcion de la empresa" 
                                      className="textarea textarea-bordered  rounded-l textarea-sm w-full max-w-xs text-black" ></textarea>
                                      {errors?.description && (
                                        <label className="label">
                                          <span className="text-red-600 text-sm">
                                            {errors.description.message}
                                          </span>
                                        </label>
                                      )}
                                  </div>
                                  {/* logo companies */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Logotipo</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                                  </div>
                              </div>
                              <div className='flex flex-col'>
                                  <h4 className="text-2xl font-semibold text-gray-900">
                                    Datos del administrador
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
                                  {/* Confirm_password Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Confirmacion de contraseña</span>
                                    </label>
                                    <input
                                      {...register("confirmPassword", { required: {
                                        value: true,
                                        message: "Ingrese una contraseña",
                                      },
                                      validate: value => value === watch('password') || "Las contraseñas no coinciden"
                                    })}
                                      id="confirmPassword"
                                      name="confirmPassword"
                                      type="password"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="*********"
                                      autoComplete="off" 
                                    />
                                    {errors?.confirmPassword && (
                                      <label className="label">
                                        <span className="text-red-600 text-sm">
                                          {
                                            errors.confirmPassword.message
                                          }
                                        </span>
                                      </label>
                                    )}
                                  </div>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <button 
                              type="submit" 
                              className="btn btn-success rounded-l">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );


}

export default FormRegisterCampanies;
  