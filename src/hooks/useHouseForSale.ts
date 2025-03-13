import { useQuery } from "@tanstack/react-query"
import apiClient from "../servieces/api-client"
import { HouseObject } from "./useHouse"


const useHouseForSale = () => {
    const getSaleHouse=new apiClient<HouseObject[]>('/sale');

  return( useQuery<HouseObject[],Error>({
    queryKey:['saleHouse'],
    queryFn:()=>getSaleHouse.getAll(undefined)
  })
)
}

export default useHouseForSale