import React from 'react'
import SectionHeader from '../_components/SectionHeader/page'
// import serviceHeader from '@/public/service/serviceHeader.jpg'
import serviceHeader from '@/public/gallery/red.jpg'
import ourMission from '@/public/about/ourmission.jpg'

import Image from 'next/image'
import OfficeLocation from '../_Main/OfficeLocation/page'

function About () {
  return (
    <section>
      <div>
        <SectionHeader
          serviceHeader={serviceHeader}
          heading='Lets know more about us'
          btnText='Book Now'
          paraText='If you want great service, reach here.'
        />
      </div>
      {/* our mission and vision */}
      <div className='e__section__gap'>
        <div className='e__mission__container'>
          <div>
            <button className='e__tooltip__btn'>About Us</button>
            <h2 className='mt-3 mb-8'>Read our Stuggle Moment</h2>
          </div>

          {/* our journey */}
          <section className=''>
            <div className='e__journey__parent'>
              {/* Our Journey */}
              <div className='e__journey__child__parent '>
                <div className='mt-5'>
                  <Image
                    src={serviceHeader}
                    alt='Our Journey'
                    width={600}
                    height={400}
                    className='rounded-lg shadow-lg aspect-video object-cover object-center'
                  />
                </div>
                <div>
                  <h2 className='my-4'>How can we overcome it</h2>
                  <p>
                    As we move into 2025, our mission is to revolutionize
                    digital communication by enhancing AI-driven translation
                    tools. We strive to empower professionals and businesses
                    with seamless multilingual interactions, breaking barriers
                    and fostering global connectivity.
                    <br /> <br />
                    Our vision is to redefine the way people communicate across
                    languages. We envision a world where AI-driven translations
                    feel natural, enabling businesses and individuals to connect
                    effortlessly, fostering deeper understanding and
                    collaboration across borders.
                  </p>
                </div>
              </div>

              {/* Our Mission & Vision */}
              <div className='e__journey__child__parent '>
                <div>
                  <h2 className='my-4'>Our Mission & Vision for 2025</h2>
                  <p>
                    As we move into 2025, our mission is to revolutionize
                    digital communication by enhancing AI-driven translation
                    tools. We strive to empower professionals and businesses
                    with seamless multilingual interactions, breaking barriers
                    and fostering global connectivity.
                  </p>
                  <p className='mt-4'>
                    Our vision is to redefine the way people communicate across
                    languages. We envision a world where AI-driven translations
                    feel natural, enabling businesses and individuals to connect
                    effortlessly, fostering deeper understanding and
                    collaboration across borders.
                  </p>
                </div>
                <div className='mt-5'>
                  <Image
                    src={ourMission}
                    alt='Our Mission & Vision'
                    width={600}
                    height={400}
                    className='rounded-lg shadow-lg aspect-video object-cover object-center'
                  />
                </div>
              </div>
            </div>

            {/* Founder’s Message */}
            <div className='e__founder__parent '>
              <div className='e__founder__child'>
                <Image
                  src='/founder/neomi.jpg'
                  alt='Founder'
                  width={120}
                  height={120}
                  className='mx-auto rounded-full mb-4'
                />
                <h2 className=' mb-2'>A Message from Our Founder</h2>
                <p>
                  "Our journey started with a vision to break language barriers
                  and connect people across the globe. Every innovation we bring
                  is driven by our commitment to enhancing communication and
                  making the world more accessible. Together, we are shaping the
                  future of AI-powered translation."
                </p>
                <p className=' font-semibold mt-4'>
                  - Neomi Del Rosario, CEO & Founder
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* office location */}
      <OfficeLocation />
    </section>
  )
}

export default About
