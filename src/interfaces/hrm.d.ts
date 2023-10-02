interface IUserEmployee {
    id?: number | string;
    username: string;
    email: string;
}
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
    date_completion?: Date | null;
    birth_date: Date;
    gender: string;
    base_salary: number;
    department?: number | string;
    job_position?: number | string;
    job_position_name?: string;
    company?: number | string;
    user?: IUserEmployee;
    create_user: boolean;
}

export interface IEmployeeDocument {
    id?: number | string;
    name: string;
    file: string;
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
