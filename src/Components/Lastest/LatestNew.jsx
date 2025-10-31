import React, { useEffect } from 'react'
import { GrDocumentText } from 'react-icons/gr'
import { IoMdTime } from 'react-icons/io'
import Image1 from '../../assets/Lastest1.png'
import Image2 from '../../assets/Latest2.jpg'
import Image3 from '../../assets/Laste3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestNew = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
        offset: 200,
    })
    },[]);
  return (
    <section>
        <div className='max-w-[1440px] px-10 lg:py-20 mx-auto'>
            <h3 data-aos="zoom-in" className='flex items-center gap-3 font-bold lg:text-6xl text-4xl font-mono my-10 bg-clip-text text-transparent tracking-tighter bg-linear-to-r from-sky-500 to-fuchsia-500 w-fit'> <GrDocumentText className='text-fuchsia-500'/> Latest New</h3>
            <div className='flex flex-wrap mt-16 gap-6 md:gap-3'>
                {
                    latestNew.map(item=>(
                        <div data-aos="zoom-in" data-aos-delay={item.id*200} key={item.id} className='md:w-[32%] w-full lg:h-[500px] md:h-[630px] border border-white dark:border-zinc-500 hover:border-purple-500 rounded-2xl cursor-pointer group pt-5 hover:sha dark:text-blackdow-[0_0_10px_#b103b1ea] dark:bg-linear-to-tl dark:from-transparent dark:to-transparent transition-all duration-300 ease-in-out'>
                            <div className='w-full h-[60%] overflow-hidden relative'>
                                <img src={item.image} className='w-full h-full object-cover group-hover:scale-110 duration-300 transition-all ease-in-out' alt="" />
                                <span className=' bg-purple-300/20 rounded-full px-4 py-1 text-purple-500 shadow-[inset_0_0_10px_#b103b1ea] absolute top-5 left-5 '>{item.slogan}</span>
                            </div>
                            <div className='p-7'>
                                <h3 className='text-xl tracking-wide font-bold text-cyan-100  group-hover:text-fuchsia-500 transition-all duration-300 ease-in-out dark:text-black'>{item.title}</h3>
                                <p className='text-cyan-200 my-4 text-wrap line-clamp-2 dark:text-black'>{item.des}</p>
                                <span className='text-base flex items-center text-sky-200 dark:text-black'><span><IoMdTime /></span>{item.time}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
const latestNew=[
    {
        id: 1,
        image: Image1,
        slogan: 'Esports',
        title: 'New Tournament Season Announced',
        des: 'Get ready for the biggest esports season yet with $10M prize pool',
        time: '2 hours ago',
    },
    {
        id: 2,
        image:Image2 ,
        slogan: 'Hardware',
        title: 'Limited Edition Controllers Drop',
        des: 'Exclusive neon series controllers available for pre-order now',
        time: '5 hours ago',
    },
    {
        id: 3,
        image:Image3 ,
        slogan: 'Deals',
        title: 'Summer Sale Starts Tomorrow',
        des: 'Up to 70% off on selected games and accessories',
        time: '1 day ago',
    },
]
export default LatestNew