import axios from "axios";

const apiClient3000= axios.create({
    baseURL:"http://localhost:3000"
})


class apiClient<T>{
    endpoint:string;

    constructor(endpoint:string){
        this.endpoint=endpoint
    }

    getAll=()=>{
        return apiClient3000.get(this.endpoint).then((res)=>res.data)
    }
    post=(data:T)=>{
        return apiClient3000.post(this.endpoint,data).then((res)=>res.data)
    }
}
export default apiClient;