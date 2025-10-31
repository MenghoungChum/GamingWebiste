import React, { useEffect } from 'react'
import { AiOutlineFire } from 'react-icons/ai'
import { IoMdTime } from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css';

const InforSection = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
        offset: 200,
    })
    },[]);
  return (
    <section>
        <div className='max-w-[1440px] px-10 mx-auto py-20'>
            <div className='flex justify-between w-full lg:h-[450px] md:h-[530px] flex-wrap'>
                <div data-aos="zoom-in" className='md:w-[48%] w-full h-full dark:bg-transparent bg-fuchsia-500/10 mb-5 backdrop-blur-2xl rounded-2xl border border-fuchsia-500 px-12 py-16'>
                    <div className='flex items-center gap-2 px-4 dark:border-pink-500 dark:text-red-700 py-1 rounded-full border border-red-500 bg-red-300/20 w-fit text-red-500'>
                        <span><AiOutlineFire /></span>
                        <span>Hot Deal - 48 Hours Only</span>
                    </div>
                    <h3 className='font-mono text-4xl text-sky-100 font-bold my-6 dark:text-black'>Gaming Bundle Mega Sale</h3>
                    <p className='text-cyan-200 dark:text-black'>Get a complete gaming setup with keyboard, mouse, and headset at an unbeatable price</p>
                    <div className='flex items-center gap-4 my-6'>
                        <span className='text-4xl font-bold text-fuchsia-500 dark:text-black'>$299</span>
                        <span className='text-2xl text-zinc-500'><del>$499</del></span>
                        <span className='px-3 py-2 rounded-full text-white font-bold bg-red-500'>-40%</span>
                    </div>
                    <button className='flex items-center gap-2 text-white bg-pink-500 px-4 py-2 rounded-lg'>
                        <span><IoMdTime /></span>
                        <span>Grab the detail</span>
                    </button>
                </div>
                <div data-aos="zoom-in" className='md:w-[48%] w-full h-full dark:bg-transparent bg-teal-500/10 backdrop-blur-2xl rounded-2xl border border-teal-500 px-12 py-16'>
                    <div className='flex items-center gap-2 px-4 py-1 rounded-full border dark:border-black border-teal-500 bg-teal-300/20 w-fit dark:text-black'>
                        <span><AiOutlineFire /></span>
                        <span>Weekend Special</span>
                    </div>
                    <h3 className='font-mono text-4xl text-sky-100 font-bold my-6 dark:text-black'>Free Shipping <br /> on All Orders</h3>
                    <p className='text-cyan-200 dark:text-black'>No minimum purchase required. Get your gaming gear delivered to your door at no extra cost</p>
                   <p className='text-2xl font-mono text-teal-500 my-6 dark:text-black'>This Weekend Only</p>
                    <button className='items-center text-white px-4 py-2 rounded-lg border border-teal-500 dark:bg-transparent dark:text-black'>
                        <span>Shop Now</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
export default InforSection