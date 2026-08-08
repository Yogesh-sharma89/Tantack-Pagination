import { api } from "../../../config/axios"

export const loginApi = async(data)=>{
    
    try{
      
        const res = await api.post('/auth/login',data);
        console.log("Login response :",res.data);
        return res.data;

    }catch(err){
        console.log("error in login api : ",err.message);
    }
}



export const getCurrentUserApi = async(accessToken)=>{

    if(!accessToken){
        throw new Error("Invalid request");
    }

    try{

        const res = await api.get("/auth/me",{
            headers:{
                "Authorization":`Bearer ${accessToken}`
            }
        })

        return res.data;

    }catch(err){
        console.log("error in get current user api :",err.message);

    }
}