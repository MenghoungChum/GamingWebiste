import React, { useContext, useEffect, useState } from 'react'
import { BiSolidCommentDetail } from 'react-icons/bi';
import { FaFilter, FaHeart, FaRegHeart } from 'react-icons/fa6';
import { IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { AllProductsList } from '../ProductList/ProductList';
import { CartContext } from '../CartContext/CartContext';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../Banner/Banner';
import imageBanner from '../../assets/AllBanner.jpg'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const AllProducts = () => {
    const {addTocart,addToFavourite,fav}=useContext(CartContext);
    const {pathname}=useLocation();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [showFilter,setShowFilter]=useState(true);

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

    const priceRanges = [
        { label: "All", min: 0, max: Infinity },
        { label: "$0 - $100", min: 0, max: 100 },
        { label: "$100 - $200", min: 100, max: 200 },
        { label: "$200 - $500", min: 200, max: 500 },
        { label: "$500 - $1000", min: 500, max: 1000 },
        { label: "Over $1000", min: 1000, max: Infinity },
    ];
    const filteredProducts = AllProductsList.filter((p) => {
        const matchesCategory =
            selectedCategory === "All" || p.category === selectedCategory;

        const range = priceRanges.find((r) => r.label === selectedPrice);
        const matchesPrice =
             (p.price >= range.min && p.price <= range.max);

        return matchesCategory && matchesPrice;
    });

  return (
    <section>
        <Banner imageBanner={imageBanner} title='All Proudcts'/>
        <div className='max-w-[1440px] mx-auto px-10 py-20 md:flex block gap-6 justify-between'>
            
            <div className={`${showFilter ? 'lg:w-[25%] md:w-[40%] w-full h-auto' : 'w-0'}  overflow-hidden transition-all duration-300 ease-in-out`}>
                
                <div className="flex flex-col gap-6 bg-gradient-to-br from-[#1a0b1f] via-[#0c0612] border border-white to-[#0a0b14] dark:bg-gradient-to-br dark:from-transparent dark:via-transparent dark:to-transparent dark:border-zinc-500 p-4 rounded-lg mb-8">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-2xl font-bold mb-4 text-white dark:text-black">🛒 Product Filter</h1>
                        <div className='hidden md:block'>
                            <span
                            className='w-10 h-10 rounded-lg bg-fuchsia-500 text-white flex justify-center items-center'
                            onClick={()=>setShowFilter(!showFilter)}
                            >
                                <FaLongArrowAltLeft className='text-4xl cursor-pointer' />
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2 text-white dark:text-black">Category</h2>
                        <select
                            className="border border-gray-300 rounded-md p-2 w-full text-white dark:text-black"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="All" className='bg-black dark:bg-white dark:text-black'>All</option>
                            <option value="Gaming PC" className='bg-black dark:bg-white dark:text-black'>Gaming PC</option>
                            <option value="Console" className='bg-black dark:bg-white dark:text-black'>Console</option>
                            <option value="Keyboard" className='bg-black dark:bg-white dark:text-black'>Keyboard</option>
                            <option value="Mouse" className='bg-black dark:bg-white dark:text-black'>Mouse</option>
                            <option value="HeadPhone" className='bg-black dark:bg-white dark:text-black'>HeadPhone</option>
                            <option value="Monitor" className='bg-black dark:bg-white dark:text-black'>Monitor</option>
                        </select>
                    </div>

                    {/* Price Filter (Radio Buttons) */}
                    <div>
                        <h2 className="font-semibold mb-2 text-white dark:text-black">Price Range</h2>
                        <div className="flex flex-col space-y-2">
                            {priceRanges.map((range) => (
                            <label
                                key={range.label}
                                className="flex items-center space-x-2 cursor-pointer text-white dark:text-black"
                            >
                                <input
                                type="radio"
                                name="price"
                                value={range.label}// value={1100-200}
                                checked={selectedPrice === range.label}
                                onChange={(e) => setSelectedPrice(e.target.value)}
                                className="text-blue-500 focus:ring-0"
                                />
                                <span>{range.label}</span>
                            </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={` ${showFilter ? 'w-full lg:w-[73%] md:w-[60%]': 'w-full'} transition-all duration-300 ease-in-out`}>
                
                <div className='flex gap-3'>
                    <div 
                    onClick={()=>setShowFilter(true)}
                    className={`w-10 h-10 rounded-lg bg-fuchsia-500 text-white flex justify-center items-center ${showFilter ? 'hidden' : 'block'}`}>
                        <FaLongArrowAltRight className='text-4xl cursor-pointer' />
                    </div>
                    <div className={` grid ${showFilter ? 'lg:grid-cols-3 md:grid-cols-2': 'lg:grid-cols-4 md:grid-cols-3 grid-cols-1'} gap-3 md:gap-5 lg:gap-7 w-full relative`}>
                    {
                    filteredProducts.length >0 ? (
                        filteredProducts.map(item=>(
                        <div  key={item.id} className={` bg-zinc-800 rounded-2xl cursor-pointer group border overflow-hidden transition-all duration-300 ease-in-out dark:bg-transparent ${item.shadow} ${item.borderColor}`}>
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
                                        className={`text-white z-20 px-2 py-1 rounded-lg absolute left-[50%] transform translate-x-[-50%] bottom-4  flex items-center cursor-pointer text-sm lg:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out ${item.bgBtn} ${item.btnShadow}`}><span><LuShoppingCart /></span><span>Add to Card</span>
                                    </button>
                                </div>
                                {/* Overlay */}
                                <div className='w-full pointer-events-none h-full bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out from-black to-transparent absolute inset-0'></div>
                            </div>
                            <div className='p-4'>
                                <h3 className={`${item.hoverText} text-white text-lg mt-3 font-medium transition-all duration-300 ease-in-out dark:text-black`}>{item.name}</h3>
                                <div className='flex items-center gap-2 my-3'>
                                    <span className={`${item.textColor}`}><IoStar /></span>
                                    <p className='text-white dark:text-black'>{item.rating}</p>
                                    <p className=' text-sm text-white dark:text-black'>{item.reveiw}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className={`lg:text-2xl text-lg font-medium ${item.textShadow} ${item.textColor}`}>{item.price}$</p>
                                    <Link 
                                        to={`/detailProducts/${item.id}`}
                                        className={`text-white text-sm lg:text-base px-3 py-1 rounded-lg bottom-4  flex items-center cursor-pointer gap-2 transition-all duration-300 ease-in-out ${item.bgBtn} ${item.btnShadow}`}><span><BiSolidCommentDetail /></span><span>See detail</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            ))
                        ): (
                            <div><p className="text-center text-gray-500">No products found.</p></div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AllProducts