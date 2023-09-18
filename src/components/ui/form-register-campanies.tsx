"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IFormRegisterCompanies } from '@/entitys/companies';
import { companyService } from '@/services/companie-service';


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
    const [succesRegister, setSuccesRegister] = useState<boolean>(false);
    const [errorRegister, setErrorRegister] = useState<boolean>(false);
    const {
          register, 
          handleSubmit, 
          formState:{ errors }, 
          watch
    } = useForm<IFormRegisterCompanies>();

    const onSubmit =   handleSubmit((data) => {
      companyService.registerCompanies(data).then(res => {
        if(res){
          setSuccesRegister(true);
          console.log(res);
        }
      }).catch(err => {
        setErrorRegister(true);
        console.log(err);
      });
      
    });
    
    return (
      <div className="selection: selection:text-white">
          <div className="flex min-h-screen items-center justify-center">
              <div className="flex-1 p-8">
              { succesRegister && (
                      <div className="alert alert-success my-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Registro satisfactorio, Ingrese a su correo para activar su cuenta</span>
                      </div>
                    )}
                { errorRegister && (
                      <div className="alert alert-error my-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Lo sentimos, no podemos registrar ahora..!!</span>
                      </div>
                    )}
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
                                  {/* Email Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Nombre de la empresa</span>
                                    </label>
                                    <input
                                      {...register("company", { required: {
                                        value: true,
                                        message: "Ingrese un nombre",
                                      } })}
                                      id="company"
                                      name="company"
                                      type="text"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="micromercado"
                                      autoComplete="off" 
                                    />
                                    {errors?.company && (
                                      <label className="label">
                                        <span className="text-red-600 text-sm">
                                          {errors.company.message}
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
                                  {/* Name admin Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Nombre del administrador</span>
                                    </label>
                                    <input
                                      {...register("name", { required:{
                                        value: true,
                                        message: "Ingrese el nombre",
                                      }
                                      })}
                                      id="name"
                                      name="name"
                                      type="text"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="John Doe"
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
                                  {/* last name Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Apellidos</span>
                                    </label>
                                    <input
                                      {...register("lastName", { required:{
                                        value: true,
                                        message: "Ingrese el apellido",
                                      } })}
                                      id="lastName"
                                      name="lastName"
                                      type="text"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="Perez Lopez"
                                      autoComplete="off" 
                                    />
                                    {errors?.lastName && (
                                      <label className="label">
                                        <span className="text-red-600 text-sm">{
                                          errors.lastName.message
                                        }</span>
                                      </label>
                                    )}
                                  </div>
                                  {/* phone admin Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Telefono</span>
                                    </label>
                                    <input
                                      {...register("phone", { required:{
                                        value: true,
                                        message: "Ingrese el telefono",
                                      } })}
                                      id="phone"
                                      name="phone"
                                      type="text"
                                      className="input input-bordered rounded-l input-sm w-full max-w-xs text-black"
                                      placeholder="456778343"
                                      autoComplete="off" 
                                    />
                                    {errors?.phone && (
                                      <label className="label">
                                        <span className="text-red-600 text-sm">{ errors.phone.message}</span>
                                      </label>
                                    )}
                                  </div>
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


                {/* Forgot Password Link
                <a
                  href="#"
                  className="mt-4 block text-center text-sm font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  Forgot your password?
                </a> */}