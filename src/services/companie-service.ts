import { IFormRegisterCompanies, ICompanies } from "@/entitys/companies";
import { apiServices } from "./api-service";

class CompanyService {
    constructor() {}
    async registerCompanies(data: IFormRegisterCompanies){
        console.log('data', data)
        //return "datos registrados"
        return await apiServices.post('companies/', data)
        //return this._apiServices.post('companies/', data)
    }

    getCompanies(){
        const res = apiServices.get('companies/')
    }

    private adapterCompanies(data: any){
        return data.map((item: any) => {
            return {
                id: item.id,
                company: item.companies,
                description: item.description,
                urlLogo: item.url_logo
            }
        })
    }

}

export const companyService = new CompanyService()