import { IProduct } from "@/interfaces/store";
import { apiServices } from "./api-service";

import { config } from "@/config";


class StoreService {
    private static _instance: StoreService;
    private readonly _apiUrl: string = config.API_URL_STORE;

    public static getInstance(): StoreService{
        if(!StoreService._instance){
            StoreService._instance = new StoreService()
        }
        return StoreService._instance
    }

    getProducts(){
        return new Promise<IProduct[]>((resolve, reject) => {
            fetch(this._apiUrl)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error))
        })
    }

    async ToBuyOrder(data: any){
        return await apiServices.post("store_purchase/", data)
    }
}

export const storeService = StoreService.getInstance()