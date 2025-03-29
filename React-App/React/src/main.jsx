import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Register from './components/Reg/Register.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'

import Logout from './components/Logout/Logout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      
      {
        path: 'logout',
        element: <Logout/>
      },
      
     
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
</StrictMode>,
)
