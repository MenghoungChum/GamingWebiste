import React, { use, useContext, useEffect, useRef, useState } from 'react'
import { BsLightningCharge } from 'react-icons/bs'
import { FaBars, FaHeart, FaMinus, FaPlus } from 'react-icons/fa'
import { FaCartShopping, FaXmark } from 'react-icons/fa6'
import { IoLogOutOutline, IoSearch, IoSearchSharp } from 'react-icons/io5'
import { CartContext } from '../CartContext/CartContext'
import { LuClipboardList, LuShoppingCart } from 'react-icons/lu'
import computer from '../../assets/computerGaming1.jpg'
import { GrClear } from 'react-icons/gr'
import { MdClear, MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { AllProductsList } from '../ProductList/ProductList'
import DarkMode from '../DarkMode/DarkMode'

const Navbar = () => {
    const {cart,removeAddTocart,increaeQty,decreaesQty,fav,removeAddTocartAllPro,setCart,setFav}=useContext(CartContext);
    const [toggle,setToggle]=useState(false);
    const [addToggle,setAddToggle]=useState(false);
    const [query,setQuery]=useState('');
    const [search,setSearch]=useState(false);
    const navigate=useNavigate();
    const filterProduct= AllProductsList.filter(item=>item.name.toLowerCase().includes(query.toLowerCase()))
    const [active,setActive]=useState('Home');
      const sidebarRef = useRef(null);
    // HandleLogout
    const handleLogout=()=>{
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("cart")
        localStorage.removeItem("favCart");
        setCart([]);
        setFav([])
    }
    const userLogin=JSON.parse(localStorage.getItem("loggedInUser"));

    //click out side to close side bar

  // Function to handle clicks outside
    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggle(false);
        // setAddToggle(false)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
  return (
    <div>
        <header data-aos="fade-down" className='bg-white/20 dark:bg-black/45 backdrop-blur-3xl z-50 fixed w-full top-0'>
            <nav  className='max-w-[1440px] mx-auto px-10 min-h-[10vh]  flex justify-between items-center'>
                <div className='flex gap-7'>
                    {/* Logo */}
                    <div 
                    onClick={()=>navigate('/Home')}
                    className='flex items-center gap-2 cursor-pointer'>
                        <span className='md:w-10 md:h-10 w-8 h-8 text-white text-xl font-bold bg-linear-to-r from-fuchsia-500 to-purple-500 flex justify-center items-center rounded-lg bg-amber-600'><BsLightningCharge /></span>
                        <span className="font-mono md:text-xl text-base  font-bold bg-linear-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">GameXtream</span>
                    </div>
                    {/* Navbar list */}
                    <ul className='lg:flex items-center hidden gap-10'>
                        {
                            navbar.map(item=>(
                                <Link
                                key={item.id}
                                to={`/${item.name}`} 
                                onClick={()=>setActive(item.name)}
                                className={`active:text-fuchsia-700 py-2 hover:text-fuchsia-500 cursor-pointer font-semibold text-sm duration-300 transition-all ease-in-out  relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-linear-to-r before:from-fuchsia-500 before:to-purple-500 before:transition-all before:duration-300 hover:before:w-full ${item.name ==active ? 'before:absolute before:bottom-0 before:w-full before:h-[2px] before:bg-linear-to-r before:from-fuchsia-500 before:to-purple-500 text-white' : 'text-white' }`}>{item.name}</Link>
                            ))
                        }
                    </ul>
                </div>
                {/* search */}
                <div 
                className='lg:flex hidden items-center w-[300px] h-[35px] bg-gray-300 p-3 rounded-lg border border-white focus:outline-2 focus:outline-fuchsia-500'>
                    <span className='w-[30px]'><IoSearch /></span>
                    <input 
                    onClick={()=>setSearch(!search)}
                    className='flex-1 h-[35px] outline-0 p-2 text-sm' placeholder='Enter name to search ...' type="text" />
                </div>
                {/* Icon */}
                <div className='flex items-center gap-6'>
                    <div className='flex items-center md:gap-6 gap-4'>
                        <span 
                            onClick={()=>navigate('/favourite')}
                            className='text-white cursor-pointer relative z-50'>
                            <FaHeart />
                            <span className='w-5 h-5 rounded-full text-white bg-red-500 absolute flex justify-center items-center text-sm -top-4 -right-3'>{fav.length}</span>
                        </span>
                        <span 
                        onClick={()=>{
                            setAddToggle(!addToggle)
                            setToggle(false)
                        }}
                        className='text-white cursor-pointer relative'>
                            <FaCartShopping />
                            <span className='w-5 h-5 rounded-full text-white bg-red-500 absolute flex justify-center items-center text-sm -top-4 -right-3'>{cart.length}</span>
                        </span>
                        <span 
                            onClick={()=>{
                                setToggle(!toggle)
                                setAddToggle(false)
                            }}
                            className='text-white cursor-pointer lg:hidden'><FaBars />
                        </span>
                        <DarkMode/>
                    </div>
                    <div className='hidden lg:block'>
                        {!userLogin ? <Link to='/login' className='px-5 py-2 rounded-lg text-white bg-zinc-500 cursor-pointer'>Login</Link>: <a href='#' 
                        onClick={()=>handleLogout()}
                        className='px-5 z-10 py-2 rounded-lg text-white bg-red-500 cursor-pointer flex items-center'><IoLogOutOutline className='text-2xl font-bold' /> Logout</a>}
                    </div>
                </div>
            </nav>
            {/* Side bar */}
            <div ref={sidebarRef}  className={`md:w-[50%] w-[75%] fixed lg:hidden  h-[calc(100vh-14vh)] left-0 border-0 bg-zinc-600 transform ${toggle ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 ease-in-out`}>
                <ul className='mt-5'>
                    {
                        navbar.map(item=>(
                            <Link
                            to={`/${item.name}`}
                            key={item.id}
                            onClick={()=>setActive(item.name)}
                            className={`block lg:px-4 px-2 py-3 hover:bg-fuchsia-500 cursor-pointer font-semibold text-sm duration-300 transition-all ease-in-out text-white ${item.name===active ? 'bg-black text-white' : ''} transition-all duration-300 ease-in-out`} >{item.name}</Link>
                        ))
                    }
                </ul>
                {/* Search side bar */}
                <div 
                onClick={()=>{
                    setSearch(!search)
                    setToggle(false)
                }}
                className='p-3'>
                    <div className='flex  items-center h-[35px] bg-amber-200 rounded-lg border border-white focus:outline-2 p-3 mt-3'>
                        <span className=' w-[30px] bg-amber-200'><IoSearch /></span>
                        <input className='flex-1 h-[35px] outline-0 p-2 text-sm' placeholder='Enter name to search ...' type="text" />
                    </div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 w-full'>
                    <div className='lg:hidden'>
                        {!userLogin ?<Link to='/login' className='px-5 py-2 rounded-lg text-white bg-zinc-500 cursor-pointer'>Login</Link> : <a to='#' 
                        onClick={()=>handleLogout()}
                        className='px-5 z-10 py-2 rounded-lg text-white bg-zinc-500 cursor-pointer'>Logout</a>}
                    </div>
                    <DarkMode/>
                </div>
            </div>
            {/* Add to card side */}
            <div   className={`lg:w-[30%] w-[75%] md:w-1/2 fixed right-0 z-40 h-[calc(100vh-10vh)] bg-gradient-to-r from-[#1a0026] via-[#001a26] to-[#001a1a] dark:from-zinc-300 dark:via-zinc-300 dark:to-zinc-300 dark:backdrop-blur-2xl transform ${addToggle ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 ease-in-out`}>
                <header className='w-full h-[100px] border-b border-b-zinc-500 flex items-center p-4 relative'>
                    <h4 className='lg:text-4xl text-2xl font-bold text-white [text-shadow:0_0_10px_#ff65ff,0_0_20px_#ff65ff,0_0_30px_#ff65ff] flex items-center gap-3'><LuClipboardList /> Product List</h4>
                    <span 
                    onClick={()=>setAddToggle(false)}
                    className='absolute w-8 h-8 rounded-full hover:bg-red-500 hover:text-white text-white transition-all duration-300 ease-in-out lg:top-3 right-6 top-3 lg:right-3 flex items-center justify-center lg:text-3xl text-xl'><MdClear /></span>
                </header>
                <div className='p-3 flex flex-col gap-4 w-full md:max-h-[670px] max-h-[460px] bg-amber-400 lg:max-h-[510px] overflow-scroll deleteScroll'>
                    {
                        cart.length >0 ? (
                            cart.map(item=>(
                                <div key={item.id} className='flex justify-between w-full min-h-[100px] bg-linear-to-r from-zinc-500 to-zinc-600 dark:from-white dark:to-white rounded-lg gap-3 items-center relative'>
                                    <div className='w-[30%] h-[100px] p-1 rounded-lg overflow-hidden'>
                                        <img src={item.image} className='w-full h-full object-cover' alt="" />
                                    </div>
                                    <div className='flex-1'>
                                        <h4 className='font-medium lg:text-xl text-white dark:text-black'>Name: <span className='line-clamp-1 text-sm'>{item.name}</span></h4>
                                        <p className='lg:text-base text-sm text-white dark:text-black'>Price: {item.price}</p>
                                    </div>
                                    <div className='flex items-center gap-2 mr-6'>
                                        <span 
                                        onClick={()=>{
                                            decreaesQty(item.id);
                                            if(item.qty ===1){
                                                removeAddTocart(item.id)
                                            }
                                        }}
                                        className='w-6 h-6 rounded-full bg-red-500 text-white flex justify-center items-center cursor-pointer active:bg-red-700'><FaMinus /></span>
                                        <span className='text-white dark:text-black'>{item.qty}</span>
                                        <span 
                                        onClick={()=>increaeQty(item.id)}
                                        className='w-6 h-6 rounded-full bg-green-500 text-white flex justify-center items-center cursor-pointer active:bg-green-700'><FaPlus /></span>
                                    </div>
                                    <span 
                                    onClick={()=>removeAddTocart(item.id)}
                                    className='absolute top-2 right-2 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white cursor-pointer'><FaXmark /></span>
                                </div>
                            ))
                        ): <div className='w-full h-[600px] flex items-center justify-center flex-col'>
                            <p className='lg:text-3xl text-2xl my-3 text-red-500'>No Product</p>
                            <span className='lg:text-9xl text-7xl text-red-500'><GrClear /></span>
                        </div>
                    }
                </div>
                <div className='w-full flex items-center justify-end p-4'>
                    <div className='flex items-center gap-4 justify-between'>
                        <button 
                            onClick={()=>removeAddTocartAllPro()}
                            className={`text-white z-20 lg:px-5 px-2 py-3 lg:py-2 md:px-5 md:py-3 rounded-lg text-sm lg:text-base  bottom-4 flex items-center cursor-pointer gap-2 transition-all duration-300 ease-in-out bg-linear-to-r from-red-500 via-pink-500 to-red-500`}><span><MdOutlineRemoveShoppingCart /></span><span>Remove All</span>
                        </button>
                        <button 
                            onClick={()=>navigate('profile')}
                            className={`text-white z-20 lg:px-5 px-2 lg:py-2 md:px-5 py-3 md:py-3  rounded-lg text-sm lg:text-base bottom-4 flex items-center cursor-pointer gap-2 transition-all duration-300 ease-in-out bg-linear-to-r from-purple-500 to-fuchsia-500`}><span><LuShoppingCart /></span><span>Buy Now</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Search Dropdown */}
            <div 
            className={`w-full bg-gray-400 fixed z-50 top-0 transform transition-all duration-300 ease-in-out ${search ? 'translate-y-0' : '-translate-y-full'} cursor-pointer`}>
                <div className='w-full h-full lg:pt-20 pt-15 lg:px-20 px-5 md:px-10 relative'>
                    <span 
                    onClick={()=>setSearch(false)}
                    className='absolute top-5 right-5 text-2xl cursor-pointer w-8 h-8 rounded-full hover:bg-red-500 flex justify-center items-center transition-all duration-300 ease-in-out active:bg-red-800 hover:text-white text-white'><FaXmark /></span>
                    <div className='w-full lg:h-[60px] bg-fuchsia-300 rounded-lg'>
                        <input
                            value={query}
                            onChange={(e)=>setQuery(e.target.value)}
                            placeholder='Enter products name to search...'
                            type="text" className='w-full h-full border border-zinc-500 rounded-lg bg-white p-4 text-xl outline-0'
                        />
                    </div>
                    <hr className='mt-3 text-white' />
                    <div className='mt-5  w-full h-[285px] overflow-y-scroll deleteScroll p-5 relative'>
                        <div className='grid grid-cols-1  gap-6'>
                            {
                                query.length > 0 ? (
                                    filterProduct.map(item=>(
                                        <div 
                                        onClick={()=>{
                                            navigate(`/detailProducts/${item.id}`)
                                            setSearch(false)
                                            setQuery('')
                                        }}
                                        className='max-h-[90px] flex items-center cursor-pointer rounded-lg overflow-hidden bg-white '>
                                            <div className='w-[130px] h-full bg-red-500'>
                                                <img src={item.image} className='w-full h-full object-cover' alt="" />
                                            </div>
                                            <div className='p-7'>
                                                <h3>Name : {item.name}</h3>
                                                <p>Price : {item.price}</p>
                                            </div>
                                        </div>
                                    ))
                                ):(
                                    <div className='w-full h-[200px] absolute flex-col flex justify-center items-center'>
                                        <span className='text-9xl'><IoSearchSharp /></span>
                                        <p className='text-4xl'>Not Found</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* overlayPayment */}
        <div className='w-full h-full'></div>
    </div>
  )
}

const navbar=[
    {
        id: 1,
        name:'Home',
    },
    {
        id: 2,
        name:'About Us',
    },
    {
        id: 3,
        name:'Contact Us',
    },
    {
        id: 4,
        name:'Profile',
    },
    {
        id: 5,
        name:'Chatbot',
    },
]
export default Navbar