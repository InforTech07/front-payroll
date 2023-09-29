import { IDeduction, IIncome, IPayrollConcept, IPayrollPeriod } from "@/interfaces/pm";
import { apiServices } from "./api-service";


function uuidGenerator() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        // eslint-disable-next-line no-mixed-operators
        const r = (Math.random() * 16) | 0,
            // eslint-disable-next-line no-mixed-operators
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

class PayrollManagerService {
    constructor() {}
    async registerPayrollConcept(data: IPayrollConcept){
        // if(data){
        //     const id = departmentData.length + 1;
        //     data.id = id;
        //     //convertir formdata a json
        //     const json = JSON.stringify(data);
        //     departmentData.push(json);
            
        // }
        data.id = uuidGenerator();
        // departmentData.push(data);
        return data;
    }

    async getPayrollConcepts(){
        //return await apiServices.get('department/')
        return {
            results: []
        }
    }

    async updatePayrollConcept(data: IPayrollConcept){
        // if(data){
        //     const index = departmentData.findIndex((item: any) => item.id === data.id);
        //     departmentData[index] = data;
        // }

        //const index = departmentData.findIndex((item: any) => item.id === data.id);
        //departmentData[index] = data;

        return data;
    }

    async deletePayrollConcept(id: number){
        // if(id){
        //     const index = departmentData.findIndex((item: any) => item.id === id);
        //     departmentData.splice(index, 1);
        // }
        //const index = departmentData.findIndex((item: any) => item.id === id);
        //departmentData.splice(index, 1);
        return id;
    }

    // async getJobPositions(){
    //     //return await apiServices.get('job-position/')
    //     return {
    //         results: jobPositionData
    //     }
    // }

    // async registerJobPosition(data: IJobPosition){
    //     // if(data){
    //     //     const id = jobPositionData.length + 1;
    //     //     data.id = id;
    //     //     //convertir formdata a json
    //     //     const json = JSON.stringify(data);
    //     //     jobPositionData.push(json);
            
    //     // }
    //     data.id = uuidGenerator();
    //     jobPositionData.push(data);
    //     return data;
    // }

    // async updateJobPosition(data: IJobPosition){
    //     // if(data){
    //     //     const index = jobPositionData.findIndex((item: any) => item.id === data.id);
    //     //     jobPositionData[index] = data;
    //     // }

    //     //const index = jobPositionData.findIndex((item: any) => item.id === data.id);
    //     //jobPositionData[index] = data;

    //     return data;
    // }

    // async deleteJobPosition(id: number){
    //     // if(id){
    //     //     const index = jobPositionData.findIndex((item: any) => item.id === id);
    //     //     jobPositionData.splice(index, 1);
    //     // }
    //     //const index = jobPositionData.findIndex((item: any) => item.id === id);
    //     //jobPositionData.splice(index, 1);
    //     return id;
    // }

    // async getEmployees(){
    //     return []
    // }

    // async registerEmployee(data: IEmployee){
    //     data.id = uuidGenerator();
    //     return data
    // }

    // async updateEmployee(data: IEmployee){
    //     return data
    // }

    // async deleteEmployee(id: number){
    //     return id
    // }

    // async getDocuments(){
    //     return []
    // }

    // async getFamilyMembers(){
    //     return []
    // }

    // async registerFamilyMember(data: IFamilyMember){
    //     data.id = uuidGenerator();
    //     return data
    // }

    // async updateFamilyMember(data: IFamilyMember){
    //     return data
    // }

    // async deleteFamilyMember(id: number){
    //     return id
    // }

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

export const pmService = new PayrollManagerService()