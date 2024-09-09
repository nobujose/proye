import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { authRouter } from './auth'
import { mainAppRouter } from './mainApp'

const router = createBrowserRouter([
    {
        path:"/",
        children: [
            ...authRouter,
            ...mainAppRouter
        ]
    }
])

const Router = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Router
