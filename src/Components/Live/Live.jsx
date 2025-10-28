import React, { useState } from 'react'
import { HiOutlineUsers } from 'react-icons/hi2'
import Image1 from '../../assets/Live1.jpg'
import Image2 from '../../assets/Live2.jpg'
import Image3 from '../../assets/Live3.jpg'
import Image4 from '../../assets/Live4.jpg'
import { BsChat } from 'react-icons/bs'
import { CiPlay1 } from 'react-icons/ci'

const Live = () => {
    const [selectedVideo, setSelectedVideo] = useState(null); // track clicked card

    return (
        <section>
            <div className='max-w-[1440px] px-10 lg:py-20 mx-auto'>
                <h3 data-aos="zoom-in" className='flex items-center gap-3 font-bold lg:text-6xl text-4xl font-mono my-16 bg-clip-text text-transparent tracking-tighter bg-linear-to-r from-sky-500 to-fuchsia-500 w-fit'>
                    <HiOutlineUsers className='text-fuchsia-500' />
                    <span>Live Community</span>
                </h3>
                <div className='flex md:gap-6 gap-8 flex-wrap'>
                    {liveData.map(item => (
                        <div 
                            data-aos="zoom-in-up" 
                            data-aos-delay={item.id*200} 
                            key={item.id} 
                            className='lg:w-[23%] dark:border-green-500 md:w-[31%] w-full lg:h-[400px] group cursor-pointer border border-white rounded-2xl pt-4 hover:border-green-500 hover:shadow-[0_0_10px_#00ff00] transition-all duration-300 ease-in-out'
                        >
                            <div className='w-full h-[60%] relative'>
                                <img src={item.image} className='w-full h-full object-cover' alt="" />
                                <div className='w-full flex justify-between items-center absolute top-3 left-3 px-7'>
                                    <span className='px-5 py-1 rounded-full text-white liveAnimation bg-red-500 font-bold flex items-center'>Live</span>
                                    <span className='px-3 py-1 rounded-full text-green-500 flex items-center text-sm gap-1 bg-black font-mono font-bold'>
                                        <HiOutlineUsers /> {item.watcher}
                                    </span>
                                </div>
                            </div>
                            <div className='p-5'>
                                <h3 className='text-white dark:text-zinc-500 font-bold text-xl dark:group-hover:text-black group-hover:text-green-500 transition-all duration-300 ease-in-out'>{item.tittle}</h3>
                                <p className='text-base my-3 text-sky-200 dark:text-zinc-700'>{item.des}</p>
                                <div className='flex items-center gap-3'>
                                    <button 
                                        onClick={() => setSelectedVideo(item)} // set clicked video
                                        className='flex-1 rounded-lg py-1 border text-sm justify-center dark:bg-white dark:text-zinc-500 dark:hover:bg-zinc-400 bg-green-400/20 border-green-500 text-green-500 flex items-center hover:text-white hover:bg-green-500 transition-all duration-300 ease-in-out'
                                    >
                                        <CiPlay1 /> Watch
                                    </button>
                                    <span className='p-2 rounded-xl flex items-center justify-center border border-green-500 text-green-500'>
                                        <BsChat />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Popup */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="rounded-lg shadow-lg w-[90%] md:w-[700px] relative z-30">
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-2 -right-8 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out text-white dark:text-white text-xl"
                        >
                            ✕
                        </button>
                        <div className="aspect-video">
                            {selectedVideo.iframeVideo}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

const liveData = [
    {
        id: 1,
        image: Image1,
        watcher: '12.5K',
        tittle: 'ProGamer_X',
        des: 'Cyber Warriors',
        iframeVideo:<iframe 
                        className="w-full h-full rounded-lg "
                        width="560" height="315" 
                        src="https://www.youtube.com/embed/dtogqRICwYc?si=3QDYjPqPCcqW6gBa&amp;start=100" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
    },
    {
        id: 2,
        image: Image2,
        watcher: '8.3K',
        tittle: 'QueenOfGames',
        des: 'Galaxy Conquest',
        iframeVideo: <iframe 
                        className="w-full h-full rounded-lg "
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/ee2bOnBX2Yc?si=c0C7-geVXPr1W_Rd&amp;start=25" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
    },
    {
        id: 3,
        image: Image3,
        watcher: '15.2K',
        tittle: 'NinjaLegend',
        des: 'Street Legends',
        iframeVideo: <iframe 
                        className="w-full h-full rounded-lg "
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/Z6DwUE9I21k?si=MzplKaBwi4d7-FEi&amp;start=25" 
                        title="YouTube video player" f
                        rameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    ></iframe>
    },
    {
        id: 4,
        image: Image4,
        watcher: '6.7K',
        tittle: 'MysticMage',
        des: 'Mystic Realms',
        iframeVideo: <iframe 
                        className="w-full h-full rounded-lg "
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/i_H50kTeNXY?si=iPkY8F0VzcDnrZvu&amp;start=25" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                    ></iframe>
    },
]

export default Live