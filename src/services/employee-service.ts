import { IDepartment } from "@/interfaces/employee";
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
    constructor() {}
    async registerDepartment(data: IDepartment){
        // if(data){
        //     const id = departmentData.length + 1;
        //     data.id = id;
        //     //convertir formdata a json
        //     const json = JSON.stringify(data);
        //     departmentData.push(json);
            
        // }
        data.id = uuidGenerator();
        departmentData.push(data);
        return data;
    }

    async getDepartments(){
        //return await apiServices.get('department/')
        return {
            results: departmentData
        }
    }

    async updateDepartment(data: IDepartment){
        // if(data){
        //     const index = departmentData.findIndex((item: any) => item.id === data.id);
        //     departmentData[index] = data;
        // }

        //const index = departmentData.findIndex((item: any) => item.id === data.id);
        //departmentData[index] = data;

        return data;
    }

    async deleteDepartment(id: number){
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

export const employeeService = new EmployeeService()