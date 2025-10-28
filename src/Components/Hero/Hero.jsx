import React, { useEffect, useState } from 'react'
import { BsLightningCharge, BsStars } from 'react-icons/bs'
import TypeAnimation from '../TypeAnimation/TypeAnimation'
import Gaming from '../../assets/gaming.jpg'
import { FaArrowRight } from 'react-icons/fa'
import 'animate.css';
import Swal from 'sweetalert2'

const Hero = () => {
  return (
    <section className='md:py-50 py-30'>
        <div className='max-w-[1440px] mx-auto px-10 flex items-center flex-wrap'>
            <div className='md:w-[50%] w-full'>
                <span className=' px-4  py-2 w-fit rounded-full border-2 border-fuchsia-500 bg-black/30 flex items-center gap-2 text-fuchsia-400 animated-shadow'  style={{textShadow:'0 0 10px #ff98ff, 0 0 20px #ff98ff,0 0 30px #ff98ff,0 0 50px #ff98ff,0 0 80px #ff98ff, 0 0 120px #ff98ff,0 0 130px #ff98ff,0 0 140px #ff98ff'}}>
                    <span><BsStars /></span>
                     <span className='animate__animated animate__bounce'>New arrival limited-stock</span>
                </span>
                <h2 className='animate__animated animate__bounce font-mono text-7xl/20 md:text-6xl md:py-5 font-bold lg:pr-20 lg:my-10'><span className='text-white dark:text-black'>Level Up Your</span> <span className=' bg-linear-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent'>Gaming Setup</span></h2>
                <p className='animate__animated animate__bounce lg:pr-40 text-lg text-zinc-500 mb-10 dark:text-black'>Discover premium gaming gear, accessories, and the latest titles. From mechanical keyboards to high-performance headsets, we've got everything you need to dominate.</p>
                <div>
                    <button className='animate__animated animate__bounce px-4 py-2 rounded-xl text-white font-bold text-lg bg-linear-to-r from-fuchsia-500 to-purple-500 flex items-center gap-2 transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_#bc24c7]'>Shop Now <FaArrowRight /></button>
                </div>
                <div className='flex gap-5 mt-10 my-6'>
                   <div>
                    <span className='animate__animated animate__bounce text-4xl font-mono font-bold text-fuchsia-500' style={{textShadow:'0 0 10px #ff7dff, 0 0 20px #ff7dff,0 0 30px #ff7dff,0 0 50px #ff7dff,0 0 80px #ff7dff, 0 0 120px #ff7dff,0 0 130px #ff7dff,0 0 140px #ff7dff'}}>10K+</span>
                   </div>
                   <div>
                    <span className='animate__animated animate__bounce text-4xl font-mono font-bold text-sky-500' style={{textShadow:'0 0 10px #58ffff, 0 0 20px #58ffff,0 0 30px #58ffff,0 0 50px #58ffff,0 0 80px #58ffff, 0 0 120px #58ffff,0 0 130px #58ffff,0 0 140px #58ffff'}}>50K+</span>
                   </div>
                  <div>
                     <span className='animate__animated animate__bounce text-4xl font-mono font-bold text-green-500' style={{textShadow:'0 0 10px #38ff38, 0 0 20px #38ff38,0 0 30px #38ff38,0 0 50px #38ff38,0 0 80px #38ff38, 0 0 120px #38ff38,0 0 130px #38ff38,0 0 140px #38ff38'}}>24/7</span>
                  </div>
                </div>
            </div>
            <div className='relative md:w-[50%] w-full'>
                <div className='animate__animated animate__bounceIn overflow-hidden rounded-3xl p-3 border-2 border-teal-600 dark:border-fuchsia-500 shadow-[0_10px_20px_#00bc7d] dark:shadow-[0_10px_20px_#ff96ff]'>
                    <img src={Gaming} alt="" className='rounded-3xl' />
                </div>
                <span className='absolute float -bottom-10 -left-8 flex items-center gap-2 border-2 border-fuchsia-500 rounded-2xl px-4 py-3 bg-black shadow-[0_10px_20px_#ed48ed]'>
                    <span className='w-14 h-14 bg-fuchsia-200 text-xl font-bold flex text-fuchsia-500  justify-center items-center rounded-lg'><BsLightningCharge /></span>
                    <div>
                        <p className='font-mono text-fuchsia-500'>Fast shipping</p>
                        <p className='text-zinc-500 text-sm font-mono'>For on order +50$</p>
                    </div>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Hero