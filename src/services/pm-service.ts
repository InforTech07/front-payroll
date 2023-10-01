import { IPayrollDeduction, IPayrollIncome, IPayrollConcept, IPayrollPeriod } from "@/interfaces/pm";
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

    async registerPayrollPeriod(data: IPayrollPeriod){
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

    async getPayrollPeriods(){
        //return await apiServices.get('department/')
        return {
            results: []
        }
    }

    async updatePayrollPeriod(data: IPayrollPeriod){
        // if(data){
        //     const index = departmentData.findIndex((item: any) => item.id === data.id);
        //     departmentData[index] = data;
        // }

        //const index = departmentData.findIndex((item: any) => item.id === data.id);
        //departmentData[index] = data;

        return data;
    }

    async deletePayrollPeriod(id: number){
        // if(id){
        //     const index = departmentData.findIndex((item: any) => item.id === id);
        //     departmentData.splice(index, 1);
        // }
        //const index = departmentData.findIndex((item: any) => item.id === id);
        //departmentData.splice(index, 1);
        return id;
    }

    async registerPayrollIncome(data: IPayrollIncome){
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

    async getPayrollIncomes(){
        //return await apiServices.get('department/')
        return {
            results: []
        }
    }

    async updatePayrollIncome(data: IPayrollIncome){
        // if(data){
        //     const index = departmentData.findIndex((item: any) => item.id === data.id);
        //     departmentData[index] = data;
        // }

        //const index = departmentData.findIndex((item: any) => item.id === data.id);
        //departmentData[index] = data;

        return data;
    }

    async deletePayrollIncome(id: number){
        // if(id){
        //     const index = departmentData.findIndex((item: any) => item.id === id);
        //     departmentData.splice(index, 1);
        // }
        //const index = departmentData.findIndex((item: any) => item.id === id);
        //departmentData.splice(index, 1);
        return id;
    }

    async registerPayrollDeduction(data: IPayrollDeduction){
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

    async getPayrollDeductions(){
        //return await apiServices.get('department/')
        return {
            results: []
        }
    }

    async updatePayrollDeduction(data: IPayrollDeduction){
        // if(data){
        //     const index = departmentData.findIndex((item: any) => item.id === data.id);
        //     departmentData[index] = data;
        // }

        //const index = departmentData.findIndex((item: any) => item.id === data.id);
        //departmentData[index] = data;

        return data;
    }

    async deletePayrollDeduction(id: number){
        // if(id){
        //     const index = departmentData.findIndex((item: any) => item.id === id);
        //     departmentData.splice(index, 1);
        // }
        //const index = departmentData.findIndex((item: any) => item.id === id);
        //departmentData.splice(index, 1);
        return id;
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

export const pmService = new PayrollManagerService()