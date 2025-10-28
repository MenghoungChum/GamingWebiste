import React from 'react'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GaminPC from './Components/GamingPC/GaminPC'
import Layout from './Components/Layout/Layout'
import Console from './Components/Console/Console'
import Mice from './Components/Mice/Mice'
import HeadPhone from './Components/HeadPhone/HeadPhone'
import Monitors from './Components/Monitors/Monitors'
import KeyboardPro from './Components/KeyboardPro/KeyboardPro'
import Favorites from './Components/FavoutitePage/Favorites'
import DetailProducts from './Components/DeatailProductPage/DetailProducts'
import AboutUs from './Components/AboutUs/AboutUs'
import ContactUs from './Components/ContactUs/ContactUs'
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login'
import RegisterPage from './Components/RegisterPage/RegisterPage'
import AllProducts from './Components/AllProduct/AllProducts'
import Chatbot from './Components/Chatbot/Chatbot'

const App = () => {
  const router=createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/Home',
          element: <Home/>
        },
        {
          path: '/gamingPc',
          element:<GaminPC/>
        },
        {
          path: '/console',
          element:<Console/>
        },
        {
          path: '/keyboard',
          element: <KeyboardPro/>
        },
        {
          path: '/mice',
          element: <Mice/>
        },
        {
          path:'/headphone',
          element: <HeadPhone/>
        },
        {
          path: '/monitors',
          element: <Monitors/>
        },
        {
          path: '/favourite',
          element: <Favorites/>
        },
        {
          path: '/detailProducts/:id',
          element: <DetailProducts/>
        },
        {
          path: '/About Us',
          element: <AboutUs/>
        },{
          path: '/Contact Us',
          element: <ContactUs/>
        },
        {
          path: '/Profile',
          element: <Profile/>
        },{
          path: 'allProducts',
          element: <AllProducts/>
        },
        {
          path:'/chatbot',
          element: <Chatbot/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <RegisterPage/>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App