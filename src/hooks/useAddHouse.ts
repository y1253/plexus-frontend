
import { useMutation } from "@tanstack/react-query";
import apiClient from "../servieces/api-client";

const useAddHouse = () => {
    const postFn = new apiClient<object>("/admin");

    return useMutation<number, Error,object>({
        mutationFn: postFn.post,
    });

    
}

export default useAddHouse