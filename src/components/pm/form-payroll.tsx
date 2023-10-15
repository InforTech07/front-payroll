"use client";
import { useForm } from "react-hook-form";
import { IPayroll, IPayrollPeriod } from '@/interfaces/pm';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerPayroll } from "@/redux/pm/payroll-slice";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

interface IFormCreateUpdatePayrollProps{
    idBtnDrawer: string;
}

function FormCreateUpdatePayroll({idBtnDrawer}: IFormCreateUpdatePayrollProps){
    const {data: session, status} = useSession();
    const router = useRouter();
    const params = useParams();
    let isModeEdit = false;
    const periods = useAppSelector(state => state.payrollPeriod.payrollPeriods);
    const idEdit = params.id;
    
    if(idEdit){
        isModeEdit = true;
    }
  
    const formOptions = {
        defaultValues: {
          id: "",
          company: session?.user?.idCompany as unknown as string,
          payroll_period : "",
          date_generated : "",
          total : 0,
          is_open : true,
        }
    }

    // if(isModeEdit){
    //     useAppSelector(state => state.payrollDeduction.payrollDeductions).map((item: IPayroll) => {
    //     if(item.id == idEdit){
    //         formOptions.defaultValues = {
    //             id: item.id,
    //             amount: item.amount,

    //         }
    //     }
    //     });
    // } 
    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        setValue,
        reset,
    } = useForm<IPayroll>(formOptions as any);

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
      if(isModeEdit){
        // dispatch(updatePayrollDeduction(data)).then(res => {
        //   if(res.payload){
        //     router.back();
        //     return;
        //   }
        // }).catch(err => {
        //   return;
        // });
      }else{
        setValue("company", session?.user?.idCompany as unknown as string);
        setValue('is_open', true);
        dispatch(registerPayroll(data)).then(res => {
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
                      {/* <div>
                          <label className="text-gray-700 text-xs" htmlFor="is_open">Estado</label>
                          <input
                            {...register("is_open", { required: {
                              value: true,
                              message: 'El nombre es requerido'
                            }})}
                            name="is_open" 
                            id="is_open" 
                            type="checkbox"
                            checked={true}
                            hidden
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.is_open && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.is_open.message}
                                </span>
                              </label>
                            )}
                      </div> */}
                      <div>
                        <input
                        {...register("company", { required: {
                          value: true,
                          message: 'La compania es requerida'
                        }})}
                          id="company" 
                          name="company" 
                          type="text" 
                          value={session?.user?.idCompany} 
                          hidden />
                      </div>
                      <div>
                        <input
                        {...register("total", { required: {
                          value: true,
                          message: 'La compania es requerida'
                        }})}
                          id="total" 
                          name="total" 
                          type="text" 
                          value='0' 
                          hidden />
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

export default FormCreateUpdatePayroll;