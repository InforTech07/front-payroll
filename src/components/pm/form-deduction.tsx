"use client";
import { useForm } from "react-hook-form";
import { IPayrollDeduction } from '@/interfaces/pm';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerPayrollDeduction, updatePayrollDeduction } from "@/redux/pm/payroll-deduction-slice";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

interface IFormCreateUpdatePayrollDeductionProps{
    idBtnDrawer: string;
}

function FormCreateUpdatePayrollDeduction({idBtnDrawer}: IFormCreateUpdatePayrollDeductionProps){
    const router = useRouter();
    const params = useParams();
    let isModeEdit = false;
    
    const idEdit = params.id;
    
    if(idEdit){
        isModeEdit = true;
    }
  
    const formOptions = {
        defaultValues: {
           id: "",
           amount: "",
           date: "",
           employee_id: "",
           company_id: "",
        }
    }

    if(isModeEdit){
        useAppSelector(state => state.payrollDeduction.payrollDeductions).map((item: IPayrollDeduction) => {
        if(item.id == idEdit){
            formOptions.defaultValues = {
                id: item.id,
                amount: item.amount as unknown as string,
                date: item.date,
                employee_id: item.employee as unknown as string,
                company_id: item.company as unknown as string,
            }
        }
        });
    } 
    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset,
    } = useForm<IPayrollDeduction>(formOptions as any);

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
      if(isModeEdit){
        dispatch(updatePayrollDeduction(data)).then(res => {
          if(res.payload){
            router.back();
            return;
          }
        }).catch(err => {
          return;
        });
      }else{
        dispatch(registerPayrollDeduction(data)).then(res => {
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
                          <label className="text-gray-700 text-xs" htmlFor="amount">Monto</label>
                          <input
                            {...register("amount", { required: {
                              value: true,
                              message: 'El nombre es requerido'
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
                        {...register("employee", { required: {
                          value: true,
                          message: 'La compania es requerida'
                        }})}
                          id="employee" 
                          name="employee" 
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

export default FormCreateUpdatePayrollDeduction;