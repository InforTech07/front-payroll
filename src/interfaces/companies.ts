
interface IUserAdminCompanies{
    name: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;

}

export interface ICompany {
    id?: number | string;
    name: string;
    phone: string;
    address: string;
    description: string;
    email: string;
    password: string;
    confirmPassword?: string;
    picture?: string;
    create_user?: boolean;
}





//export interface IFormRegisterCompanies extends ICompanies, IUserAdminCompanies {}