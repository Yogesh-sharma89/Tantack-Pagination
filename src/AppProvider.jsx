import React, { Children } from 'react'
import { ToastContainer } from 'react-toastify'
import AppRoutes from './routes/AppRoutes'

const AppProvider = () => {

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <AppRoutes />

        </>
    )
}

export default AppProvider
