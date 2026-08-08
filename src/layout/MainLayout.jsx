import React from 'react'
import Navbar from '../shared/components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {


  return (
    <div className='bg-black min-h-screen w-full text-white'>
        <Navbar/>

        <main className='w-full max-w-7xl mx-auto pt-35  px-6'>
            <Outlet/>
        </main>

    </div>
  )
}

export default MainLayout
