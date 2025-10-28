import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,
        offset: 200,
    })
    },[]);
  return (
    <footer data-aos="fade-up" className="relative bg-gradient-to-r from-[#1a0026] via-[#001a26] to-[#001a1a] text-gray-300 px-8 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pink-500 text-white font-bold text-xl rounded-xl px-3 py-1">GX</div>
            <h2 className="text-2xl font-semibold text-white">GameXtreme</h2>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">Your ultimate destination for premium gaming gear, accessories, and the latest titles. Level up your gaming experience with us.</p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-3 rounded-lg bg-white/10 hover:bg-pink-500 hover:text-white transition-all"><FaFacebookF /></a>
            <a href="#" className="p-3 rounded-lg bg-white/10 hover:bg-pink-500 hover:text-white transition-all"> <FaTwitter /></a>
            <a href="#" className="p-3 rounded-lg bg-white/10 hover:bg-pink-500 hover:text-white transition-all" ><FaInstagram /></a>
            <a href="#" className="p-3 rounded-lg bg-white/10 hover:bg-pink-500 hover:text-white transition-all"><FaYoutube /></a>
            <a href="#" className="p-3 rounded-lg bg-white/10 hover:bg-pink-500 hover:text-white transition-all"><FaTwitch /></a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-pink-400">Gaming PCs</a></li>
            <li><a href="#" className="hover:text-pink-400">Consoles</a></li>
            <li><a href="#" className="hover:text-pink-400">Accessories</a></li>
            <li><a href="#" className="hover:text-pink-400">Deals</a></li>
            <li><a href="#" className="hover:text-pink-400">New Arrivals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-pink-400">Help Center</a></li>
            <li><a href="#" className="hover:text-pink-400">Shipping Info</a></li>
            <li><a href="#" className="hover:text-pink-400">Returns</a></li>
            <li><a href="#" className="hover:text-pink-400">Warranty</a></li>
            <li><a href="#" className="hover:text-pink-400">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-pink-400">About Us</a></li>
            <li><a href="#" className="hover:text-pink-400">Careers</a></li>
            <li><a href="#" className="hover:text-pink-400">Blog</a></li>
            <li><a href="#" className="hover:text-pink-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-400">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
        <p>© 2025 GameXtreme. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-pink-400">Privacy</a>
          <a href="#" className="hover:text-pink-400">Terms</a>
          <a href="#" className="hover:text-pink-400">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
