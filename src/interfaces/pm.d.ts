export interface IPayrollPeriod {
    id?: number | string;
    name: string;
    start_date: string;
    end_date: string;
    is_open: boolean;
    type: string;
    company?: number | string;
}

export interface IPayrollConcept{
    id?: number | string;
    concept: string;
    employee: number | string;
    payroll_period: number | string;
    company?: number | string;
    date?: string;
    reason?: string;
    overtime_minutes?: number;
    public_holiday?: boolean;
    sales?: number;
    production?: number;
    amount?: number;
    cancelled?: boolean;
    is_active?: boolean;
    created_at?: string;
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

export interface IPayroll{
    id?: number | string;
    company: number | string;
    payroll_period : number | string;
    date_generated : string;
    total : number;
    is_open : boolean;
}

export interface IPayrollDetail{
    employee: string;
    total: number;
    incomes: number;
    deductions: number;
    salary_base: number;
    social_insurance_employee: number;
    social_insurance_company: number;
    payroll_period: string;
}
