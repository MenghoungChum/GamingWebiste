import React, { useEffect, useState } from 'react'
import { FaRegKeyboard } from 'react-icons/fa'
import { GiConsoleController } from 'react-icons/gi'
import { IoHardwareChipOutline } from 'react-icons/io5'
import { LuMonitorSmartphone } from 'react-icons/lu'
import { TfiHeadphone, TfiMouse } from 'react-icons/tfi'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
const Category = () => {
    const navigate=useNavigate();
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
        offset: 200,
    })
    AOS.refresh();
    },[]);
  return (
    <section>
        <div className='max-w-[1440px] mx-auto px-10 py-20'>
            <div className='w-full text-center'>
                <h3 data-aos="zoom-in" className='text-4xl font-black font-mono mx-auto bg-clip-text text-transparent tracking-wide bg-linear-to-r from-sky-500 to-fuchsia-500 w-fit'>Shop by Category</h3>
                <p  data-aos='zoom-in' className='text-sky-200 text-base my-4 dark:text-zinc-600'>Find exactly what you need to enhance your gaming experience</p>
            </div>
            <div className='flex justify-end'>
                <Link to='/allProducts' className=' cursor-pointer px-4 py-2 rounded-lg text-white dark:text-black  bg-transparent border border-sky-500 my-10'>View All</Link>
            </div>
            <div className='flex flex-wrap justify-between gap-y-6'>
                {
                    category.map(item=>(
                        <div 
                        data-aos="zoom-in-up"
                        data-aos-delay={item.id*200}
                        onClick={()=>navigate(`${item.path}`)}
                        key={item.id} className={`lg:w-[15%] md:w-[32%] w-full h-[200px] group bg-black border dark:bg-transparent  rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105 ${item.shadow} ${item.borderColor} ${item.bg} cursor-pointer`}>
                            <span className={`w-16 h-16 rounded-2xl   flex items-center justify-center text-3xl font-bold   transition-all duration-300 ease-in-out ${item.shadowIcon} ${item.textColor} ${item.bgIcon} ${item.bgIconHover}`}>{item.icon}</span>
                            <p className='text-white font-medium dark:text-black'>{item.category}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

const category=[
    {
        id:1,
        icon:<IoHardwareChipOutline /> ,
        category:'Gaming PCs',
        shadow: 'hover:shadow-[0_0_20px_10px_#ffa7ff]',
        shadowIcon: 'group-hover:shadow-[0_0_10px_10px_#ffcaff]',
        bg: 'hover:bg-fuchsia-600/20',
        textColor: 'text-fuchsia-400',
        bgIcon: 'bg-fuchsia-400/20',
        bgIconHover:'group-hover:bg-fuchsia-400/40',
        borderColor: 'border-fuchsia-500',
        path: '/gamingPc',
        bgdark:'dark:hover:bg-fuchsia-600',
    },
    {
        id:2,
        icon:<GiConsoleController /> ,
        category:'Consoles',
        shadow: 'hover:shadow-[0_0_20px_10px_#62fff7]',
        shadowIcon: 'group-hover:shadow-[0_0_10px_10px_#97fffa]',
        bg: 'hover:bg-teal-600/20',
        textColor: 'text-teal-400',
        bgIcon: 'bg-teal-400/20',
        bgIconHover:'group-hover:bg-teal-400/40',
        borderColor: 'border-teal-500',
        path: '/console',
        bgdark:'dark:hover:bg-teal-600',
    },
    {
        id:3,
        icon:<FaRegKeyboard /> ,
        category:'Keyboards',
        shadow: 'hover:shadow-[0_0_20px_10px_#cdffcd]',
        shadowIcon: 'group-hover:shadow-[0_0_10px_10px_#cdffcd]',
        bg: 'hover:bg-green-600/20',
        textColor: 'text-green-400',
        bgIcon: 'bg-green-400/20',
        bgIconHover:'group-hover:bg-green-400/40',
        borderColor: 'border-green-500',
        path: '/keyboard',
        bgdark:'dark:hover:bg-green-600',
    },
    {
        id:4,
        icon:<TfiMouse /> ,
        category:'Mice',
        shadow: 'hover:shadow-[0_0_20px_10px_#ffced6]',
        shadowIcon: 'group-hover:shadow-[0_0_10px_10px_#ffced6]',
        bg: 'hover:bg-pink-600/20',
        textColor: 'text-pink-400',
        bgIcon: 'bg-pink-400/20',
        bgIconHover:'group-hover:bg-pink-400/40',
        borderColor: 'border-pink-500',
        path: '/mice',
        bgdark:'dark:hover:bg-pink-600',
    },
    {
        id:5,
        icon:<TfiHeadphone /> ,
        category:'Headsets',
        shadow: 'hover:shadow-[0_0_20px_10px_#ffdd9e]',
        shadowIcon: 'group-hover:shadow-[0_0_10px_10px_#ffdd9e]',
        bg: 'hover:bg-orange-600/20',
        textColor: 'text-orange-400',
        bgIcon: 'bg-orange-400/20',
        bgIconHover:'group-hover:bg-orange-400/40',
        borderColor: 'border-orange-500',
        path: '/headphone',
        bgdark: 'dark:hover:bg-orange-600',
    },
    {
        id:6,
        icon:<LuMonitorSmartphone /> ,
        category:'Monitors',
        shadow: 'hover:shadow-[0_0_20px_10px_#ffa7a7]',
        shadowIcon: 'group-hover:shadow-[0_0_10px_10px_#ffa7a7]',
        bg: 'hover:bg-red-600/20',
        textColor: 'text-red-400',
        bgIcon: 'bg-red-400/20',
        bgIconHover:'group-hover:bg-red-400/40',
        borderColor: 'border-red-500',
        path: '/monitors',
        bgdark: 'dark:hover:bg-red-600',
    }
]

export default Category