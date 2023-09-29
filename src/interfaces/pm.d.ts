export interface IPayrollPeriod {
    id?: number;
    name: string;
    start_date: string;
    end_date: string;
    type: string;
    company_id?: number;
}

export interface IPayrollConcept{
    id?: number | string;
    name: string;
    type: string;
    amount: number | string;
    description: string;
    company_id?: number;
}

export interface IDeduction{
    id?: number;
    amount: number;
    date: string;
    employee_id: number | string;
    company_id?: number | string;
}

export interface IIncome{
    id?: number;
    amount: number;
    date: string;
    employee_id: number | string;
    company_id?: number | string;
}