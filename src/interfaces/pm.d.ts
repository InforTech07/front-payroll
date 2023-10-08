export interface IPayrollPeriod {
    id?: number | string;
    name: string;
    start_date: string;
    end_date: string;
    status: boolean;
    type: string;
    company?: number | string;
}

export interface IPayrollConcept{
    id?: number | string;
    name: string;
    type: string;
    value: number;
    description: string;
    company?: number | string;
}

export interface IPayrollDeduction{
    id?: number | string;
    amount: number;
    date: string;
    employee: number | string;
    company?: number | string;
}

export interface IPayrollIncome{
    id?: number | string;
    amount: number;
    date: string;
    employee: number | string;
    company?: number | string;
}

export interface IPayrollOperation{
    id?: number | string;
    amount: number;
    date: string;
    employee: number | string;
    company?: number | string;
}

export interface IOvertime {
    id?: number | string;
    date: Date | string;
    reason: string;
    overtime_minutes: number;
    public_holiday: boolean;
    amount: number;
    employee?: number | string;
    payroll_period?: number | string;
}

export interface ISalesCommission {
    id?: number | string;
    date?: Date | string;
    sales: number;
    commission: number;
    employee?: number | string;
    payroll_period?: number | string;
}

export interface IProductionBonus {
    id?: number | string;
    date?: Date | string;
    production: number;
    bonus: number;
    employee?: number | string;
    payroll_period?: number | string;
}

export interface ISolidarityContribution {
    id?: number | string;
    date?: Date | string;
    amount: number;
    employee?: number | string;
    payroll_period?: number | string;
}

export interface ILoans{
    id?: number | string;
    date?: Date | string;
    amount: number;
    reason: string;
    //bank: string;
    employee?: number | string;
    payroll_period?: number | string;
}