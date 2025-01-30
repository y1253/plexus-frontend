import axios from "axios";

const apiClientUrl= axios.create({
    baseURL:"http://localhost:5000"
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
}
export default apiClient;