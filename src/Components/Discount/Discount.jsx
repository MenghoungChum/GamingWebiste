import React from 'react'
import DiscountBanner from '../../assets/DiscountBanner.jpg'
const Discount = () => {
  return (
    <section>
        <div className='max-w-[1440px] px-10 lg:py-20 mx-auto'>
            <h3 data-aos="zoom-in" className='items-center  font-bold lg:text-6xl text-4xl font-mono my-6 bg-clip-text text-transparent tracking-tighter bg-linear-to-r from-sky-500 to-fuchsia-500 w-fit mx-auto'>Discount Event</h3>
            <p className='text-center mb-20 text-white dark:text-black'>You can get discount when if you buy our products now</p>
            <div data-aos="zoom-in" className="bg-gradient-to-r dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-transparent from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden w-full shadow-[0_0_10px_oklch(78.9%_0.154_211.53)]">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left space-y-5">
                    <span className="bg-orange-700/80 text-white px-4 py-1.5 rounded-full text-sm font-semibold">Limited Time Offer</span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-black">Summer Gaming Sale</h2>

                    <p className="text-gray-300 max-w-md mx-auto md:mx-0 dark:text-black">Get up to <span className="font-semibold text-orange-400">50% off</span> on selected games, consoles, and accessories. Don&apos;t miss out on these incredible deals!</p>

                    <div className="flex justify-center md:justify-start gap-4 pt-2">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition">
                        Shop Sale <span>→</span>
                    </button>
                    <button className="text-white/80 hover:text-white font-semibold transition dark:text-black">Learn More</button>
                    </div>
                </div>
                {/* Right Image */}
                <div className="relative flex-1 max-w-md h-[350px]">
                    <img
                    src={DiscountBanner}
                    alt="Gaming Sale"
                    className="rounded-2xl object-cover w-full h-full shadow-[0_0_10px_oklch(78.9%_0.154_211.53)]"
                    />
                    <div className="shadow-[0_0_10px_oklch(78.9%_0.154_211.53)] font-bold absolute -bottom-4 -right-4 bg-orange-500 text-white text-center px-6 py-3 rounded-2xl font-old text-lg"><span className='text-3xl'>15%</span> <br /> OFF</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount