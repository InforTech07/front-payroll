export interface IJobPosition {
    id?: number | string;
    name: string;
    description: string;
    company?: number | string;
}
export interface IDepartment {
    id?: number | string;
    name: string;
    description: string;
    company?: number | string;
}

export interface IEmployee {
    id?: number | string;
    first_name: string;
    last_name: string;
    phone: string;
    address: string;
    email: string;
    picture?: string;
    dpi: string;
    date_hiring: Date;
    date_completion?: Date;
    birth_date: Date;
    gender: string;
    base_salary: number;
    department?: number | string;
    job_position?: number | string;
    company?: number | string;
}

export interface IEmployeeDocument {
    id?: number | string;
    name: string;
    employee: number | string;
}

export interface IFamilyMember {
    id?: number | string;
    first_name: string;
    last_name: string;
    gender: string;
    phone: string;
    relationship: string;
    employee?: number | string;
}

export interface ISalaryIncrease {
    id?: number | string;
    date: Date;
    amount: number;
    reason: string;
    employee?: number | string;
}
