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
}
export default apiClient;