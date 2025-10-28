import React, { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus, FaUserLargeSlash, FaXmark } from "react-icons/fa6";
import { CartContext } from "../CartContext/CartContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import QR from '../../assets/Qr (2).png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import QRKhmer from '../../assets/QR_Khmer.png'
import { BsFillCreditCardFill, BsQrCode } from "react-icons/bs";
import Swal from "sweetalert2";


const Profile = () => {
  const {cart,increaeQty,removeAddTocart,decreaesQty,totalQty,totalPrice,discount,setCart,removeAddTocart1}=useContext(CartContext);
  const [isLogin, setIsLogin] = useState(null);
  const [showPay,setShowPay]=useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Credit");
  const [bankAcount,setBankAcount]=useState("dollar")
  const navigate=useNavigate();
  const [inputValue, setInputValue] = useState("");

  // Convert file to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
  });

    // Handle image update
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const base64 = await toBase64(file);

    // Update user in localStorage
    const updatedUser = { ...isLogin, image: base64 };
    setIsLogin(updatedUser);
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    // If you also stored all users in localStorage (like register page)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    Swal.fire({
      icon: "success",
      title: "Profile updated!",
      showConfirmButton: false,
      timer: 1500,
    });
  };






  useEffect(() => {
    // Get user data from localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLogin(JSON.parse(loggedInUser));
    }
  }, []);
  useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
        offset: 200,
    })
    },[]);
  const {pathname}=useLocation();
    useEffect(() => {
        window.scrollTo({
        top: 0,
        });
    }, [pathname]);
  if (!isLogin) {
    return (
      <div className="max-w-[1440px] px-10 mx-auto py-20 ">
        <div className="w-full h-[400px] flex justify-center items-center flex-col">
          <h4 className=" text-red-500 text-4xl font-bold">User not logged in</h4>
          <span className="text-9xl text-red-500 mt-10"><FaUserLargeSlash /></span>
        </div>
      </div>
    );
  }
  const paySuccess=(e)=>{
    e.preventDefault();
    let timerInterval;
    Swal.fire({
      title: "Payment Success ✅",
      icon: "success",           
      timer: 2000,              
      timerProgressBar: true,   
      showConfirmButton: false,   
      didOpen: () => {
        // find <b> element and update it with remaining seconds
        const b = Swal.getHtmlContainer().querySelector("b");
        b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);

        timerInterval = setInterval(() => {
          b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("Closed automatically by timer");
      }
    });
    setShowPay(false);
    localStorage.removeItem("cart")
    setCart([])
  }
  const messagePayment=(e)=>{
    const inputValue=parseFloat(e);
    const payment=totalPrice -(totalPrice*discount)
    if (inputValue < payment) {
      return <p className="text-red-500">Not enough</p>
    } else if (inputValue === payment) {
      return <p className="text-green-700">The money is enough</p>
    } else if (inputValue>payment) {
      return <p className="text-yellow-500">The money is over</p>
    }
  }
  return (
    <section>
      <div className="max-w-[1440px] md:px-10 mx-auto py-30">
        {/* Profile */}
        <div className=" w-full h-[400px] flex items-center flex-col px-10">
          <div className="w-full bg-gradient-to-r from-[#1a0026] via-[#001a26] to-[#001a1a] dark:bg-gradient-to-r dark:from-white dark:via-gray-200 dark:to-white  lg:w-[40%] h-full flex flex-col items-center justify-center rounded-xl shadow-2xl dark:shadow-lg dark:shadow-white shadow-gray-500 border-2 border-gray-500">
            <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden ring-4 ring-gray-500 group">
              <img
                src={isLogin.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            <p className="text-2xl font-bold my-3 text-white dark:text-black">{isLogin.email}</p>
            <p className="text-xl text-white dark:text-black">{isLogin.username}</p>
          </div>
        </div>
        <h4 className="text-4xl font-medium text-white dark:text-black">Sopping Cart</h4>
        <p className="text-zinc-500 mt-2 mb-6">{cart.length} item added</p>
        <div className="w-full flex  gap-10 flex-wrap">
          <div className="lg:w-[68%] w-full h-full flex-wrap">
            {/* card */}
           <table className="min-w-full">
              <thead>
                <tr>
                  <th className="p-2 text-left text-white  dark:text-black">Product</th>
                  <th className="p-2 text-left text-white  dark:text-black">Title</th>
                  <th className="p-2 text-center text-white  dark:text-black">Price</th>
                  <th className="p-2 text-left text-white  dark:text-black">Quantity</th>
                  <th className="p-2 text-center text-white  dark:text-black">Total</th>
                  <th className="p-2 text-center text-white  dark:text-black">Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map(item=> (
                    <tr className="hover:bg-gray-50 group transition-all duration-300 ease-in-out border-t-2 border-t-gray-500">
                      <td className="p-2">
                        <img
                          src={item.image}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="p-2 text-white group-hover:text-black dark:text-black">{item.name}</td>
                      <td className="p-2 text-center text-white group-hover:text-black dark:text-black">${item.price}</td>
                      <td className="p-2 text-center text-white group-hover:text-black">
                        <div className="h-full items-center flex md:gap-4 gap-2">
                          <span 
                            onClick={()=>{
                              decreaesQty(item.id)
                              if(item.qty===1){
                                removeAddTocart1(item.id)
                              }
                            }}
                            className="group-hover:text-black group-hover:border-zinc-500 w-8 h-8  rounded-lg border border-white dark:text-black dark:border-zinc-500 text-white flex items-center justify-center font-bold"><FaMinus /></span>
                            <span className="group-hover:text-black   text-white dark:text-black">{item.qty}</span>
                            <span 
                              onClick={()=>increaeQty(item.id)}
                              className="group-hover:text-black group-hover:border-zinc-500 w-8 h-8  rounded-lg cursor-pointer border border-white dark:text-black dark:border-zinc-500 text-white flex items-center justify-center font-bold"><FaPlus />
                            </span>
                        </div>
                      </td>
                      <td className="p-2 text-center text-white group-hover:text-black dark:text-black hidden md:block">${totalPrice}</td>
                      <td className="p-2 text-center">
                        <button
                        onClick={()=> removeAddTocart(item.id)}
                          className="text-red-500 font-bold hover:text-red-700 text-white group-hover:text-black dark:text-black"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table> 
          </div>
          {/*Payment  */}
          <div className="lg:w-[29%] w-full px-10 h-fit rounded-xl  bg-gradient-to-br from-[#1a0b1f] via-[#0c0612] to-[#0a0b14] dark:bg-gradient-to-tl dark:from-white dark:via-gray-200 dark:to-white sticky top-28  shadow-[0_0_10px_#cbcbcb] p-8">
            <h5 className="text-white mb-10 text-2xl font-bold dark:text-black">Order Summary</h5>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-white dark:text-black">Total Price</p>
                <p className="text-white dark:text-black">$ {totalPrice}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-white my-4 dark:text-black">Total QTY</p>
                <p className="text-white dark:text-black">{totalQty}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-white my-4 dark:text-black">Discount</p>
                <p className="text-white dark:text-black">{discount===0.05 ? 5 : discount===0.1 ? 10 : discount===0.15 ? 15 : 0 } %</p>
              </div>
            </div>
            <hr className="text-white my-3 dark:text-black" />
            <div className="flex justify-between items-center">
              <p className="text-white text-xl font-bold dark:text-black">Payment</p>
              <p className="text-white text-xl font-bold dark:text-black">$ {totalPrice -(totalPrice*discount)}</p>
            </div>
            <div className="flex flex-col gap-5">
              <button 
              onClick={()=>setShowPay(!showPay)}
              className=" w-full py-2 rounded-lg bg-white text-black mt-6 dark:bg-black dark:text-white cursor-pointer hover:bg-gray-400 active:bg-gray-600 transition-all duration-300 ease-in-out">Process to pay</button>
              <button 
              onClick={()=>navigate('/')}
              className="text-white  w-full py-2 dark:text-black bg-black rounded-lg border border-gray-500 cursor-pointer hover:bg-zinc-400 active:bg-zinc-600 transition-all duration-300 ease-in-out dark:bg-white">Continue shopping</button>
              <p className="text-white text-center dark:text-black">Secure checkout powered by Stripe</p>
            </div>
          </div>
        </div>
      </div>
      {/* alert payment */}
      <div className={`fixed  inset-0 bg-black z-50 flex justify-center flex-col items-center transition-all duration-300 ease-in-out ${showPay ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <h5 className="text-center text-5xl mb-10 text-white font-bold">Please Pay</h5>
        <div>
          <form className="bg-zinc-400 p-8 rounded-lg  md:w-[500px]">
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-3">Payment Method:</p>
              <div className="space-y-2">
                
                <div 
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    id="googlePay"
                    name="paymentMethod"
                    value="Google Pay"
                    checked={paymentMethod === "QR"}
                    onChange={() => setPaymentMethod("QR")}
                    readOnly
                    className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-green-500"
                  />
                  <label htmlFor="googlePay" className=" ml-2 flex items-center text-base font-medium text-gray-800">
                    <BsQrCode className="mr-3" /> QR
                  </label>
                </div>
                <div 
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="Credit Card"
                    checked={paymentMethod === "Credit"}
                    onChange={() => setPaymentMethod("Credit")}
                    readOnly
                    className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-green-500"
                  />
                  <label htmlFor="creditCard" className="ml-2 flex items-center text-base font-medium text-gray-800">
                    <BsFillCreditCardFill className="mr-3" />
                    Credit Card
                  </label>
                </div>
              </div>
             {
              paymentMethod === "Credit" && (
                <div>
                  <div className="my-4">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Name On Card</label>
                    <input 
                      type="text" 
                      placeholder="Enter name on card" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Card Number</label>
                    <input 
                      type="text" 
                      placeholder="Enter card number" 
                      maxLength="16"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Amount of money</label>
                    <input 
                      type="text" 
                      placeholder="Enter amount of money" 
                      maxLength="16"
                      onChange={(e)=>setInputValue(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                    />
                    <div className="mt-2">{messagePayment(inputValue)}</div>
                  </div>
                </div>
              )
             }
            {paymentMethod === "QR" && (
              <div className="flex flex-col items-center text-center mt-4">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      value="Google Pay"
                      checked={bankAcount === "dollar"}
                      onChange={() => setBankAcount("dollar")}
                      readOnly
                      className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-green-500"
                    />
                    <label htmlFor="googlePay" className=" ml-2 flex items-center text-base font-medium text-gray-800">
                       Dollar
                    </label>
                  </div>
                  <div 
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      value="Credit Card"
                      checked={bankAcount === "khk"}
                      onChange={() => setBankAcount("khk")}
                      readOnly
                      className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-green-500"
                    />
                    <label htmlFor="creditCard" className="ml-2 flex items-center text-base font-medium text-gray-800">
                      KHK
                    </label>
                  </div>
                </div>
                {
                  bankAcount==="dollar" && (
                    <div className="flex flex-col items-center text-center mt-2">
                      <div className="w-48 h-48 shadow-md border rounded-lg border-gray-300">
                        <img
                          src={QR}
                          alt="QR Code"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <p className="mt-3 text-gray-700 dark:text-gray-200 font-medium">
                        Scan this QR to complete your payment
                      </p>
                  </div>
                  )
                }
                {
                  bankAcount==="khk" && (
                    <div className="flex flex-col items-center text-center mt-2">
                      <div className="w-48 h-48 shadow-md border rounded-lg border-gray-300">
                        <img
                          src={QRKhmer}
                          alt="QR Code"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <p className="mt-3 text-gray-700 dark:text-gray-200 font-medium">
                        Scan this QR to complete your payment
                      </p>
                  </div>
                  )
                }
              </div>
            )}
            </div>
            <button 
              onClick={paySuccess}
              className="w-full mt-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition duration-200 shadow-md"
            >
              Check Out
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
