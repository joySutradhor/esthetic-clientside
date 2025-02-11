import React from 'react'
import Hero from './Hero/page'
import AboutUs from './AboutUs/page'
import Cta from './CTA/page'
import OurServices from './OurServices/page'
import Review from './Review/page'
import Faq from './Faq/page'
import OfficeLocation from './OfficeLocation/page'
import MobileNav from './MobilieNav/page'

function Main () {
  return (
    <>
      <section>
        <Hero />
        <AboutUs />
        <Cta />
        <OurServices />
        <Review />
        <Cta />
        <Faq />
        <OfficeLocation />
      </section>
      <MobileNav />
    </>
  )
}

export default Main
