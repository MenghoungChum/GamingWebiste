

import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import previewImage from '../../assets/Preview.png'

const Login = () => {
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("")
    const [image,setImage]=useState(null);
     const [preview, setPreview] = useState(null);
    const navigate=useNavigate();
    // handleSubmite
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!email || !username || !image || !password) {
        alert("Please input all fields");
        return;
      }
        // Convert image file to Base64
        const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
      });

    const base64Image = await toBase64(image);

    // Create user object
    const user = { email, username, password, image: base64Image };

    // Get existing users or empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const isExist = existingUsers.some((u) => u.email === user.email);
    if (isExist) {
        alert("Email already registered!");
        return;
    }

  // Add new user and save
  existingUsers.push(user);
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Register successfully!");
  navigate("/login");
};
  // prenvew image
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };


  return (
    <div className='flex justify-center items-center h-screen bg-linear-to-tl from-fuchsia-400 via-purple-400 to-teal-400'>
        <form 
        onSubmit={handleSubmit}
        className='w-[700px]  bg-zinc-500/80 backdrop-blur-2xl rounded-lg p-10'>
            <h1 className='text-3xl text-zinc-500 w-full text-center mb-8 font-bold [text-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_30px_#ffffff]'>Register</h1>
            <div className='flex flex-col gap-4'>
                <div className='w-full h-[45px] bg-zinc-300 rounded-lg overflow-hidden'>
                    <input 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    type="text" className='w-full h-full outline-0 p-3 focus:bg-zinc-400 transition-all duration-300 ease-in-out' placeholder='Enter username...' />
                </div>
                <div className='w-full h-[45px] bg-zinc-300 rounded-lg overflow-hidden'>
                    <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email" name="" id="" className='w-full h-full outline-0 p-3 focus:bg-zinc-400 transition-all duration-300 ease-in-out' placeholder='Enter email...' />
                </div>
                <div className='w-full h-[45px] bg-zinc-300 rounded-lg overflow-hidden'>
                    <input 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password" name="" id="" className='w-full h-full outline-0 p-3 focus:bg-zinc-400 transition-all duration-300 ease-in-out' placeholder='Enter password...' />
                </div>
                {
                  preview===null ? (
                  <div className='w-28 h-28 relative'>
                    <img src={previewImage} alt="" className='w-full h-full object-cover absolute pointer-events-none ' />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full h-full cursor-pointer"
                  />
                  </div>
                  ):(
                  <div className="w-28 h-28 overflow-hidden relative">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                    />
                  </div>
                  )
                }
                <div className='w-full'>
                    <button type='submit' className='w-full py-2 rounded-lg text-white font-bold text-xl bg-linear-to-r from-pink-700 to-purple-500 cursor-pointer'>Register</button>
                </div>
            </div>
            <p className="text-center text-sm mt-4">Already have an account?{" "}<span
                onClick={() => navigate("/login")}
                className="text-blue-600 cursor-pointer">
                Login
            </span>
            </p>
        </form>
    </div>
  )
}

export default Login