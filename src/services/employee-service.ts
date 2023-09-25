import { IDepartment, IJobPosition } from "@/interfaces/hrm";
import { apiServices } from "./api-service";

const departmentData: IDepartment[] = [
    {
        id: 1,
        name: 'Department 1',
        description: 'Description 1',
        company: "1",
        jobPositions: [
            {
                id: 1,
                name: 'Job Position 1',
                description: 'Description 1',
            },
            {
                id: 2,
                name: 'Job Position 2',
                description: 'Description 2',
            },
            {
                id: 3,
                name: 'Job Position 3',
                description: 'Description 3',
            },
        ]
    },
    {
        id: 2,
        name: 'Department 2',
        description: 'Description 2',
        company: "1",
        jobPositions: [
            {
                id: 1,
                name: 'Job Position 1',
                description: 'Description 1',
            },
            {
                id: 2,
                name: 'Job Position 2',
                description: 'Description 2',
            },
            {
                id: 3,
                name: 'Job Position 3',
                description: 'Description 3',
            },
        ]
    },
    {
        id: 3,
        name: 'Department 3',
        description: 'Description 3',
        company: "1",
        jobPositions: [
            {
                id: 1,
                name: 'Job Position 1',
                description: 'Description 1',
            },
            {
                id: 2,
                name: 'Job Position 2',
                description: 'Description 2',
            },
            {
                id: 3,
                name: 'Job Position 3',
                description: 'Description 3',
            },
        ]
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

    async getJobPositions(){
        //return await apiServices.get('job-position/')
        return {
            results: jobPositionData
        }
    }

    async registerJobPosition(data: IJobPosition){
        // if(data){
        //     const id = jobPositionData.length + 1;
        //     data.id = id;
        //     //convertir formdata a json
        //     const json = JSON.stringify(data);
        //     jobPositionData.push(json);
            
        // }
        data.id = uuidGenerator();
        jobPositionData.push(data);
        return data;
    }

    async updateJobPosition(data: IJobPosition){
        // if(data){
        //     const index = jobPositionData.findIndex((item: any) => item.id === data.id);
        //     jobPositionData[index] = data;
        // }

        //const index = jobPositionData.findIndex((item: any) => item.id === data.id);
        //jobPositionData[index] = data;

        return data;
    }

    async deleteJobPosition(id: number){
        // if(id){
        //     const index = jobPositionData.findIndex((item: any) => item.id === id);
        //     jobPositionData.splice(index, 1);
        // }
        //const index = jobPositionData.findIndex((item: any) => item.id === id);
        //jobPositionData.splice(index, 1);
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