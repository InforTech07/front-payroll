
interface IUserAdminCompanies{
    name: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;

}

export interface ICompanies {
    id?: number | string;
    name: string;
    phone: string;
    description: string;
    address: string;
    picture?: string;
    create_user?: boolean
}

export interface IFormRegisterCompanies extends ICompanies, IUserAdminCompanies {}