import { g } from 'framer-motion/client';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../slice/auth.thunk';
import { useNavigate } from 'react-router';

const useAuthForm = () => {

  const dispatch = useDispatch();
  const naviagte = useNavigate();
 
  const {handleSubmit,register,reset,formState:{errors}} = useForm({mode:"onBlur"});

  const onSubmit = async(data)=>{
     try{

      await toast.promise(
        dispatch(login(data)).unwrap(),
        {
          pending:"Signing you in...",
          success:"Welcome back 🎉",
          error:{
            render({data}){
              return data;
            }
          }
        }
      )
      
      reset();
      naviagte("/");

      
     }catch(err){
      console.log("Error in use form hook :",err.message);
     }
  }


  return {
    handleSubmit,register,errors,onSubmit
  }
}

export default useAuthForm
