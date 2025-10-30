

import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import previewImage from '../../assets/Preview.png'
import { FaLock, FaLockOpen, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Background from '../../assets/BackloginRegister.gif'

const Login = () => {
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("")
    const [image,setImage]=useState(null);
     const [preview, setPreview] = useState(null);
    const [showPassword,setShowPassword]=useState(false)
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
  setUsername("")
  setEmail("")
  setPassword("")
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
    <div className={`flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center px-8`} style={{backgroundImage: `url(${Background})`}}>
        <div className='flex items-center justify-center w-full'>
          <form 
        onSubmit={handleSubmit}
        className='md:w-[500px] w-full bg-white/10 backdrop-blur-2xl rounded-lg p-10 mt-20'>
            <h3 className='text-3xl text-white w-full text-center mb-4 font-bold'>Register</h3>
            <div className='flex flex-col gap-2 md:gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-lg font-bold'>First Name</label>
                  <div className='w-full h-[45px] rounded-full overflow-hidden border border-white relative'>
                    <input 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    type="text" className='w-full h-full outline-0 p-3 transition-all duration-300 ease-in-out text-white' placeholder='Jonh Cina' />
                    <span className='text-xl absolute right-4 top-3 text-white cursor-pointer'><FaUserAlt /></span>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-lg font-bold'>Email</label>
                  <div className='w-full h-[45px] rounded-full overflow-hidden border border-white relative'>
                    <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email" className='w-full h-full outline-0 p-3 transition-all duration-300 ease-in-out text-white' placeholder='Jonh@gmail.com' />
                    <span className='text-xl absolute right-4 top-3 text-white cursor-pointer'><MdEmail /></span>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-lg font-bold'>Password</label>
                  <div className='w-full h-[45px] rounded-full overflow-hidden border border-white relative'>
                    <input 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type={ `${showPassword ? 'text': 'password'}`} className='w-full h-full outline-0 p-3 transition-all duration-300 ease-in-out text-white' placeholder='Enter password...' />
                    <span 
                    onClick={()=>setShowPassword(!showPassword)}
                    className='text-xl absolute right-4 top-3 text-white cursor-pointer'>{showPassword ?<FaLockOpen />: <FaLock /> }</span>
                  </div>
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
                    <button type='submit' className='w-full py-2 rounded-full text-white font-bold text-xl bg-linear-to-r from-pink-700 to-purple-500 cursor-pointer'>Register</button>
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
    </div>
  )
}

export default Login