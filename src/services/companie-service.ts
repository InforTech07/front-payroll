import { ICompany } from "@/interfaces/companies";
import { apiServices } from "./api-service";

class CompanyService {
    private static _instance: CompanyService;

    public static getInstance(): CompanyService{
        if(!CompanyService._instance){
            CompanyService._instance = new CompanyService()
        }
        return CompanyService._instance
    }


    async registerCompany(data: ICompany){
        return await apiServices.post('company/', data)
    }

    getCompanies(){
        const res = apiServices.get('companies/')
    }

    // private adapterCompanies(data: any){
    //     return data.map((item: any) => {
    //         return {
    //             id: item.id,
    //             company: item.companies,
    //             description: item.description,
    //             urlLogo: item.url_logo
    //         }
    //     })
    // }

}

export const companyService = CompanyService.getInstance()