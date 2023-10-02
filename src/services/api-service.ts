//import { getLocalStorage } from "../utils/localStorage.utility"
//obtener session de auth-next
import { useSession } from "next-auth/react"
import { config } from "@/config"


class ApiServices {
    private readonly _root: string = config.api_url;
    //private readonly _root: string ='/api/v1/'
    // private readonly _token: string = getLocalStorage('dataUser')?.acces_token  || 'no token' 
    private readonly _token: string = 'no token'
    private  static instance: ApiServices
    //constructor(){}

    public static getInstance(): ApiServices{
        if(!ApiServices.instance){
        ApiServices.instance = new ApiServices()
        }
        return ApiServices.instance
    }

    private request(url:string, method:string, data: any): Promise<any>{
        return new Promise((resolve, reject) => {
        const options: any = {
            method: method,
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${this._token}`
            },
            body: (method != 'GET' || data != null)? JSON.stringify(data): null
        }
        fetch(this._root + url, options)
            .then(response => {
            if(response.ok){
                return response.json()
            }
                    
            throw new Error('Error: ' + response.status)
                    
            })
            .then(data => {
            resolve(data)
            })
            .catch(error => {
            reject(error)
            })
        })
    }

    public post(path:string,data:any){
        return this.request(path, 'POST', data)
    }
    
    public get(path:string){
        return this.request(path, 'GET', null)
    }

    public put(path:string,data:any){
        return this.request(path, 'PUT', data)
    }

    public delete(path:string){
        return this.request(path, 'DELETE', null)
    }

    public patch(path:string,data:any){
        return this.request(path, 'PATCH', data)
    }

    private requestFile(url:string, method:string, data: any): Promise<any>{
        return new Promise((resolve, reject) => {
        const options = {
            method: method,
            body: data,
            // headers:{
            //     'Content-Type': 'multipart/form-data',
            // }
        }
        fetch(this._root + url, options)
            .then(response => {
            if(response.ok){
                return response.json()
            }
                    
            throw new Error('Error: ' + response.status)
                    
            })
            .then(data => {
            resolve(data)
            })
            .catch(error => {
            console.log(error) 
            reject(error)

            })
        })

    }

    public postFile(path:string,formData:any): Promise<any>{
        return this.requestFile(path, 'POST', formData)
    }
    public putFile(path:string,formData:any): Promise<any>{
        return this.requestFile(path, 'PUT', formData)
    }
}

export const apiServices = ApiServices.getInstance()