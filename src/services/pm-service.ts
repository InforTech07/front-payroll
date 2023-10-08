import { IPayrollDeduction, IPayrollIncome, IPayrollConcept, IPayrollPeriod } from "@/interfaces/pm";
import { IOvertime, ISalesCommission, IProductionBonus, ISolidarityContribution, ILoans } from "@/interfaces/pm";
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
    private static _instance: PayrollManagerService;

    public static getInstance() {
        if(!PayrollManagerService._instance) {
            PayrollManagerService._instance = new PayrollManagerService();
        }
        return PayrollManagerService._instance;
    }

    async registerPayrollConcept(data: IPayrollConcept){
        return await apiServices.post('payroll_concept/', data);   
    }

    async getPayrollConcepts(companyId: number){
        return await apiServices.get('payroll_concept/get_payroll_concepts/?company=' + companyId);
    }

    async updatePayrollConcept(data: IPayrollConcept){
        return await apiServices.put('payroll_concept/', data);
    }

    async deletePayrollConcept(id: number){
        return await apiServices.delete('payroll_concept/');
    }

    async registerPayrollPeriod(data: IPayrollPeriod){
        return await apiServices.post('payroll_period/', data);
    }

    async getPayrollPeriods(companyId: number){
        return await apiServices.get('payroll_period/get_payroll_periods/?company='+ companyId);
    }

    async updatePayrollPeriod(data: IPayrollPeriod){
        return await apiServices.put('payroll_period/', data);
    }

    async deletePayrollPeriod(id: number){
        return await apiServices.delete('payroll_period/' + id); 
    }


    async RegisterOvertime(data: IOvertime){
        return await apiServices.post('overtime/', data);
    }

    async registerSalesCommission(data: ISalesCommission){
        return await apiServices.post('sales_commission/', data);
    }

    async registerProductionBonus(data: IProductionBonus){
        return await apiServices.post('production_bonus/', data);
    }

    async registerSolidarityContribution(data: ISolidarityContribution){
        return await apiServices.post('solidarity_contribution/', data);
    }

    async registerLoans(data: ILoans){
        return await apiServices.post('loans/', data);
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

export const pmService = PayrollManagerService.getInstance();