import { useMenuStyles } from "@chakra-ui/react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import apiClient from "../servieces/apiaclient3000"
export interface genra{
    name:string
}

export const useGenra = () => {
  const fetchGenras=new apiClient<genra>('/api/genres')
  return useMutation({
    mutationKey:['genre',],
    mutationFn:fetchGenras.post
    // mutationFn:(genra:genra)=>axios
    // .post('http://localhost:3000/api/genres',genra)
    // .then((res)=>res.data)
    

  })
}
