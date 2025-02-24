import { useMutation } from "@tanstack/react-query"
import apiClient from "../servieces/api-client"



const useLogin = () => {
    const login=new apiClient<object>('/login')

  return useMutation<any, Error,object>({
    mutationFn:login.postBody
  })
   
  
}

export default useLogin