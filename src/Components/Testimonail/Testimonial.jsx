
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Customer1 from '../../assets/Live1.png'
import Customer2 from '../../assets/Live2.png'
import Customer3 from '../../assets/Live3.png'
import Customer4 from '../../assets/Live4.png'
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <section>
        <div className='max-w-[1440px] px-10 mx-auto py-10'>
            <div className='text-center'>
                <h3 className='font-mono text-5xl text-white dark:text-zinc-500'>Testimonial</h3>
                <p className='text-sky-200 my-3 mb-10 dark:text-black'>Join thousands of satisfied gamers who trust us</p>
            </div>
            <div className='flex justify-end  gap-x-4 mb-6 mt-4'>
              <button className='custom-prev px-3 py-2 bg-zinc-200 rounded-lg cursor-pointer transition-all duration-300 ease-in-out text-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600  hover:text-white'>
                <IoIosArrowBack />
              </button>
              <button className='custom-next px-3 py-2 bg-zinc-200 rounded-lg cursor-pointer transition-all duration-300 ease-in-out text-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600  hover:text-white'>
                <IoIosArrowForward />
              </button>
            </div>
            <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: '.custom-prev',
            }} 
            loop={true}
            breakpoints={{
              640: {slidesPerView : 1, spaceBetween: 20},
              768: {slidesPerView : 2, spaceBetween: 20},
              1024: {slidesPerView : 3, spaceBetween: 20},
            }}
            modules={[Navigation]} 
            className="mySwiper"
            >
                {
                    customer.map(item=>(
                        <SwiperSlide key={item.id} className=' w-full bg-zinc-950 dark:bg-white p-6 backdrop-blur-2xl border border-purple-500 rounded-2xl'>
                            <p className='text-purple-500 flex items-center gap-1'>
                                {Array.from({length : item.rating}, (_,index)=>(
                                  <FaStar key={index}/>
                                ))}
                            </p>
                            <p className='text-sky-200 py-5 dark:text-black'>"{item.des}"</p>
                            <div className='flex items-center gap-3 mt-2'>
                                <div className='w-20 h-20 rounded-full border-3 border-purple-500 overflow-hidden'>
                                    <img src={item.image} className='w-full h-full object-cover' alt="" />
                                </div>
                                <div>
                                    <h4 className='text-white font-medium text-lg dark:text-black'>{item.name}</h4>
                                    <p className='text-sky-200 dark:text-black'>{item.professional}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

const customer=[
  {
    id: 1,
    image: Customer1,
    rating: 5,
    des: 'The quality of products here is unmatched. My new setup has significantly improved my gameplay and streaming quality',
    name: 'Alex Chen',
    professional: 'Professional Gamer',
  },
  {
    id: 2,
    image: Customer2,
    rating: 2,
    des: 'Fast shipping and great customer support. The monitor I bought really enhances my gaming experience.',
    name: 'Sofia Ramirez',
    professional: 'Twitch Streamer',
  },
  {
    id: 3,
    image: Customer3,
    rating: 4,
    des: 'Fast shipping, excellent customer service, and top-tier gaming gear. This is my go-to shop for all my gaming needs.',
    name: 'Ryan Lee',
    professional: 'Esports Coach',
  },
  {
    id: 4,
    image: Customer4,
    rating: 5,
    des: 'Great prices and amazing selection. Found everything I needed to build my dream gaming setup in one place.',
    name: 'Mina Park',
    professional: 'Content Creator',
  },
]

export default Testimonial