import React, { useEffect } from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  const { pathname } = useLocation();
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
      <div className="max-w-[1440px] px-10 py-20 mx-auto">
        <h4 className="text-5xl font-bold text-center text-white mt-10 dark:text-black" data-aos="fade-down">Get In Touch</h4>
        <p className="text-lg text-white text-center mt-3 dark:text-zinc-500" data-aos="fade-up">We're here for you! How can we help? Fill out the form below and we'll get <br /> back to you as soon as possible.</p>
        <div className="flex justify-center items-center mt-10" data-aos="fade-up">
          <div className="p-5 rounded-lg flex flex-wrap gap-7 w-[800px] bg-gradient-to-r from-[#1a0026] via-[#001a26] to-[#001a1a] border border-zinc-500 dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-transparent">
            {/* Left Form */}
            <div className="md:w-[50%] w-full" data-aos="fade-right">
              <h4 className="text-white text-2xl font-bold dark:text-black">Send us a Message</h4>
              <div className="mt-4">
                <label htmlFor="name" className="text-white dark:text-black">Full name</label>
                <input type="text" id="name" className="w-full h-[45px] rounded-md bg-white dark:bg-zinc-300 px-4 mt-2" placeholder="Enter full name..."/>
              </div>
              <div className="my-5">
                <label htmlFor="email" className="text-white dark:text-black">Email</label>
                <input type="email" id="email" className="w-full h-[45px] rounded-md bg-white dark:bg-zinc-300 px-4 mt-2" placeholder="Enter email..."/>
              </div>
              <div>
                <label htmlFor="ms" className="text-white dark:text-black">Message</label>
                <textarea id="ms" className="w-full h-[150px] rounded-md bg-white dark:bg-zinc-300 p-2 mt-2" placeholder="Enter message for helping..."></textarea>
              </div>
              <button className="w-full py-2 rounded-lg text-white bg-blue-500 mt-6">Send Message</button>
            </div>

            {/* Right Contact Info */}
            <div cla sName="lg:w-[49%] w-full bg-zinc-800 rounded-lg p-8 bg-zinc-700" data-aos="fade-left">
              <h4 className="text-2xl font-bold text-white dark:text-black">Contact Information</h4>
              <div className="flex items-center mt-4 text-white dark:text-black gap-3">
                <span className="text-2xl font-bold">
                  <IoLocationOutline />
                </span>
                <div>
                  <p className="text-sky-200 dark:text-black">Address</p>
                  <p className="font-bold text-white text-xl dark:text-black">St 562, Phnom Penh 12151</p>
                </div>
              </div>

              <div className="flex items-center mt-4 text-white dark:text-black gap-3">
                <span className="text-2xl font-bold"><IoCallOutline /></span>
                <div>
                  <p className="text-sky-200 dark:text-black">Phone</p>
                  <p className="font-bold text-white text-xl dark:text-black">+855 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center mt-4 text-white gap-3 dark:text-black">
                <span className="text-2xl font-bold"><MdOutlineMailOutline /></span>
                <div>
                  <p className="text-sky-200 dark:text-black">Email</p>
                  <p className="font-bold text-white text-xl dark:text-black">GamingShop@elearning.com</p>
                </div>
              </div>
              {/* Google Map */}
              <div className="mt-6" data-aos="zoom-in">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4096.090334659841!2d104.8881715880623!3d11.561896121224422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951601e309fbd%3A0x2bbb7a5f2162e106!2sETEC%20Center%20II!5e0!3m2!1skm!2skh!4v1761007877006!5m2!1skm!2skh"
                  style={{
                    border: 0,
                    width: "100%",
                    height: "350px",
                    borderRadius: "10px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
