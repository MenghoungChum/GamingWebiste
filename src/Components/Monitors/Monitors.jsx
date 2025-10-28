import React, { useContext, useEffect } from 'react'
import Banner from '../Banner/Banner'
import { monitorGaming } from '../ProductList/ProductList'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { LuShoppingCart } from 'react-icons/lu'
import { IoStar } from 'react-icons/io5'
import MonitorsBanner from '../../assets/MonitorBanner.jpg'
import { CartContext } from '../CartContext/CartContext'
import { Link, useLocation } from 'react-router-dom'
import { BiSolidCommentDetail } from 'react-icons/bi'

const Monitors = () => {
    const {addTocart,addToFavourite,fav}=useContext(CartContext);
    const {pathname}=useLocation();
    useEffect(() => {
        window.scrollTo({
        top: 0,
        });
    }, [pathname]);
  return (
    <section>
       <Banner imageBanner={MonitorsBanner} title="Monitors Gaming"/>
        <div className='max-w-[1440px] mx-auto px-10 py-10 flex flex-wrap gap-3 md:gap-5 lg:gap-7'>
            {
                monitorGaming.map((item,index)=>(
            <div 
            data-aos="zoom-in"
            data-aos-delay={index*200}
            key={item.id} className={`lg:w-[23%] dark:bg-transparent w-full md:w-[31%] lg:h-[460px] bg-zinc-800 rounded-2xl cursor-pointer group border overflow-hidden transition-all duration-300 ease-in-out ${item.shadow} ${item.borderColor}`}>
                <div className='w-full pt-5 relative h-[60%] cursor-pointer overflow-hidden'>
                    <img src={item.image} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out' alt="" />
                    <div className='w-full flex items-center absolute top-5 p-3 justify-between'>
                        <p className={`px-4 py-1 w-fit rounded-full border-2  font-medium bg-black/30 flex items-center gap-2 ${item.stockShadow} ${item.textColor}`}>
                          {item.category}
                        </p>
                        <span
                            onClick={() => addToFavourite(item)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center 
                                opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer
                                ${fav.some(favItem => favItem.id === item.id) ? 'bg-red-500' : 'bg-black'} text-white`}
                            >
                            {fav.some(favItem => favItem.id === item.id) ? <FaHeart /> : <FaRegHeart />}
                        </span>
                    </div>
                    <div>
                        <button 
                        onClick={()=>addTocart(item)}
                        className={`text-white z-20 px-2 text-sm lg:text-base py-1 rounded-lg absolute left-[50%] transform translate-x-[-50%] bottom-4  flex items-center cursor-pointer lg:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out ${item.bgBtn} ${item.btnShadow}`}><span><LuShoppingCart /></span><span>Add to Card</span></button>
                    </div>
                    {/* Overlay */}
                    <div className='w-full pointer-events-none h-full bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out from-black to-transparent absolute inset-0'></div>
                </div>
                <div className='p-4'>
                    <h3 className={`${item.hoverText} dark:text-black text-white text-lg mt-3 font-medium transition-all duration-300 ease-in-out`}>{item.name}</h3>
                    <div className='flex items-center gap-2 my-3'>
                        <span className={`${item.textColor}`}><IoStar /></span>
                        <p className='text-white dark:text-black'>{item.rating}</p>
                        <p className=' text-sm text-white dark:text-black'>{item.reveiw}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className={`lg:text-2xl text-lg font-medium ${item.textShadow} ${item.textColor}`}>{item.price}$</p>
                        <Link 
                            to={`/detailProducts/${item.id}`}
                            className={`text-white px-3 py-1 text-sm lg:text-base rounded-lg bottom-4  flex items-center cursor-pointer gap-2 transition-all duration-300 ease-in-out ${item.bgBtn} ${item.btnShadow}`}><span><BiSolidCommentDetail /></span><span>See detail</span>
                        </Link>
                    </div>
                </div>
            </div>
                ))
            }
        </div>
    </section>
  )
}

export default Monitors