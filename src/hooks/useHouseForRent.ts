import { useQuery } from "@tanstack/react-query"
import apiClient from "../servieces/api-client"
import { HouseObject } from "./useHouse"


const useHouseForRent = () => {
    const getSaleHouse=new apiClient<HouseObject[]>('/rental');

  return( useQuery<HouseObject[],Error>({
    queryKey:['saleHouse'],
    queryFn:()=>getSaleHouse.getAll(undefined)
  })
)
}

export default useHouseForRent