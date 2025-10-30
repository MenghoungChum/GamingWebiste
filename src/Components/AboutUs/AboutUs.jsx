import React, { useEffect } from 'react'
import AboutImage from "../../assets/AboutImage.jpg"
import MentorImage from '../../assets/MentorPre.jpg'
import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import TypeAnimation from '../TypeAnimation/TypeAnimation'
import ImageKruthom from '../../assets/Kru_Thom.jpg'
import memeber1 from '../../assets/member1.jpg'
import member2 from '../../assets/member2.png'
import teacherImage from '../../assets/Teacher.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
  const {pathname}=useLocation();
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
        <div className='max-w-[1440px] px-10 mx-auto py-20'>
            <div className='w-full min-h-[300px]'>
                <div className='flex flex-col items-center lg:px-20 '>
                  <TypeAnimation/>
                  <p data-aos="zoom-in" className='text-zinc-300 text-xl dark:text-black mt-5 text-center'>Founded by gaming enthusiasts, we've built more than just a shop—we've created a <br /> community where passion meets performance.</p>
                  <div className='mt-5 flex items-center gap-5'>
                    <button data-aos="fade-up"  className='px-6 py-3 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-500  font-medium transition-all duration-300 ease-in-out'>Our story</button>
                    <button data-aos="fade-up"  className='px-6 py-3 rounded-lg bg-zinc-500 font-medium hover:bg-zinc-600 transition-all duration-300 ease-in-out text-white'>Our story</button>
                  </div>
                </div>
            </div>
            <div className='py-20 flex items-center md:mt-20 flex-wrap flex-col-reverse lg:flex-row'>
                <div className='lg:w-1/2 w-full lg:pr-20'>
                  <span data-aos="zoom-in" className='px-7 py-3 rounded-full bg-fuchsia-500/20 text-fuchsia-500 border dark:text-fuchsia-700 border-fuchsia-500'>Our Journey</span>
                  <h5 data-aos="zoom-in" className='md:text-5xl/tight text-4xl font-bold tracking-wide text-white mt-8 dark:text-zinc-500'>Where Gaming <br /><span>Passion</span> Meets <br />Excellence</h5>
                  <p data-aos="zoom-in" className='text-white my-4 dark:text-black'>It all started in a small garage in 2018, where three gaming enthusiasts shared a vision: to create the ultimate destination for gamers who demand the best.</p>
                  <p data-aos="zoom-in" className='text-white mb-4 dark:text-black'>We weren't satisfied with the status quo. We knew gamers deserved better—better products, better service, and a community that truly understands the culture.</p>
                  <p data-aos="zoom-in" className='text-white mb-4 dark:text-black'>Today, we've grown into a trusted name in the gaming industry, serving thousands of gamers worldwide with cutting-edge hardware, expert advice, and unwavering dedication to the gaming community.</p>
                </div>
                <div className='lg:w-1/2 w-full mb-20 lg:mb-0'>
                  <div data-aos="zoom-in" className='lg:w-[80%] w-full rounded-lg overflow-hidden shadow-fuchsia-400 dark:shadow-black shadow-2xl'>
                    <img src={AboutImage} className='w-full h-full object-contain' alt="" />
                  </div>
                </div>
            </div>
            <div className='flex flex-col items-center py-10'>
              <div className='mb-44'>
                <h2 data-aos="zoom-in" className='text-white text-4xl font-bold text-center mb-6 [text-shadow:0_0_10px_#ff00ff,0_0_20px_#ff00ff,0_0_30px_#ff00ff]'>Principle</h2>
                <div className='w-[300px] h-[300px]'>
                  <div data-aos="flip-left" className='w-full h-[350px] rounded-xl overflow-hidden border border-zinc-500'>
                    <img src={ImageKruthom} className='w-full h-full object-cover' alt="" />
                  </div>
                  <div>
                    <h3 data-aos="fade-down" data-aos-delay='100' className='text-white mt-3 dark:text-black'>Name</h3>
                    <p data-aos="fade-down" data-aos-delay='200' className='text-white my-2 dark:text-black'>Specitalize</p>
                    <div className='flex items-center gap-4 '>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white dark:text-black  text-3xl cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaFacebook /></span>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white dark:text-black  text-3xl cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaTelegram /></span>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white dark:text-black  text-3xl cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaGithub /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-44'>
                <h2 data-aos="zoom-in" className='text-white text-4xl font-bold text-center mb-6 [text-shadow:0_0_10px_#ff00ff,0_0_20px_#ff00ff,0_0_30px_#ff00ff]'>Instructor</h2>
                <div className='w-[300px] h-[300px]'>
                  <div data-aos="flip-left" data-aos-delay='200' className='w-full h-[350px] rounded-xl overflow-hidden border border-zinc-500'>
                    <img src={teacherImage} className='w-full h-full object-cover' alt="" />
                  </div>
                  <div>
                    <h3 data-aos="fade-down" data-aos-delay='100' className='text-white mt-3 dark:text-black text-lg'>Name: HOK VANTHIV</h3>
                    <p data-aos="fade-down" data-aos-delay='200' className='text-white my-2 dark:text-black text-lg'>Specialize : Web-developer</p>
                    <div className='flex items-center gap-4'>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white text-3xl dark:text-black  cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaFacebook /></span>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white text-3xl dark:text-black  cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaTelegram /></span>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white text-3xl dark:text-black  cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaGithub /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-around mb-20 w-full flex-wrap'>
                <div className='mb-48 md:mb-0'>
                <h2 data-aos="zoom-in" className='text-white text-4xl font-bold text-center mb-6 [text-shadow:0_0_10px_#ff00ff,0_0_20px_#ff00ff,0_0_30px_#ff00ff]'>Project developer</h2>
                <div className='w-[300px] h-[300px]'>
                  <div data-aos="flip-left" data-aos-delay='300' className='w-full h-[350px] rounded-xl overflow-hidden border border-zinc-500'>
                    <img src={memeber1} className='w-full h-full object-cover' alt="" />
                  </div>
                  <div>
                    <h3 data-aos="fade-down" data-aos-delay='100' className='text-white mt-3 dark:text-black text-lg'>Name: CHUM MENGHOUNG</h3>
                    <p data-aos="fade-down" data-aos-delay='200' className='text-white my-2 dark:text-black text-lg'>Specialize: Front-end</p>
                    <div className='flex items-center gap-4'>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white text-3xl dark:text-black  cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaFacebook /></span>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white text-3xl dark:text-black  cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaTelegram /></span>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white text-3xl dark:text-black  cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaGithub /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 data-aos="zoom-in" className='text-white text-4xl font-bold text-center mb-6 [text-shadow:0_0_10px_#ff00ff,0_0_20px_#ff00ff,0_0_30px_#ff00ff]'>Project developer</h2>
                <div className='w-[300px] h-[300px]'>
                  <div data-aos="flip-left" data-aos-delay='300' className='w-full h-[350px] rounded-xl overflow-hidden border border-zinc-500'>
                    <img src={member2} className='w-full h-full object-cover' alt="" />
                  </div>
                  <div>
                    <h3 data-aos="fade-down" data-aos-delay='100' className='text-white mt-3 dark:text-black text-lg'>Name: LIN DALEN</h3>
                    <p data-aos="fade-down" data-aos-delay='200' className='text-white my-2 dark:text-black text-lg'>Specialize: Front-end</p>
                    <div className='flex items-center gap-4'>
                      <a data-aos="fade-up" data-aos-delay='300' href='https://www.facebook.com/share/17YYLDHLNc/' target='_blank' className='text-white dark:text-black text-3xl cursor-pointer hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaFacebook /></a>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white dark:text-black text-3xl cursor-pointer  hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaTelegram /></span>
                      <span data-aos="fade-up" data-aos-delay='300' className='text-white dark:text-black text-3xl cursor-pointer  hover:text-zinc-300 transition-all duration-300 ease-in-out'><FaGithub /></span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs