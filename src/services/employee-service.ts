import { IDepartment, IJobPosition, IEmployee, IFamilyMember, ISalaryIncrease } from "@/interfaces/hrm";
import { apiServices } from "./api-service";
import { deleteEmployeeDocument } from "@/redux/hrm/employee-doc-slice";

class EmployeeService {
    private static _instance: EmployeeService;
    public static getInstance(): EmployeeService{
        if(!EmployeeService._instance){
            EmployeeService._instance = new EmployeeService()
        }
        return EmployeeService._instance
    }


    async registerDepartment(data: IDepartment){
        return await apiServices.post('department/', data)
    }

    async getDepartments(companyId: number){
        return await apiServices.get(`department/get_departments_by_company/?company=${companyId}`)
    }

    async updateDepartment(data: IDepartment){
        return await apiServices.put(`department/${data.id}/`, data)
    }

    async deleteDepartment(id: number){
        return await apiServices.delete(`department/${id}/`)
    }

    async getJobPositions(companyId: number){
        return await apiServices.get(`job-position/get_job_positions_by_company/?company=${companyId}`)
    }

    async registerJobPosition(data: IJobPosition){
        return await apiServices.post('job-position/', data)
    }

    async updateJobPosition(data: IJobPosition){
        return await apiServices.put(`job-position/${data.id}/`, data)
    }

    async deleteJobPosition(id: number){
       return await apiServices.delete(`job-position/${id}/`)
    }

    async getEmployees(companyId: number){
        return await apiServices.get(`employee/get_employees/?company=${companyId}`)
    }

    async registerEmployee(data: IEmployee){
        return await apiServices.post('employee/', data)
    }

    async updateEmployee(data: IEmployee){
        return await apiServices.put(`employee/${data.id}/`, data)
    }

    async deleteEmployee(id: number){
        return await apiServices.delete(`employee/${id}/`)
    }

    async getDocuments(){
        return []
    }

    async getEmployeeDocuments(employeeId: number){
        return await apiServices.get(`employee_document/get_documents/?employee=${employeeId}`)
    }

    async registerEmployeeDocument(data: any){
        return await apiServices.post('employee_document/', data)
    }
    async deleteEmployeeDocument(id: number){
        return await apiServices.delete(`employee_document/${id}/`)
    }

    async getFamilyMembers(employeeId: number){
        return await apiServices.get(`family_member/get_family_members/?employee=${employeeId}`)
    }

    async registerFamilyMember(data: IFamilyMember){
        return await apiServices.post('family_member/', data)
    }

    async updateFamilyMember(data: IFamilyMember){
        return await apiServices.put(`family_member/${data.id}/`, data)
    }

    async deleteFamilyMember(id: number){
        return await apiServices.delete(`family_member/${id}/`)
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

export const employeeService = EmployeeService.getInstance()