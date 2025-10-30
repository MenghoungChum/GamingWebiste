import React, { useContext, useEffect } from 'react'
import image from '../../assets/computerGaming2.jpg'
import { IoCartOutline } from 'react-icons/io5'
import { CartContext } from '../CartContext/CartContext'
import { useLocation, useParams } from 'react-router-dom'
import { AllProductsList } from '../ProductList/ProductList'
import AOS from 'aos';
import 'aos/dist/aos.css';

const DetailProducts = () => {
    const {addTocart,cart}=useContext(CartContext);
    const {id}=useParams();
    const detailProduct=AllProductsList.find(item=>item.id== parseInt(id))
    const {pathname}=useLocation();
    useEffect(() => {
        window.scrollTo({
        top: 0,
        });
    }, [pathname]);
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
        offset: 200,
    })
    },[]);
  return (
    <section>
        <div className="py-20 flex flex-col items-center justify-center bg-gradient-to-b text-white px-10 mx-auto max-w-[1440px]">
        <h4 data-aos="fade-down" className='text-3xl text-white dark:text-fuchsia-500 w-full text-center  font-bold my-10 mt-20'>Detail About Proudct</h4>
        <div
            data-aos="fade-up"
            className="w-full dark:border-zinc-400 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row lg:max-h-[400px]"
        >
            {/* Left Image Section */}
            <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="md:w-1/2 w-full h-[350px] md:h-auto overflow-hidden"
            >
            <img
                src={detailProduct.image}
                alt={detailProduct.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            </div>

            {/* Right Content Section */}
            <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="md:w-1/2 w-full p-8 flex flex-col justify-center gap-4"
            >
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-lime-400 via-green-300 to-emerald-500 bg-clip-text text-transparent">{detailProduct.name}</h2>

            <div className="space-y-2 text-gray-200 dark:text-black">
                <p><span className="font-semibold text-lime-400 dark:text-lime-600">💰 Price:</span> ${detailProduct.price}</p>
                <p><span className="font-semibold text-yellow-400 dark:text-yellow-600">⭐ Rating:</span> {detailProduct.rating}</p>
                <p><span className="font-semibold text-cyan-400 dark:text-cyan-600">📝 Reviews:</span> {detailProduct.reveiw}</p>
            </div>

            <p className="text-gray-300 dark:text-black leading-relaxed border-t border-white/20 lg:pt-3">{detailProduct.description}</p>

            <button
                onClick={() => addTocart(detailProduct)}
                className="lg:mt-6 flex items-center justify-center gap-2 py-3 px-5 text-lg font-bold rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/30"
            >
                <IoCartOutline size={24} />
                Add to Cart
            </button>
            </div>
        </div>
        </div>

    </section>
  )
}

export default DetailProducts
