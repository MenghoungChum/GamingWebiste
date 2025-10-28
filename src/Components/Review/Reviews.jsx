import React, { useEffect } from 'react'
import { BsLightningCharge } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { LuShoppingCart, LuTrophy } from 'react-icons/lu'
import AOS from 'aos'
const Reviews = () => {
//     useEffect(() => {
//         AOS.init({
//         duration: 1000, 
//         once: true,
//         offset: 100,
//     });
//     AOS.refresh();
//   }, []);
  return (
    <section className='py-20'>
        <div className='max-w-[1440px] mx-auto px-10 flex justify-evenly flex-wrap items-center'>
            {
                reviews.map(item=>(
                    <div data-aos="zoom-in" data-aos-delay={item.id*100} className='flex flex-col items-center border dark:border-none group' key={item.id}>
                        <span
                        className={`w-16 h-16 rounded-2xl border bg-black flex items-center justify-center text-3xl font-bold transition-all duration-200 ease-in-out cursor-pointer 
                            ${item.borderColor} 
                            ${item.textColor} 
                            ${item.hoverColor} 
                            ${item.shadow}
                           `}
                        >
                        {item.icon}
                        </span>
                        <p className={`text-4xl font-bold my-3  ${item.shadow}`}>
                            {item.num}
                        </p>
                        <p className='text-base text-zinc-500'>{item.title}</p>
                    </div>
                ))
            }

        </div>
    </section>
  )
}
const reviews=[
    {
        id:1,
        num: '45,678+',
        icon: <FiUsers />,
        title:'Active Player' ,
        textColor: 'text-sky-600',
        hoverColor: 'group-hover:shadow-[0_0_20px_5px_#72ffff]',
        borderColor: 'border-sky-500',
        shadow: '[text-shadow:_0_0_10px_#72ffff,0_0_20px_#72ffff,0_0_30px_#72ffff,0_0_50px_#72ffff,0_0_80px_#72ffff,0_0_120px_#72ffff,0_0_130px_#72ffff]'
    },
    {
        id:2,
        num: '1,234',
        icon: <LuShoppingCart />,
        title:'Order Today' ,
        textColor: 'text-fuchsia-700',
        hoverColor: 'hover:shadow-[0_0_20px_5px_#ff54ff]',
        borderColor: 'border-fuchsia-500',
        shadow: '[text-shadow:_0_0_10px_#ff54ff,0_0_20px_#ff54ff,0_0_30px_#ff54ff,0_0_50px_#ff54ff,0_0_80px_#ff54ff,0_0_120px_#ff54ff,0_0_130px_#ff54ff]'
    },
    {
        id:3,
        num: '89',
        icon: <LuTrophy />,
        title:'Tournament' ,
        textColor: 'text-green-700',
        hoverColor: 'hover:shadow-[0_0_20px_5px_#55ff55]',
        borderColor: 'border-green-500',
        shadow: '[text-shadow:_0_0_10px_#55ff55,0_0_20px_#55ff55,0_0_30px_#55ff55,0_0_50px_#55ff55,0_0_80px_#55ff55,0_0_120px_#55ff55,0_0_130px_#55ff55]'
    },
    {
        id:4,
        num: '156',
        icon: <BsLightningCharge />,
        title:'Live Stream' ,
        textColor: 'text-orange-700',
        hoverColor: 'hover:shadow-[0_0_20px_5px_#ffa600]',
        borderColor: 'border-orange-500',
        shadow: '[text-shadow:_0_0_10px_#ffa600,0_0_20px_#ffa600,0_0_30px_#ffa600,0_0_50px_#ffa600,0_0_80px_#ffa600,0_0_120px_#ffa600,0_0_130px_#ffa600]'
    },
]
export default Reviews