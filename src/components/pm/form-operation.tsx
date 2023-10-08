"use client";
import React, { useState } from 'react';
import { IEmployee } from '@/interfaces/hrm';
import { ILoans, IOvertime, IPayrollPeriod, IProductionBonus, ISalesCommission, ISolidarityContribution } from '@/interfaces/pm';
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerOvertime, 
        registerSolidarityContribution, 
        registerLoans, 
        registerProductionBonus, 
        registerSalesCommission 
    } from '@/redux/pm/payroll-operation-slice';


interface IFormTypeOperationProps {
    employees: IEmployee[];
    period: IPayrollPeriod | undefined;
}

function FormCreateUpdateOvertime({employees, period}: IFormTypeOperationProps) {
    const [isCheckPublicHoliday, setIsCheckPublicHoliday] = useState<boolean>(false);
    let isModeEdit = false;

    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset,
    } = useForm<IOvertime>();

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
        dispatch(registerOvertime(data)).then(res => {
            if(res.payload){
            reset();
            //document.getElementById(idBtnDrawer)?.click();
            return;
            }}).catch(err => {
            return;
            });
    });

    return (
        <div className="w-80 min-h-full bg-base-200">
            <span className="text-gray-700 text-md text-center">Tiempos extras</span>
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-2 mt-4">
                    <div className="form-control">
                        <label className="text-gray-700 text-xs text-center" htmlFor="payroll_period">{'Periodo (' + period?.type +')' }</label>
                        <p className="text-gray-700 text-xs text-center font-bold">{period?.start_date + ' - ' + period?.end_date}</p>
                        <input
                        {...register("payroll_period", { required: {
                            value: true,
                            message: 'El periodo es requerido'
                        }})}
                        name="payroll_period" 
                        id="payroll_period"
                        value={period?.id} 
                        type="text"
                        className="hidden"/>
                        {errors?.payroll_period && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.payroll_period.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div className='form-control'>
                        <label className="text-gray-700 text-xs" htmlFor="date">Fecha</label>
                        <input
                        {...register("date", { required: {
                            value: true,
                            message: 'La fecha es requerida'
                        }})}
                        name="date" 
                        id="date" 
                        type="date"
                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                        {errors?.date && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.date.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="text-gray-700 text-xs" htmlFor="reason">Razon</label>
                        <input
                        {...register("reason", { required: {
                            value: true,
                            message: 'La fecha es requerida'
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
                        <label className="text-gray-700 text-xs" htmlFor="amovertime_minutes">Tiempo en minutos</label>
                        <input
                        {...register("overtime_minutes", { required: {
                            value: true,
                            message: 'Los minutos son requeridos'
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
                    <div>
                        <input
                        {...register("amount", { required: {
                            value: true,
                            message: 'La fecha es requerida'
                        }})}
                        name="amount" 
                        id="amount" 
                        type="number"
                        value={0}
                        hidden
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 text-xs p-y-2" htmlFor="employee">Empleado</label>
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
                                employees.map((item: IEmployee, index) => (
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
                    <div className="flex justify-start mt-6">
                        <button className="btn btn-sm rounded-l btn-success text-xs">{isModeEdit ? "Actualizar":"Guardar"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function FormCreateUpdateSalesCommission({employees, period}: IFormTypeOperationProps) {
    let isModeEdit = false;
    
    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset,
    } = useForm<ISalesCommission>();

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
        dispatch(registerSalesCommission(data)).then(res => {
            if(res.payload){
            reset();
            //document.getElementById(idBtnDrawer)?.click();
            return;
            }}).catch(err => {
            return;
            });
    });

    return (
        <div className="w-80 min-h-full bg-base-200">
            <span className="text-gray-700 text-md text-center">Comisiones de ventas</span>
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-2 mt-4">
                    <div className="form-control">
                        <label className="text-gray-700 text-xs text-center" htmlFor="payroll_period">{'Periodo (' + period?.type +')' }</label>
                        <p className="text-gray-700 text-xs text-center font-bold">{period?.start_date + ' - ' + period?.end_date}</p>
                        <input
                        {...register("payroll_period", { required: {
                            value: true,
                            message: 'El periodo es requerido'
                        }})}
                        name="payroll_period" 
                        id="payroll_period"
                        value={period?.id} 
                        type="text"
                        className="hidden"/>
                        {errors?.payroll_period && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.payroll_period.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="text-gray-700 text-xs" htmlFor="sales">Ventas</label>
                        <input
                        {...register("sales", { required: {
                            value: true,
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
                    <div className='hidden'>
                        <label className="text-gray-700 text-xs" htmlFor="amcommission">Tiempo en minutos</label>
                        <input
                        {...register("commission", { required: {
                            value: true,
                            message: 'Los minutos son requeridos'
                        }})}
                        name="commission" 
                        id="commission" 
                        type="number"
                        value={0}
                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                    </div>
                    <div>
                        <label className="text-gray-700 text-xs p-y-2" htmlFor="employee">Empleado</label>
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
                                employees.map((item: IEmployee, index) => (
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
                    <div className="flex justify-start mt-6">
                        <button className="btn btn-sm rounded-l btn-success text-xs">{isModeEdit ? "Actualizar":"Guardar"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function FormCreateUpdateProductionBonus({employees, period}: IFormTypeOperationProps) {
    let isModeEdit = false;

    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset,
    } = useForm<IProductionBonus>();

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
        dispatch(registerProductionBonus(data)).then(res => {
            if(res.payload){
            reset();
            //document.getElementById(idBtnDrawer)?.click();
            return;
            }}).catch(err => {
            return;
            });
    });

    return (
        <div className="w-80 min-h-full bg-base-200">
            <span className="text-gray-700 text-md text-center">Tiempos extras</span>
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-2 mt-4">
                    <div className="form-control">
                        <label className="text-gray-700 text-xs text-center" htmlFor="payroll_period">{'Periodo (' + period?.type +')' }</label>
                        <p className="text-gray-700 text-xs text-center font-bold">{period?.start_date + ' - ' + period?.end_date}</p>
                        <input
                        {...register("payroll_period", { required: {
                            value: true,
                            message: 'El periodo es requerido'
                        }})}
                        name="payroll_period" 
                        id="payroll_period"
                        value={period?.id} 
                        type="text"
                        className="hidden"/>
                        {errors?.payroll_period && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.payroll_period.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="text-gray-700 text-xs" htmlFor="production">Produccion: </label>
                        <input
                        {...register("production", { required: {
                            value: true,
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
                    <div className='hidden'>
                        <label className="text-gray-700 text-xs" htmlFor="ambonus">Tiempo en minutos</label>
                        <input
                        {...register("bonus", { required: {
                            value: true,
                            message: 'Los minutos son requeridos'
                        }})}
                        name="bonus" 
                        id="bonus" 
                        type="number"
                        value={0}
                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                        {errors?.bonus && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.bonus.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div>
                        <label className="text-gray-700 text-xs p-y-2" htmlFor="employee">Empleado</label>
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
                                employees.map((item: IEmployee, index) => (
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
                    <div className="flex justify-start mt-6">
                        <button className="btn btn-sm rounded-l btn-success text-xs">{isModeEdit ? "Actualizar":"Guardar"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function FormCreateUpdateSolidarityContribution({employees, period}: IFormTypeOperationProps) {
    let isModeEdit = false;

    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset,
    } = useForm<ISolidarityContribution>();

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
        dispatch(registerSolidarityContribution(data)).then(res => {
            if(res.payload){
            reset();
            //document.getElementById(idBtnDrawer)?.click();
            return;
            }}).catch(err => {
            return;
            });
    });

    return (
        <div className="w-80 min-h-full bg-base-200">
            <span className="text-gray-700 text-md text-center">Tiempos extras</span>
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-2 mt-4">
                    <div className="form-control">
                        <label className="text-gray-700 text-xs text-center" htmlFor="payroll_period">{'Periodo (' + period?.type +')' }</label>
                        <p className="text-gray-700 text-xs text-center font-bold">{period?.start_date + ' - ' + period?.end_date}</p>
                        <input
                        {...register("payroll_period", { required: {
                            value: true,
                            message: 'El periodo es requerido'
                        }})}
                        name="payroll_period" 
                        id="payroll_period"
                        value={period?.id} 
                        type="text"
                        className="hidden"/>
                        {errors?.payroll_period && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.payroll_period.message}
                            </span>
                            </label>
                        )}
                    </div>
                    {/* <div className='form-control'>
                        <label className="text-gray-700 text-xs" htmlFor="date">Fecha</label>
                        <input
                        {...register("date", { required: {
                            value: true,
                            message: 'La fecha es requerida'
                        }})}
                        name="date" 
                        id="date" 
                        type="date"
                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                        {errors?.date && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.date.message}
                            </span>
                            </label>
                        )}
                    </div> */}
                    <div className="form-control">
                        <label className="text-gray-700 text-xs" htmlFor="amount">Monto de Contribucion: </label>
                        <input
                        {...register("amount", { required: {
                            value: true,
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
                        <label className="text-gray-700 text-xs p-y-2" htmlFor="employee">Empleado</label>
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
                                employees.map((item: IEmployee, index) => (
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
                    <div className="flex justify-start mt-6">
                        <button className="btn btn-sm rounded-l btn-success text-xs">{isModeEdit ? "Actualizar":"Guardar"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function FormCreateUpdateLoan({employees, period}: IFormTypeOperationProps) {
    let isModeEdit = false;

    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset,
    } = useForm<ILoans>();

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
        dispatch(registerLoans(data)).then(res => {
            if(res.payload){
            reset();
            //document.getElementById(idBtnDrawer)?.click();
            return;
            }}).catch(err => {
            return;
            });
    });

    return (
        <div className="w-80 min-h-full bg-base-200">
            <span className="text-gray-700 text-md text-center">Tiempos extras</span>
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-2 mt-4">
                    <div className="form-control">
                        <label className="text-gray-700 text-xs text-center" htmlFor="payroll_period">{'Periodo (' + period?.type +')' }</label>
                        <p className="text-gray-700 text-xs text-center font-bold">{period?.start_date + ' - ' + period?.end_date}</p>
                        <input
                        {...register("payroll_period", { required: {
                            value: true,
                            message: 'El periodo es requerido'
                        }})}
                        name="payroll_period" 
                        id="payroll_period"
                        value={period?.id} 
                        type="text"
                        className="hidden"/>
                        {errors?.payroll_period && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.payroll_period.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div>
                        <label className="text-gray-700 text-xs p-y-2" htmlFor="employee">Banco</label>
                        <select
                        {
                            ...register("reason", { required: {
                                value: true,
                                message: 'El empleado es requerido'
                            }})
                        }
                        name="reason"
                        id="reason" 
                        placeholder='Seleccione' 
                        className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                            <option value="BANRURAL">Banrural</option>
                            <option value="BANCO INDUSTRIAL">Banco Industrial</option>
                            <option value="BANCO GYT">Banco G&T</option>
                        </select>
                        {errors?.reason && (
                            <label className="label">
                            <span className="text-red-600 text-xs">
                                {errors.reason.message}
                            </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="text-gray-700 text-xs" htmlFor="amount">Monto de Contribucion: </label>
                        <input
                        {...register("amount", { required: {
                            value: true,
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
                        <label className="text-gray-700 text-xs p-y-2" htmlFor="employee">Empleado</label>
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
                                employees.map((item: IEmployee, index) => (
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
                    <div className="flex justify-start mt-6">
                        <button className="btn btn-sm rounded-l btn-success text-xs">{isModeEdit ? "Actualizar":"Guardar"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const TYPE_OPERATION = ['overtime', 'sales-commission', 'production-bonus', 'solidarity-contribution', 'loan'];


interface FormOperationProps {
    idBtnDrawer: string;
}

function FormOperation({idBtnDrawer}: FormOperationProps) {
    const [typeOperation, setTypeOperation] = useState<string>('overtime');
    const employees = useAppSelector(state => state.employee.employees) as IEmployee[];
    const periods = useAppSelector(state => state.payrollPeriod.payrollPeriods) as IPayrollPeriod[];
    let period = {} as IPayrollPeriod;
    if(Array.isArray(periods)){
        period = periods.find((item: IPayrollPeriod) => item.type === 'MENSUAL' && item.status === false) as IPayrollPeriod;
    }
    console.log(period);

    const handleChangeTypeOperation = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setTypeOperation(e.target.value);
    }
  return (
    <div className="drawer drawer-end">
      <input id={idBtnDrawer} type="checkbox"  className="drawer-toggle"/>
      <div className="drawer-content">
      </div> 
        <div className="drawer-side z-10">
            <label htmlFor={idBtnDrawer} className="drawer-overlay"></label>
            <div className="menu p-4 w-96 min-h-full bg-base-200">
                <span className="text-gray-700 text-md text-center mb-4">Operaciones de nomina</span>
                <div className='w-full flex flex-col items-center'>
                    <div className='w-80'>
                    <select
                    name="typeOperation" 
                    placeholder='Seleccione'
                    value={typeOperation}
                    onChange={handleChangeTypeOperation}  
                    className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                        {
                            TYPE_OPERATION.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col items-center mt-4">
                    {
                        typeOperation === 'overtime' && <FormCreateUpdateOvertime employees={employees} period={period}/>
                    }
                    {
                        typeOperation === 'sales-commission' && <FormCreateUpdateSalesCommission employees={employees} period={period}/>
                    }
                    {
                        typeOperation === 'production-bonus' && <FormCreateUpdateProductionBonus employees={employees} period={period}/>
                    }
                    {
                        typeOperation === 'solidarity-contribution' && <FormCreateUpdateSolidarityContribution employees={employees} period={period}/>
                    }
                    {
                        typeOperation === 'loan' && <FormCreateUpdateLoan employees={employees} period={period}/>
                    }
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FormOperation;