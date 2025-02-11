import axios, { AxiosHeaders } from "axios";
import { data } from "react-router-dom";

const apiClientUrl= axios.create({
    // baseURL:"http://plexus.eastus.cloudapp.azure.com"
    baseURL:"http://localhost:5000"

    //baseURL:"https://ygbackend.com"
})


class apiClient<T>{
    endpoint:string;
    

    constructor(endpoint:string){
        this.endpoint=endpoint;
    }

    getAll=(selectedHouse:number|null |string|undefined)=>{
        return apiClientUrl.get<T>(this.endpoint,{params:{id:selectedHouse}}).then((res)=>res.data)
    }


    post=(data :T)=>{
        return apiClientUrl.post(this.endpoint,data,{
            headers: {
               
              "Content-Type": "multipart/form-data",}
            }).then((res)=>res.status)
    }

    postBody=(d :T)=>{
        return apiClientUrl.post(this.endpoint,d,{headers: {  Authorization: ``,"Content-Type": "application/json" },  }
           )
            .then((res)=>res.status)
    }
}
export default apiClient;