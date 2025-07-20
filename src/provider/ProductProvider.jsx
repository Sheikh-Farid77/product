import { useContext, useState } from "react";
import { ProductContext } from "../context";
import axios from "axios";
import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import useDebounce from "../hook/useDebounce";

// get products by axios
const retrieveProducts = async ({ queryKey }) => {
    const [_key, { skip }] = queryKey;
    const response = await axios.get(`https://dummyjson.com/${_key}?limit=20&skip=${skip}`);
    return response.data;
};

export default function ProductProvider({ children }) {
    const [skip, setSkip] = useState(0);
    const [searchQuery, setSearchQuery] = useState('')
    console.log(searchQuery)
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["products", { skip }],
        queryFn: retrieveProducts,
        retry: false,
    });


    // delete product
    const mutation = useMutation({
        mutationFn: (id) => {
            return axios.delete(`https://dummyjson.com/products/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });
// pagination
    const handleNext = () => {
        setSkip(prev => prev + 20)
    }
    const handlePrev = () => {
        setSkip(prev => prev - 20)
    }

    // search query

    const handleGetSearchQuery = (e) =>{
        setSearchQuery(e.target.value)
    }

    const debounceValue = useDebounce(searchQuery, 500)
     const handleSearch = (product) => {
    if (searchQuery !== "") {
      return product?.title
        .toLowerCase()
        .includes(debounceValue.trim().toLowerCase());
    }
    return true;
  };

    const state = {
        products: data?.products,
        error,
        isLoading,
        isError,
        mutation,
        handleNext,
        handlePrev,
        skip,
        item: data?.total,
        handleGetSearchQuery,
        handleSearch
    };

    return (
        <ProductContext.Provider value={state}>
            {children}
        </ProductContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProduct() {
    return useContext(ProductContext);
}
