
import apiClient from "../servieces/api-client";
import { useQuery } from "@tanstack/react-query";


export interface Picture {
  picture: string;
}
export interface HouseObject {
  unit_id: number;
    address: string;
    main_picture: string;
    description:string;
    price:number;
    pictures:Picture[]

  }




const useHouse = (selectedHouse:number |null|string|undefined) => {
 
  
  const fetchHouse=new apiClient<HouseObject[]>('')
  

    return  useQuery<HouseObject[],Error>({
      queryKey:['houses',selectedHouse],
      queryFn:()=>fetchHouse.getAll(selectedHouse)
      
  
    
    })


};

export default useHouse;
