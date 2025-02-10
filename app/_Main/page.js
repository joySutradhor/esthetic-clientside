import React from 'react'
import Hero from './Hero/page'
import AboutUs from './AboutUs/page'
import Cta from './CTA/page'
import OurServices from './OurServices/page'


function Main() {
  return (
    <section>
      <Hero/>
      <AboutUs/>
      <Cta/>
      <OurServices/>
    </section>
  )
}

export default Main