import { IDepartment, IJobPosition, IEmployee, IFamilyMember, ISalaryIncrease } from "@/interfaces/hrm";
import { apiServices } from "./api-service";

const departmentData: IDepartment[] = [
    {
        id: 1,
        name: 'Department 1',
        description: 'Description 1',
        company: "1"
    },
    {
        id: 2,
        name: 'Department 2',
        description: 'Description 2',
        company: "1"
    },
    {
        id: 3,
        name: 'Department 3',
        description: 'Description 3',
        company: "1"
    },
];


const jobPositionData: IJobPosition[] = [
    {
        id: 1,
        name: 'Job Position 1',
        description: 'Description 1'
    },
    {
        id: 2,
        name: 'Job Position 2',
        description: 'Description 2'
    },
    {
        id: 3,
        name: 'Job Position 3',
        description: 'Description 3'
    },
];


function uuidGenerator() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        // eslint-disable-next-line no-mixed-operators
        const r = (Math.random() * 16) | 0,
            // eslint-disable-next-line no-mixed-operators
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

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

    async getDepartments(){
        return await apiServices.get('department/')
    }

    async updateDepartment(data: IDepartment){
        return await apiServices.put(`department/${data.id}/`, data)
    }

    async deleteDepartment(id: number){
        return await apiServices.delete(`department/${id}/`)
    }

    async getJobPositions(){
        return await apiServices.get('job-position/')
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

    async getFamilyMembers(){
        return []
    }

    async registerFamilyMember(data: IFamilyMember){
        data.id = uuidGenerator();
        return data
    }

    async updateFamilyMember(data: IFamilyMember){
        return data
    }

    async deleteFamilyMember(id: number){
        return id
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