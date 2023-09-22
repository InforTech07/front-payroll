import { IDepartment } from "@/entitys/employee";
import { apiServices } from "./api-service";

class EmployeeService {
    constructor() {}
    async registerDepartment(data: IDepartment){
        return await apiServices.post('department/', data)
    }

    async getDepartments(){
        return await apiServices.get('department/')
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

export const employeeService = new EmployeeService()