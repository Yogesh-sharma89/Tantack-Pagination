import { api } from "../../../config/axios"

export const getAllProducts = async(search="",pageParam,limit)=>{
    try{

        // const skip = page*limit;

        

        const url = search.trim() ? `/products/search?q=${search}&`:"/products?";

        const res = await api.get(`${url}limit=${limit}&skip=${pageParam}`);
        console.log(res.data);
        
        return res.data;

    }catch(err){
      console.log("Error in get all products api :",err.message);
    }
}


export const getProductsByCategory = async(category)=>{
    try{

        const validCategory = category.trim().toLowerCase();

        const res = await api.get(`/products/category/${validCategory}`)
        console.log("data in get products by caterogry : ",res.data.products)

        return res.data.products;

    }catch(err){
      console.log("error in get products by category :",err.message)
    }
}

export const getAllCategories = async()=>{
    try{

        const res = await api.get("/products/categories");
        console.log(res.data);
        return res.data;
        
    }catch(err){
      console.log("Error in get all catergores  :",err.message)
    }
}