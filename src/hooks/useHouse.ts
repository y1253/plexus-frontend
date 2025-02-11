
import apiClient from "../servieces/api-client";
import { useQuery } from "@tanstack/react-query";


export interface Picture {
  picture: string;
}
export interface HouseObject {
    unit_id: number;
    address: string;
    city:string;
    state:string;
    zip_code:string;
    sqft:number;
    unit_type:string;
    listed_date:string;
    update_date:string;
    on_market:boolean;
    main_picture: string;
    description:string;
    price:number;
    pictures:Picture[]

    beds:number;
    baths_full:number;
    baths_helf:number;
    heating:string;
    cooling:string;
    fire_place:string;

    tag:string;
    year_build:string;
    purchase_type:string;
    price_per_sqft:number;
    tex_amount:number;


  }




const useHouse = (selectedHouse:number |null|string|undefined) => {
 
  
  const fetchHouse=new apiClient<HouseObject[]>('')
  

    return  useQuery<HouseObject[],Error>({
      queryKey:['houses',selectedHouse],
      queryFn:()=>fetchHouse.getAll(selectedHouse)
      
  
    
    })


};

export default useHouse;
