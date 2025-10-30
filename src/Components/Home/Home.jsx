import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Reviews from '../Review/Reviews'
import Category from '../Categories/Category'
import Slide from '../Slide/Slide'
import ProdudFeature from '../ProductFeature/ProdudFeature'
import InforSection from '../InforSection/InforSection'
import CompleteSetUp from '../CompletSetUp/CompleteSetUp'
import LatestNew from '../Lastest/LatestNew'
import Live from '../Live/Live'
import Testimonial from '../Testimonail/Testimonial'
import Contact from '../Contact/Contact'
import FirstVisitAlert from '../FirstAlert/FirstAlert'
import Discount from '../Discount/Discount'
import { FaRegMessage } from 'react-icons/fa6'
  const Home = () => {

  return (
    <div>
        <FirstVisitAlert/>
        <Hero/>
        <Reviews/>
        <Category/>
        <Slide/>
        <ProdudFeature/>
        <Discount/>
        <InforSection/>
        <CompleteSetUp/>
        <LatestNew/>
        <Live/>
        <Testimonial/>
        <Contact/>
        <p className='fixed bottom-0 right-0'><FaRegMessage /></p>
    </div>
  )
}

export default Home