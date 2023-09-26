import { IEmployeeDocument } from "@/interfaces/hrm";

class MediaService{
    constructor(){}
    async uploadFile(data: IEmployeeDocument){
        return data;
    }

    async deleteFile(id: string){
        return id;
    }
}