
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        // e.preventDefault();

        const allUsers=JSON.parse(localStorage.getItem("users")|| "[]");
         if (allUsers.length === 0) {
            alert("No users found. Please register first!");
            return;
        }

        // find user to login
        const foundUser = allUsers.find((u) =>
            u.email === email &&
            u.password === password
        );

          if (foundUser) {
      // Save logged-in user info (optional)
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
            alert("Login successful!");
            setEmail("");
            setPassword("");
            navigate("/home");
        } else {
            alert("Invalid credentials! Please try again.");
        }
    }
  return (
    <div className='flex justify-center items-center h-screen bg-linear-to-tl from-fuchsia-400 via-purple-400 to-purple-500 relative'>
        <div className='flex justify-center items-center h-screen absolute'>
            <form 
            onSubmit={handleLogin}
            className='w-[700px] h-[400px] bg-zinc-500/80 backdrop-blur-2xl rounded-lg p-10'>
                <h1 className='text-3xl text-zinc-500 w-full text-center mb-8 font-bold [text-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_30px_#ffffff]'>Login</h1>
                <div className='flex flex-col items-center gap-4'>
                    <div className='w-full h-[45px] bg-zinc-300 rounded-lg overflow-hidden'>
                        <input 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" className='w-full h-full outline-0 p-3 focus:bg-zinc-400 transition-all duration-300 ease-in-out' placeholder='Enter email...' />
                    </div>
                    <div className='w-full h-[45px] bg-zinc-300 rounded-lg overflow-hidden'>
                        <input 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password" className='w-full h-full outline-0 p-3 focus:bg-zinc-400 transition-all duration-300 ease-in-out' placeholder='Enter password...' />
                    </div>
                    <div className='w-full'>
                        <button type='submit' className='w-full py-2 rounded-lg text-white font-bold text-xl bg-linear-to-r from-pink-700 to-purple-500'>Login</button>
                    </div>
                </div>
                <p className='text-white text-center mt-4'>Don't you have an account? <Link className='text-sky-300' to='/register'>Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login