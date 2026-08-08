import React, { lazy, Suspense, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

import MainLayout from '../layout/MainLayout'
import Loader from '../shared/components/Loader'
import { useDispatch } from 'react-redux'
import { hydrateUser } from '../features/auth/slice/auth.thunk'




const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"))
const HomePage = lazy(() => import("../shared/pages/HomePage"))
const NotFoundPage = lazy(() => import("../shared/pages/NotFoundPage"))
const ShopPage = lazy(() => import("../features/products/pages/ShopPage"))
const AboutPage = lazy(() => import("../features/about/page/AboutPage"))

const AppRoutes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hydrateUser())

    }, [])


    const router = createBrowserRouter([

        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <MainLayout />,
                    children: [
                        {
                            index: true,
                            element: <Suspense fallback={<Loader />}>
                                <HomePage />
                            </Suspense>
                        },
                        {
                            path: "shop",
                            element: <Suspense fallback={<Loader />}>
                                <ShopPage />
                            </Suspense>
                        },
                        {
                            path: "about",
                            element: <Suspense fallback={<Loader />}>
                                <AboutPage />
                            </Suspense>
                        }

                    ]
                }
            ]
        },
        {
            path: "",
            element: <PublicRoute />,
            children: [
                {
                    path: "login",
                    element: <Suspense fallback={<Loader />}>
                        <LoginPage />
                    </Suspense>
                },
            ]
        },
        {
            path: "*",
            element: <Suspense fallback={<Loader />}>
                <NotFoundPage />
            </Suspense>
        }


    ])

    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes
