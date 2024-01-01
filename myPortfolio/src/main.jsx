import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'

import Home from './Components/Home/home.jsx'
import Menu from './Components/Menu/Menu.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"menu",
        element:<Menu/>
      },
      {
        path:"",
        element:<about/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
       
   
  </React.StrictMode>,
)
