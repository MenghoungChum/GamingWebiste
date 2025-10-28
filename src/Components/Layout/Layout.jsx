import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Swal from 'sweetalert2'
import Aos from 'aos'

const Layout = () => {
  return (
    <div className='bg-black dark:bg-white min-h-screen transition-colors duration-300 ease-in-out' id='layout'>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster position='top-right' reverseOrder={false}/>
    </div>
  )
}

export default Layout