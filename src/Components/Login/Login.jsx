
import React, { useState } from 'react'
import { FaLock, FaLockOpen, FaUserAlt } from 'react-icons/fa';
import { IoLockClosedOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [showPassword,setShowpassword]=useState(false)
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
            navigate("/home");
        } else {
            alert("Invalid credentials! Please try again.");
        }
        setEmail("")
        setPassword("")
    }
  return (
    <div className="flex justify-center items-center h-screen bg-[url('https://i.pinimg.com/originals/34/1e/80/341e800b1f29d3e34ea2eba5a6af205c.gif')] bg-cover bg-no-repeat bg-center">
        <div className='flex justify-center items-center'>
            <form 
            onSubmit={handleLogin}
            className='md:w-[500px] bg-white/10 backdrop-blur-2xl rounded-lg p-10'>
                <h1 className='text-3xl text-white w-full text-center mb-8 font-bold'>Login</h1>
                <div className='flex flex-col gap-4'>
                    <label className='text-white text-lg font-bold -mb-2'>Email</label>
                    <div className='w-full h-[45px] rounded-full overflow-hidden relative bg-transparent border border-white'>
                        <input 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" className='w-full h-full outline-0 p-3 transition-all duration-300 ease-in-out text-white' placeholder='Jon@gmail.com' />
                        <span className='text-xl absolute right-4 top-3 text-white cursor-pointer'><FaUserAlt /></span>
                    </div>
                    <label className='text-white text-lg font-bold -mb-2'>Passowrd</label>
                    <div className='w-full h-[45px] rounded-full overflow-hidden border border-white relative'>
                        <input 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type={`${showPassword ? 'text': 'password'}`} className='w-full h-full outline-0 p-3 transition-all duration-300 ease-in-out text-white' placeholder='Enter password...' />
                        <span 
                        onClick={()=>setShowpassword(!showPassword)}
                        className='text-xl absolute right-4 top-3 text-white cursor-pointer'>{showPassword ? <FaLockOpen />: <FaLock />}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <label htmlFor="remember" className='text-white'>
                            <input type="checkbox" className='scale-150 mr-3' />
                            Remember me
                        </label>
                        <a href="#" className='text-white'>Forgot password</a>
                    </div>
                    <div className='w-full'>
                        <button type='submit' className='w-full py-2 rounded-full text-white font-bold text-xl bg-linear-to-r from-pink-700 to-purple-500'>Login</button>
                    </div>
                </div>
                <p className='text-white text-center mt-4'>Don't you have an account? <Link className='text-sky-300' to='/register'>Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login