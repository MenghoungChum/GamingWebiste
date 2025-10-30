import React from 'react'
import { SlFire } from 'react-icons/sl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import slide1 from '../../assets/SlideComputer.jpg'
import slide2 from '../../assets/Slideimage2.jpg'
import slide3 from '../../assets/SlideKeyboard.jpg'
import slide4 from '../../assets/SlideImageMouse.webp'

const Slide = () => {
  return (
    <section>
      <div className='max-w-[1440px] px-10 lg:py-20 mx-auto'>
        <h3 data-aos="zoom-in" className=' flex items-center gap-3 font-bold lg:text-6xl text-4xl font-mono my-16 bg-clip-text text-transparent tracking-tighter bg-linear-to-r from-sky-500 to-fuchsia-500 w-fit'>Trending Now</h3>

        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          keyboard={true}
          loop={true}
          allowTouchMove={false} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
        }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
          className='mySwiper'
        >
          {
            slidData.map(item=>(
                <SwiperSlide>
                    <div 
                    key={item.id}
                    data-aos="flip-up"
                    className='w-full h-[500px] bg-no-repeat bg-center bg-cover rounded-2xl border border-red-500 relative' style={{ backgroundImage: `url(${item.image})` }}>
                    <div className='absolute bottom-10 left-10'>
                        <span className='px-4 py-2 w-fit rounded-full border-2 border-fuchsia-400 bg-black/30 flex items-center gap-2 text-fuchsia-400 shadow-[inset_0_0_10px_4px_#f78eff]'>
                          <span>{item.action}</span>
                        </span>
                        <span className='text-4xl block font-bold text-white my-2' style={{textShadow:'0 0 10px #dbdbdb, 0 0 20px #dbdbdb,0 0 30px #dbdbdb,0 0 50px #dbdbdb'}}>{item.name}</span>
                        <span className='text-lg block font-medium font-mono text-sky-500' style={{textShadow:'0 0 10px #d8ffff, 0 0 20px #d8ffff,0 0 30px #d8ffff,0 0 50px #d8ffff' }}>{item.player}</span>
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

const slidData=[
    {
        id: 1,
        image: slide1 ,
        action: 'Action RPG',
        name: 'Cyber Warriors 2077',
        player: '2.5M Active Players',
    },
    {
        id: 2,
        image: slide2 ,
        action: 'Strategy',
        name: 'Galaxy Conquest',
        player: '1.8M Active Players',
    },
    {
        id: 3,
        image: slide3 ,
        action: 'Fighting',
        name: 'Street Legends',
        player: '3.2M Active Players',
    },
    {
        id: 4,
        image: slide4 ,
        action: 'MMORPG',
        name: 'Mystic Realms',
        player: '4.1M Active Players',
    },
]

export default Slide
