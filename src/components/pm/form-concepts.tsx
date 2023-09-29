"use client";
import { useForm } from "react-hook-form";
import { IPayrollConcept } from '@/interfaces/pm';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerPayrollConcept, updatePayrollConcept } from "@/redux/pm/payroll-concept-slice";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

interface IFormCreateUpdatePayrollConcept{
    idBtnDrawer: string;
}

function FormCreateUpdatePayrollConcept({idBtnDrawer}: IFormCreateUpdatePayrollConcept){
    const router = useRouter();
    const params = useParams();
    let isModeEdit = false;
    
    const idEdit = params.id;
    
    if(idEdit){
        isModeEdit = true;
    }
  
    const formOptions = {
        defaultValues: {
            name: "",
            type: "1",
            amount: "",
            description: "",
            company: "1",
            id: ""
        }
    }

    if(isModeEdit){
        useAppSelector(state => state.payrollConcept.payrollConcepts).map((item: IPayrollConcept) => {
        if(item.id == idEdit){
            formOptions.defaultValues = {
              id: item.id,
              name: item.name,
              type: item.type,
              amount: item.amount as unknown as string,
              description: item.description,
              company: item.company_id as unknown as string,
            }
        }
        });
    } 
    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset,
    } = useForm<IPayrollConcept>(formOptions);

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
      if(isModeEdit){
        dispatch(updatePayrollConcept(data)).then(res => {
          if(res.payload){
            router.back();
            return;
          }
        }).catch(err => {
          return;
        });
      }else{
        dispatch(registerPayrollConcept(data)).then(res => {
          if(res.payload){
            reset();
            document.getElementById(idBtnDrawer)?.click();
            return;
          }}).catch(err => {
            return;
          });
      }
    });

    const handleHideDrawer = () => {
      if(isModeEdit){
        router.back();
      }
    };

    useEffect(() => {
      if(isModeEdit){
        document.getElementById(idBtnDrawer)?.click();
      }
    }, []);


    return (
      <div className="drawer drawer-end">
      <input id={idBtnDrawer} type="checkbox"  className="drawer-toggle"/>
      <div className="drawer-content">
      </div> 
      <div className="drawer-side z-10">
          <label htmlFor={idBtnDrawer} onClick={handleHideDrawer} className="drawer-overlay"></label>
          <div className="menu p-4 w-96 min-h-full bg-base-200">
              <span className="text-gray-700 text-md text-center">{isModeEdit ? "Actualizar Registro": "Nuevo Registro"}</span>
              <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 gap-2 mt-4">
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="name">Nombre del concepto</label>
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
                          <label className="text-gray-700 text-xs" htmlFor="type">Tipo</label>
                          <select
                            {...register("type", { required: {
                              value: true,
                              message: 'El genero es requerido'
                            }})}
                            name="type" 
                            id="type"  
                            className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                            <option value={1}>Ingreso</option>
                            <option value={2}>Deduccion</option>
                          </select>
                          {errors?.type && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.type.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="amount">Valor</label>
                          <input
                            {...register("amount", { required: {
                              value: true,
                              message: 'El nombre es requerido'
                            }})}
                            name="amount" 
                            id="amount" 
                            type="number"
                            // value={modeEdit ? data?.name : ""} 
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.amount && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.amount.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label htmlFor="Description" className="block text-sm text-gray-700">Description</label>
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
                      <div>
                        <input
                        {...register("company_id", { required: {
                          value: true,
                          message: 'La compania es requerida'
                        }})}
                          id="company" 
                          name="company" 
                          type="text" 
                          value="1" 
                          hidden />
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
                          value="3" hidden />
                      </div>
                  </div>
          
                  <div className="flex justify-start mt-6">
                      <button className="btn btn-sm rounded-l btn-success text-xs">{isModeEdit ? "Actualizar":"Guardar"}</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
    );
}

export default FormCreateUpdatePayrollConcept;