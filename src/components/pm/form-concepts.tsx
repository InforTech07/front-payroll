"use client";
import { useForm } from "react-hook-form";
import { IPayrollConcept, IPayrollPeriod } from '@/interfaces/pm';
import { IEmployee } from '@/interfaces/hrm';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerPayrollConcept, updatePayrollConcept } from "@/redux/pm/payroll-concept-slice";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface IFormCreateUpdatePayrollConcept{
    idBtnDrawer: string;
}

function FormCreateUpdatePayrollConcept({idBtnDrawer}: IFormCreateUpdatePayrollConcept){
    const [isCheckPublicHoliday, setIsCheckPublicHoliday] = useState<boolean>(false);
    const router = useRouter();
    const params = useParams();
    const { data: session, status } = useSession();
    const employees = useAppSelector(state => state.employee.employees) as IEmployee[];
    const periods = useAppSelector(state => state.payrollPeriod.payrollPeriods) as IPayrollPeriod[];
    let isModeEdit = false;
    
    const idEdit = params.id;
    
    if(idEdit){
        isModeEdit = true;
    }
  
    // const formOptions = {
    //     defaultValues: {
            
    //     }
    // }

    // if(isModeEdit){
    //     useAppSelector(state => state.payrollConcept.payrollConcepts).map((item: IPayrollConcept) => {
    //     if(item.id == idEdit){
    //         formOptions.defaultValues = {
    //           id: item.id,
    //           name: item.name,
    //           type: item.type,
    //           value: item.value as unknown as number,
    //           description: item.description,
    //           company: item.company as unknown as string,
    //         }
    //     }
    //     });
    // } 
    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset,
    } = useForm<IPayrollConcept>();

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
                          <label className="text-gray-700 text-xs" htmlFor="concept">Tipo</label>
                          <select
                            {...register("concept", { required: {
                              value: true,
                              message: 'El concepto es requerido'
                            }})}
                            name="concept" 
                            id="concept"  
                            className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                            <option value="OVERTIME">Horas extras</option>
                            <option value="SALES_COMMISSION">Comisiones de ventas</option>
                            <option value="PRODUCTION_BONUS">Bonos de produccion</option>
                            <option value="SOLIDARITY_CONTRIBUTION">Aporte solidario</option>
                            <option value="LOANS">Prestamo</option>
                          </select>
                          {errors?.concept && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.concept.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                        <label className="text-gray-700 text-xs p-y-2" htmlFor="employee">Empleado: </label>
                        <select
                        {
                            ...register("employee", { required: {
                                value: true,
                                message: 'El empleado es requerido'
                            }})
                        }
                        name="employee"
                        id="employee" 
                        placeholder='Seleccione' 
                        className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                            {
                              Array.isArray(employees) && employees.map((item: IEmployee, index) => (
                                    <option key={index} value={item.id}>{item.first_name + ' ' + item.last_name}</option>
                                ))
                            }
                        </select>
                        {errors?.employee && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.employee.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div>
                        <label className="text-gray-700 text-xs p-y-2" htmlFor="payroll_period">Periodo: </label>
                        <select
                        {
                            ...register("payroll_period", { required: {
                                value: true,
                                message: 'El periodo es requerido'
                            }})
                        }
                        name="payroll_period"
                        id="payroll_period" 
                        placeholder='Seleccione' 
                        className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                            {
                              Array.isArray(periods) && periods.map((item: IPayrollPeriod, index) => (
                                    <option key={index} value={item.id}>{item.type + '(' + item.start_date + '-' + item.end_date + ')'}</option>
                                ))
                            }
                        </select>
                        {errors?.payroll_period && (
                          <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.payroll_period.message}
                            </span>
                          </label>
                        )}
                    </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="reason">Razon: </label>
                          <input
                            {...register("reason", { required: {
                              value: true,
                              message: 'El nombre es requerido'
                            }})}
                            name="reason" 
                            id="reason" 
                            type="text"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.reason && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.reason.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="overtime_minutes">Horas en minutos: </label>
                          <input
                            {...register("overtime_minutes", { required: {
                              value: false,
                              message: 'El tiempo en minutos es requerido'
                            }})}
                            name="overtime_minutes" 
                            id="overtime_minutes" 
                            type="number"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.overtime_minutes && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.overtime_minutes.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                        <label className="label cursor-pointer text-gray-700 text-xs">
                            Es feriado o Domingo
                            <input 
                            {...register("public_holiday", { required: {
                                value: false,
                                message: 'El jefe de departamento es requerido'
                            }})}
                            name='public_holiday'
                            id='public_holiday'
                            type="checkbox"  
                            checked={isCheckPublicHoliday}
                            onChange={() => setIsCheckPublicHoliday(!isCheckPublicHoliday)}
                            className="checkbox checkbox-sm" />
                            {errors?.public_holiday && (
                                <label className="label">
                                <span className="text-red-600 text-xs">
                                    {errors.public_holiday.message}
                                </span>
                                </label>
                            )}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="text-gray-700 text-xs" htmlFor="sales">Ventas</label>
                        <input
                        {...register("sales", { required: {
                            value: false,
                            message: 'Las ventas son requeridas'
                        }})}
                        name="sales" 
                        id="sales" 
                        type="number"
                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                        {errors?.sales && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.sales.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="text-gray-700 text-xs" htmlFor="production">Produccion: </label>
                        <input
                        {...register("production", { required: {
                            value: false,
                            message: 'La cantidad es requerida'
                        }})}
                        name="production" 
                        id="production" 
                        type="number"
                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                        {errors?.production && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.production.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="text-gray-700 text-xs" htmlFor="amount">Monto de Contribucion: </label>
                        <input
                        {...register("amount", { required: {
                            value: false,
                            message: 'La cantidad es requerida'
                        }})}
                        name="amount" 
                        id="amount" 
                        type="number"
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
                        <input 
                        {...register("company", { required: {
                          value: false,
                          message: 'La compania es requerida'
                        }})}
                          id="company" 
                          name="company" 
                          type="text" 
                          value={session?.user?.idCompany} hidden />
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