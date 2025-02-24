import { useQuery } from "@tanstack/react-query"
import apiClient from "../servieces/api-client"
import { HouseObject } from "./useHouse"


const useAdminHouse = () => {
    const getAll=new apiClient<HouseObject[]>('/admin')
  return (
    useQuery<HouseObject[],Error>({
        queryKey:['adminGet'],
        queryFn:getAll.adminGetAll
    })
  )
}

export default useAdminHouse