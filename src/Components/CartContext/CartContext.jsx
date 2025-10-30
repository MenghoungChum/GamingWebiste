import React, { createContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FaV } from 'react-icons/fa6';
import Swal from 'sweetalert2';

export const CartContext =createContext();
export const CardProvider = ({children}) => {
    const [favActive,setFavActive]=useState(false);
    const [cart,setCart]=useState([]);
    const [fav,setFav]=useState([]);
    // get data from localstorage
    const userLogin=JSON.parse(localStorage.getItem("loggedInUser"));
    useEffect(()=>{
        const save=JSON.parse(localStorage.getItem("cart")|| "[]");
        setCart(save);
        const savFav=JSON.parse(localStorage.getItem("favCart") || "[]");
        setFav(savFav);
    },[])
    const addTocart=(product)=>{
        if(!userLogin){
            Swal.fire({
                title: "⚠️ Please Login first",
                icon: "error",
                draggable: true
            });
            return;
        }
        setCart(prev=>{
            const exiting= prev.find(item=>item.id == product.id);
            if(exiting){
                toast(' Product already added!', {
                    icon: '⚠️',
                    style: { background: 'red', color: '#fff', borderRadius: '8px' },
                });
                return prev
            }else{
                const updatedCart = [...prev, { ...product, qty: 1 }];
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                toast.success(`${product.name} added to cart 🛒`, {
                    duration: 2000,
                    style: {
                    background: '#333',
                    color: '#fff',
                    borderRadius: '8px',
                    },
                });
                return updatedCart;
            }
        })
    }

    // remove one product
    const removeAddTocart=(id)=>{
        Swal.fire({
        title: "Are you sure?",
        text: "You won't you to remove this card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updateCart= cart.filter(item=>item.id !=id);
                setCart(updateCart);
                localStorage.setItem("cart",JSON.stringify(updateCart));
            }
        });
    }
    const removeAddTocart1=(id)=>{
                const updateCart= cart.filter(item=>item.id !=id);
                setCart(updateCart);
                localStorage.setItem("cart",JSON.stringify(updateCart));
    }
    // remove all products
    const removeAddTocartAllPro=()=>{Swal.fire({
        title: "Are you sure?",
        text: "You won't you to remove All products cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                localStorage.removeItem("cart");
            }
        });
    }
    const increaeQty = (id) => {
        // setCart(prev=>prev.map(item=>item.id===id ? {...item,qty: item.qty +1} : item))
        const updatedCart = cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const decreaesQty=(id)=>{
        // setCart(prev=>prev.map(item=>item.id === id ? {...item,qty: item.qty-1}: item));
        const updateCart=cart.map(item=>item.id==id ? {...item,qty: item.qty-1} : item);
        setCart(updateCart);
        localStorage.setItem("cart",JSON.stringify(updateCart));
    }
    const addToFavourite=(product)=>{
        if(!userLogin){
            Swal.fire({
                title: "⚠️ Please Login first",
                icon: "error",
                draggable: true
            });
            return;
        }
        setFav(prev=>{
            const existing=prev.find(item=>item.id===product.id);
            if(existing){
                const remove= prev.filter(item=>item.id!==product.id);
                localStorage.setItem("favCart",JSON.stringify(remove))
                return remove;
            }else{
                // return [...prev,product];
                const updataFavcart=[...prev,product];
                localStorage.setItem("favCart",JSON.stringify(updataFavcart));
                toast.success(`${product.name} added to favorite ❤️`, {
                    duration: 2000,
                    style: {
                    background: '#333',
                    color: '#fff',
                    borderRadius: '8px',
                    },
                });
                return updataFavcart;
            }
        })
        setFavActive(!favActive);
    }
    const removeFav=(id)=>{
        // setFav(prev=>prev.filter(item=>item.id!==id));
        toast.success('Item removed from cart!'); 
        const updataFavcart=fav.filter(item=>item.id!=id)
        setFav(updataFavcart);
        localStorage.setItem("favCart",JSON.stringify(updataFavcart));
    }

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + parseInt(item.price) *parseInt( item.qty), 0);
    const totalQty=cart.reduce((acc,item)=>acc+item.qty,0)
    const discount= totalPrice >0 && totalPrice <=5000 ? 0.05 :totalPrice>5000 && totalPrice<=10000 ? 0.1 : totalPrice>10000 ? 0.15: 0;
  return (
    <CartContext.Provider value={{addTocart,removeAddTocart1,cart,setCart,removeAddTocart,increaeQty,decreaesQty,fav,setFav,addToFavourite,favActive,setFavActive,removeFav,removeAddTocartAllPro,userLogin,totalPrice,totalQty,discount}}>
        {children}
    </CartContext.Provider>
  )
}
