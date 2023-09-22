"use client";
import { useForm } from "react-hook-form";
import { IDepartment } from '@/entitys/employee';
import { employeeService } from '@/services/employee-service';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function FormRegisterDepartment(){
    const {
          register, 
          handleSubmit, 
          formState:{ errors }
    } = useForm<IDepartment>();

    const onSubmit =   handleSubmit((data) => {
      employeeService.registerDepartment(data).then(res => {
        if(res){
          toast.success("Registro satisfactorio");
          return;
        }
      }).catch(err => {
        toast.error("Error al registrar");
        return;
      });
    });
    
    return (
          <div className="flex">
              <div className="flex-1">
                <div className="mx-auto w-full overflow-hidden rounded-3xl bg-bray-200 shadow-xl">
                    {/* Form Body */}
                    <div className="rounded-tr-4xl bg-white px-10 pb-8 pt-4">
                        <form
                          className="mt-12"
                          action=""
                          method="POST"
                          onSubmit={onSubmit}
                        >
                                  {/* name company Input */}
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">Nombre del departamento</span>
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
                                  <input
                                      {...register("company", { required: {
                                        value: true,
                                        message: "No se tiene empresa asociada",
                                      } })}
                                      id="company"
                                      name="company"
                                      type="text"
                                      value={2}
                                      hidden
                                    />
                            {/* Submit Button */}
                            <button 
                              type="submit" 
                              className="btn btn-success rounded-l">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
          </div>
    );


}

export default FormRegisterDepartment;