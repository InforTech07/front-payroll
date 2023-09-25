"use client";
import { useForm } from "react-hook-form";
import { IJobPosition } from '@/interfaces/hrm';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerJobPosition, updateJobPosition } from "@/redux/hrm/job-position-slice";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

interface IFormCreateUpdateJobPosition {
  department: string | number;
}

function FormCreateUpdateJobPosition({department}: IFormCreateUpdateJobPosition){
  const router = useRouter();
  const params = useParams();
  const idJobPosition = params.id;
  const formOptions = {
    defaultValues: {
      name: "",
      description: "",
    }
  }

  if(idJobPosition){
    // useAppSelector(state => state.department.departments).map((item: IJobPosition) => {
    //   if(item.id == idJobPosition){
    //     formOptions.defaultValues = {
    //       name: item.name,
    //       description: item.description,
    //       company: "1",
    //       id: item.id,
    //       department: department
    //     }
    //   }
    // });
  } 
  const {
          register, 
          handleSubmit,
          setValue, 
          formState:{ errors },
          reset,
    } = useForm<IJobPosition>(formOptions);

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
      if(idJobPosition){
        dispatch(updateJobPosition(data)).then(res => {
          if(res.payload){
            router.back();
            return;
          }
        }).catch(err => {
          return;
        });
      }else{
        dispatch(registerJobPosition(data)).then(res => {
          if(res.payload){
            reset();
            document.getElementById('drawer-form-job-position')?.click();
            return;
          }}).catch(err => {
            return;
          });
      }
    });

    const handleHideDrawer = () => {
      if(idJobPosition){
        router.back();
      }
    };

    useEffect(() => {
      if(idJobPosition){
        document.getElementById('drawer-form-job-position')?.click();
      }
    }, []);


    return (
      <div className="drawer drawer-end">
      <input id={`drawer-form${department}`} type="checkbox"  className="drawer-toggle" />
      <div className="drawer-content">
      </div> 
      <div className="drawer-side z-10">
          <label htmlFor={`drawer-form${department}`} onClick={handleHideDrawer} className="drawer-overlay"></label>
          <div className="menu p-4 w-96 min-h-full bg-base-200">
              <span className="text-gray-700 text-md text-center">{idJobPosition ? "Actualizar Registro": "Nuevo Registro"}</span>
              <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 gap-2 mt-4">
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="name">Nombre del puesto</label>
                          <input
                            {...register("name", { required: {
                              value: true,
                              message: 'El nombre es requerido'
                            }})}
                            name="name" 
                            id="name" 
                            type="text"
                            // value={modeEdit ? data?.name : ""} 
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.name && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.name.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label htmlFor="Description" className="block text-sm text-gray-700">Descripcion</label>
                          <textarea
                            {...register("description", { required: {
                              value: true,
                              message: 'La descripcion es requerida'
                            }})}
                            name="description"
                            id="description" 
                            placeholder="Descripcion ..." 
                            // value={modeEdit ? data?.description : ""}
                            className="block  mt-2 w-full  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                            {errors?.description && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.description.message}
                                </span>
                              </label>
                            )}
                      </div>
                      {/* <div>
                        <input
                        {...register("company", { required: {
                          value: true,
                          message: 'La compania es requerida'
                        }})}
                          id="company" 
                          name="company" 
                          type="text" 
                          value="1" 
                          hidden />
                      </div> */}
                      <div>
                        <input 
                        {...register("id", { required: {
                          value: false,
                          message: 'La compania es requerida'
                        }})}
                          id="id" 
                          name="id" 
                          type="text" 
                          value="3" hidden />
                      </div>
                      <div>
                        <input 
                        {...register("id", { required: {
                          value: false,
                          message: 'La compania es requerida'
                        }})}
                          id="id" 
                          name="id" 
                          type="text" 
                          value={department} hidden />
                      </div>
                  </div>
          
                  <div className="flex justify-start mt-6">
                      <button className="btn btn-sm rounded-l btn-success text-xs">{idJobPosition ? "Actualizar":"Guardar"}</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
    );
}

export default FormCreateUpdateJobPosition;