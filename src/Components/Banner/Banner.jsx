import React from 'react'

const Banner = ({imageBanner,title}) => {
  return (
    <section>
        <div className='pb-16'>
            <div className='w-full h-[500px] bg-no-repeat bg-center bg-cover flex items-center justify-center' style={{backgroundImage: `url(${imageBanner})`}}>
                <h3 className='text-white lg:text-4xl text-3xl px-6 py-8 rounded-2xl border border-fuchsia-500 font-bold bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 backdrop-blur-2xl'>{title}</h3>
            </div>
        </div>
    </section>
  )
}

export default Banner