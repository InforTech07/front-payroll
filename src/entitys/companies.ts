
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
    company: string;
    description: string;
    urlLogo?: string;
}

export interface IFormRegisterCompanies extends ICompanies, IUserAdminCompanies {}