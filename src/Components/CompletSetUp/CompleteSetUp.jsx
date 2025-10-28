import React, { useEffect } from 'react'
import Image1 from '../../assets/SetUp1.jpg'
import Image2 from '../../assets/SetUp2.jpg'
import Image3 from '../../assets/SetUp3.jpg'
import { FaArrowRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompleteSetUp = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
        offset: 200,
    })
    },[]);
  return (
    <section>
        <div className='max-w-[1440px] px-10 py-20 mx-auto'>
            <div className='text-center'>
                <h3 data-aos="zoom-in" className='text-4xl font-mono tracking-tighter my-5 text-white font-bold dark:text-zinc-500'>Complete Your Setup</h3>
                <p data-aos="zoom-in" className='text-base text-cyan-200 dark:text-black'>Explore our curated collection of premium gaming gear</p>
            </div>
            <div className='flex flex-wrap mt-16 gap-3 lg:gap-4'>
                {
                    ProductSetUp.map(item=>(
                        <div
                        data-aos="zoom-in"
                        data-aos-delay={item.id*200}
                        key={item.id} className='lg:w-[32%] md:w-[48%] w-full md:h-[500px] border border-white dark:bg-linear-to-tl dark:hover:shadow-[0_0_10px_#000000] dark:from-transparent dark:to-transparent dark:border-fuchsia-500 hover:border-fuchsia-500 rounded-2xl cursor-pointer group pt-5 hover:shadow-[0_0_10px_#ff00ff] transition-all duration-300 ease-in-out'>
                            <div className='w-full h-[60%] overflow-hidden'>
                                <img src={item.image} className='w-full h-full object-cover group-hover:scale-110 duration-300 transition-all ease-in-out' alt="" />
                            </div>
                            <div className='p-7'>
                                <h3 className='text-2xl font-mono font-medium text-cyan-100 dark:text-black'>{item.category}</h3>
                                <p className='text-cyan-200 my-4 dark:text-black'>{item.des}</p>
                                <button className='px-4 hover:bg-pink-500 dark:text-black transition-all duration-300 ease-in-out hover:text-white cursor-pointer py-1 mt-3 font-medium rounded-full flex items-center text-pink-500'><span>Explore Collection </span><span><FaArrowRight /></span></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

const ProductSetUp=[
    {
        id: 1,
        image: Image1,
        category: 'Pro Controllers',
        des: 'Precision gaming controllers for competitive play',
    },
    {
        id: 2,
        image: Image2,
        category: 'Gaming Chairs',
        des: 'Ergonomic comfort for marathon gaming sessions',
    },
    {
        id: 3,
        image: Image3,
        category: 'Streaming Gear',
        des: 'Professional equipment for content creators',
    },
]
export default CompleteSetUp