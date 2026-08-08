import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getAllCategories, getAllProducts, getProductsByCategory } from "../api/product.api"
import { useEffect, useState } from "react"

export const useProducts = ()=>{

    const limit = 10;

    const [search,setSearch]   = useState("");

    // const [page,setPage] = useState(0);

    const [debounceSearch,setDebounceSearch] = useState("");


    //  this is for standard pagination of next and previous 
    // const {data,isLoading,error,isPlaceholderData} = useQuery({

    //     queryKey:["products",debounceSearch,page],
    //     queryFn:()=>getAllProducts(debounceSearch,page,limit),
    //     placeholderData:keepPreviousData,
    //     staleTime:Infinity
    // })

    // const totalPages = Math.ceil((data?.total) / limit) ;

    const {data,isFetchingNextPage,hasNextPage,error,isLoading,fetchNextPage} = useInfiniteQuery({
        queryKey:["products",debounceSearch],
        queryFn:({pageParam})=>getAllProducts(debounceSearch,pageParam,limit),
        initialPageParam:0,
        getNextPageParam:(lastPage,allPages)=>{
           const nextSkip = lastPage.skip + lastPage.limit;

           if(nextSkip>=lastPage.total){
            return undefined;
           }

           return nextSkip;

        },
        staleTime:10*60*1000 //10 minutes
    })

    const allItems = data?.pages?.flatMap((val)=>val.products) ?? [];

    useEffect(()=>{
        let timer = setTimeout(() => {
             setDebounceSearch(search)
        }, 1500);

        return ()=> clearTimeout(timer);

    },[search])

    return {
        data:allItems,isLoading,error,search,setSearch,isFetchingNextPage,hasNextPage,fetchNextPage
    }
}


export const useProductByCategory = ()=>{


    const [category,setCatergory] = useState("");

    const {data,isLoading,error} = useQuery({
        queryKey:['productByCategory',category],
        queryFn:()=>getProductsByCategory(category),
        enabled:!!category
    })

    return {
        category,setCatergory,data,isLoading,error
    }
}

export const  useCategories = ()=>{

    return useQuery({
        queryKey:['categories'],
        queryFn:getAllCategories,
        staleTime:Infinity
    })
}