"use client";
import { useForm } from "react-hook-form";
import { IPayrollPeriod } from '@/interfaces/pm';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerPayrollPeriod, updatePayrollPeriod } from "@/redux/pm/payroll-period-slice";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

interface IFormCreateUpdatePayrollPeriodProps{
    idBtnDrawer: string;
}

function FormCreateUpdatePayrollPeriod({idBtnDrawer}: IFormCreateUpdatePayrollPeriodProps){
    const router = useRouter();
    const params = useParams();
    const { data: session, status } = useSession();
    let isModeEdit = false;
    const periods = useAppSelector(state => state.payrollPeriod.payrollPeriods);
    const idEdit = params.id;
    
    if(idEdit){
        isModeEdit = true;
    }
  
    const formOptions = {
        defaultValues: {
          id: "",
          name: "",
          start_date: "",
          end_date: "",
          is_open: true,
          type: "MENSUAL",
          company: session?.user?.idCompany as unknown as string,
        }
    }

    if(isModeEdit){
        const period = periods.find((item: IPayrollPeriod) => item.id == idEdit);
        if(period){
            formOptions.defaultValues = {
                id: period.id as unknown as string,
                name: period.name,
                start_date: period.start_date,
                end_date: period.end_date,
                is_open: period.is_open,
                type: period.type,
                company: period.company as unknown as string,
            }
        }
    } 
    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        setValue,
        reset,
    } = useForm<IPayrollPeriod>(formOptions as any);

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
      if(isModeEdit){
        dispatch(updatePayrollPeriod(data)).then(res => {
          if(res.payload){
            router.back();
            return;
          }
        }).catch(err => {
          return;
        });
      }else{
        setValue("company", session?.user?.idCompany as unknown as string);
        setValue("is_open", true);
        dispatch(registerPayrollPeriod(data)).then(res => {
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
      <div className="drawer-side z-50">
          <label htmlFor={idBtnDrawer} onClick={handleHideDrawer} className="drawer-overlay"></label>
          <div className="menu p-4 w-96 min-h-full bg-base-200">
              <span className="text-gray-700 text-md text-center">{isModeEdit ? "Actualizar Registro": "Nuevo Registro"}</span>
              <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 gap-2 mt-4">
                      <div >
                          <label className="text-gray-700 text-xs" htmlFor="name">Mes:</label>
                          <select
                            {...register("name", { required: {
                              value: true,
                              message: 'El Mes es requerido'
                            }})}
                            name="name" 
                            id="name"  
                            className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                            <option value="ENERO">ENERO</option>
                            <option value="FEBRERO">FEBRERO</option>
                            <option value="MARZO">MARZO</option>
                            <option value="ABRIL">ABRIL</option>
                            <option value="MAYO">MAYO</option>
                            <option value="JUNIO">JUNIO</option>
                            <option value="JULIO">JULIO</option>
                            <option value="AGOSTO">AGOSTO</option>
                            <option value="SEPTIEMBRE">SEPTIEMBRE</option>
                            <option value="OCTUBRE">OCTUBRE</option>
                            <option value="NOVIEMBRE">NOVIEMBRE</option>
                            <option value="DICIEMBRE">DICIEMBRE</option>
                          </select>
                          {errors?.name && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.name.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="start_date">Del: </label>
                          <input
                            {...register("start_date", { required: {
                              value: true,
                              message: 'La fecha de inicio es requerida'
                            }})}
                            name="start_date" 
                            id="start_date" 
                            type="date"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.start_date && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.start_date.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="end_date">Al: </label>
                          <input
                            {...register("end_date", { required: {
                              value: true,
                              message: 'El nombre es requerido'
                            }})}
                            name="end_date" 
                            id="end_date" 
                            type="date"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.end_date && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.end_date.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div className="hidden">
                          <label className="text-gray-700 text-xs" htmlFor="type"> </label>
                          <input
                            {...register("type", { required: {
                              value: false,
                              message: 'El tipo es requerido'
                            }})}
                            name="type" 
                            id="type"  
                            type="text"
                            value="MENSUAL"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.type && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.type.message}
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
                          value={session?.user?.idCompany}
                          hidden
                          />
                          {errors?.company && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.company.message}
                                </span>
                              </label>
                            )}
                      </div> */}
                      {/* <div>
                        <input 
                        {...register("id", { required: {
                          value: false,
                          message: 'La compania es requerida'
                        }})}
                          id="id" 
                          name="id" 
                          type="text" 
                          value=""
                          hidden
                          />
                          {errors?.id && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.id.message}
                                </span>
                              </label>
                            )}
                      </div> */}
                      {/* <div>
                        <input
                        {...register("company", { required: {
                          value: true,
                          message: 'La compania es requerida'
                        }})}
                          id="company" 
                          name="company" 
                          type="text" 
                          value={session?.user?.idCompany}
                          hidden 
                          />
                          {errors?.company && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.company.message}
                                </span>
                              </label>
                            )}
                      </div> */}
                      {/* <div>
                        <input
                        {...register("is_open", { required: {
                          value: false,
                          message: 'La compania es requerida'
                        }})}
                          id="is_open" 
                          name="is_open" 
                          type="text" 
                          checked={true}
                          hidden 
                          />
                      </div> */}
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

export default FormCreateUpdatePayrollPeriod;