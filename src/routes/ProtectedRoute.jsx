import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router'
import Loader from '../shared/components/Loader';
import {Navigate} from "react-router";

const ProtectedRoute = () => {

  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loader />
  }

  if (!isAuthenticated) {
    return <Navigate to={'/login'} replace />
  }


  return <Outlet />
}

export default ProtectedRoute
