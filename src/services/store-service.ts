import { IProduct } from "@/interfaces/store";
import { apiServices } from "./api-service";

const urlProducts = "https://fakestoreapi.com/products";


class StoreService {
    private static _instance: StoreService;

    public static getInstance(): StoreService{
        if(!StoreService._instance){
            StoreService._instance = new StoreService()
        }
        return StoreService._instance
    }

    getProducts(){
        return new Promise<IProduct[]>((resolve, reject) => {
            fetch(urlProducts)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error))
        })
    }

    async ToBuyOrder(data: any){
        return await apiServices.post("store_purchase/create_credit/", data)
    }
}

export const storeService = StoreService.getInstance()