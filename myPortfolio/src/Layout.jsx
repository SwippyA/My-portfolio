import React from 'react'
import { Outlet } from 'react-router-dom'
import Head from './Components/Head/Head'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/home'
import About from './Components/About/About'

function Layout() {
  return (
    <>
    <Head/>
    <Outlet/>
    
    <Footer/>
    </>
    
  )
}

export default Layout