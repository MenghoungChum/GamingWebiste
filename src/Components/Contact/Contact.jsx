import React, { useEffect } from 'react'
import { CiMail } from 'react-icons/ci'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
        offset: 200,
    })
    },[]);
  return (
    <section>
        <div data-aos="zoom-in" className='max-w-[1440px] px-10 mx-auto py-20'>
            <div className='w-full md:h-[450px] rounded-2xl border border-fuchsia-500 bg-zinc-800 backdrop-blur-2xl flex flex-col items-center gap-6 md:p-16 p-10'>
                <span className='w-16 h-16 rounded-2xl border border-white bg-fuchsia-300/20 text-fuchsia-500 font-extrabold flex items-center justify-center text-2xl'><CiMail /></span>
                <h3 className='md:text-4xl text-3xl text-center font-mono tracking-wide text-white'>Stay in the Game</h3>
                <p className='text-sky-200 text-center'>Stay in the GameSubscribe to our newsletter for exclusive deals, new product launches, and <br /> gaming tips delivered to your inbox.</p>
                <div className='flex items-center gap-2 flex-wrap justify-center'>
                    <input type="text" className='bg-black rounded-lg text-sky-200 p-3 h-[35px] text-sm md:w-[300px]' placeholder='Enter you email...' />
                    <button className='px-4 py-1.5 bg-pink-500 text-white rounded-lg flex items-center'>
                        <CiMail /> Subscribe
                    </button>
                </div>
                <p className='text-xs text-sky-200'>Join 50,000+ gamers. Unsubscribe anytime.</p>
            </div>
        </div>
    </section>
  )
}

export default Contact