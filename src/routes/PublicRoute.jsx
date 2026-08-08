import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../shared/components/Loader';
import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {

 const {isAuthenticated,isLoading} = useSelector((state)=>state.auth);

 if(isLoading){
  return <Loader/>
 }

 if(isAuthenticated){
  return <Navigate to={'/'} replace/>
 }

return <Outlet/>
}

export default PublicRoute
