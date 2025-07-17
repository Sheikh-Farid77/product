import { useContext } from "react";
import { ProductContext } from "../context";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// get products by axios
const retrieveProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    return response.data;
}

export default function ProductProvider({ children }) {

    const {
        data,
        error,
        isLoading
    } = useQuery({
        queryKey: ["products"],
        queryFn: retrieveProducts,
        retry: false
    })
console.log(data)

    const state = {
        products: data?.products,
        error,
        isLoading
    }
    return (
        <ProductContext.Provider value={state}>
            {children}
        </ProductContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProduct() {
    return useContext(ProductContext)
}

