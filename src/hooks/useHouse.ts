import { useEffect, useState } from "react";
import apiClient from "../servieces/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
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




const useHouse = (selectedHouse:number |null|string|undefined,deps?:any[]) => {
  // const fatchHouse=()=>   
  // apiClient
  //     .get<HouseObject[]>("",{params:{id:selectedHouse}})
  //     .then((res) => res.data)
  
  const fetchHouse=new apiClient<HouseObject[]>('')
  
    //useEffect(() => {
    //  const controller= new AbortController();
    
      // apiClient
      //   .get<HouseObject[]>("",{params:{id:selectedHouse?.id},signal:controller.signal})
      //   .then((res) => {setHouse(res.data); setLoading(false)})
      //   .catch((err) => {
      //       if (err instanceof CanceledError)return 
      //       setError(err.message); setLoading(false);
      //   });

    // return ()=> controller.abort();
    //},deps ?[...deps]:[]);
    return  useQuery<HouseObject[],Error>({
      queryKey:['houses',selectedHouse],
      queryFn:()=>fetchHouse.getAll(selectedHouse)
      
  
    
    })

    // return {house,error, isLoading};
};

export default useHouse;
