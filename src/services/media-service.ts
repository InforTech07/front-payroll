import { IEmployeeDocument } from "@/interfaces/hrm";
import { apiServices } from "./api-service";

class MediaService{
    private static _instance: MediaService;

    public static getInstance(): MediaService{
        if(!MediaService._instance){
            MediaService._instance = new MediaService()
        }
        return MediaService._instance
    }

    async uploadImage(data: any){
        return await apiServices.postFile('media/image/', data)
    }


    async uploadFile(data: any){
        return await apiServices.postFile('media/file/', data)
    }

    async deleteFile(id: string){
        return id;
    }
}

export const mediaService = MediaService.getInstance()