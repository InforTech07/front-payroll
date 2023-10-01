export interface IPayrollPeriod {
    id?: number | string;
    name: string;
    start_date: string;
    end_date: string;
    type: string;
    company_id?: number | string;
}

export interface IPayrollConcept{
    id?: number | string;
    name: string;
    type: string;
    amount: number | string;
    description: string;
    company_id?: number;
}

export interface IPayrollDeduction{
    id?: number | string;
    amount: number;
    date: string;
    employee_id: number | string;
    company_id?: number | string;
}

export interface IPayrollIncome{
    id?: number | string;
    amount: number;
    date: string;
    employee_id: number | string;
    company_id?: number | string;
}