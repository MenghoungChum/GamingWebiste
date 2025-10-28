import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { GoGift, GoTrophy } from 'react-icons/go'
import { GrTrophy } from 'react-icons/gr'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { PiLightningBold } from 'react-icons/pi'

const SeasonBattle = () => {
  return (
    <section>
        <div className='max-w-[1440px] mx-auto px-10 py-20 text-center'>
          <div className='mb-10'>
            <div className='flex items-center gap-3 tracking-tight text-white justify-center text-5xl font-bold'>
              <p data-aos="zoom-in"  className='[text-shadow:0_0_10px_#ff00ff,0_0_20px_#ff00ff,0_0_30px_#ff00ff] text-fuchsia-500 dark:[text-shadow:0_0_10px_#0000009e,0_0_20px_#0000009e,0_0_30px_#0000009e] dark:text-white'>Season 5</p>
              <p data-aos="zoom-in" className='[text-shadow:0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_30px_#00ffff] text-cyan-600 dark:text-black'>Battle Pass</p>
            </div>
            <p data-aos='zoom-in' className='text-sky-200 mt-4 text-lg dark:text-black'>Unlock exclusive rewards as you level up</p>
          </div>
            <div data-aos="zoom-in-down" className='w-full md:h-[430px] border rounded-2xl bannerAnimation dark:backdrop-blur-sm backdrop-blur-2xl p-8'>
                <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-base text-zinc-500'>Current Level</p>
                      <span className='text-4xl font-bold [text-shadow:0_0_10px_#74ffff,0_0_30px_#74ffff,0_0_40px_#74ffff] text-sky-500'>12</span>
                    </div>
                    <div>
                      <p className='text-base text-zinc-500'>Next Reward</p>
                      <span className='text-3xl text-fuchsia-500 font-bold'>Level 15</span>
                    </div>
                </div>
                <div className='w-full h-[18px] bg-zinc-800 rounded-full relative flex items-center my-10'>
                  <div className='w-[60%] h-full bgAnimation rounded-l-2xl'></div>
                  <div className='w-6 h-6 rounded-full bg-fuchsia-500'></div>
                </div>
                <div className='md:flex hidden justify-evenly'>
                  {
                    level.map(item=>(
                      <div key={item.id} className='flex flex-col items-center'>
                        <span className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl  ${item.id<=3 ?'shadow-[0_0_10px_#00ccff] text-teal-800 bg-cyan-500': 'bg-black text-slate-500'}`}>{item.icon}</span>
                        <p className='text-white font-medium'>{item.levels}</p>
                        <p className='text-zinc-500'>{item.rank}</p>
                      </div>
                    ))
                  }
                </div>
                <div className='flex justify-center'>
                  <button className='flex items-center px-4 py-2 rounded-lg text-white bgAnimation gap-3 md:mt-12'><span><GrTrophy /></span><span>Update Battle pass</span></button>
                </div>
            </div>
        </div>
    </section>
  )
}

const level=[
  {
    id:1,
    levels: 'Level 1',
    rank: 'Neon Skin Pack',
    icon: <FaRegStar />
  },
  {
    id:2,
    levels: 'Level 5',
    rank: 'Epic Emote',
    icon: <PiLightningBold />
  },
  {
    id:3,
    levels: 'Level 10',
    rank: 'Legendary Weapon',
    icon: <HiOutlineTrophy />
  },
  {
    id:4,
    levels: 'Level 15',
    rank: 'Mystery Box',
    icon: <GoGift />
  },
  {
    id:5,
    levels: 'Level 20',
    rank: 'Ultimate Bundle',
    icon: <GoTrophy />
  }
]

export default SeasonBattle