import React from 'react'
import serviceHero from "@/public/gallery/img6.webp"

import SectionHeader from '../_components/SectionHeader/page'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { FaUserMd, FaSpa } from 'react-icons/fa'
import AllService from '../_components/AllService/page'
import Cta from '../_Main/CTA/page'
import Faq from '../_Main/Faq/page'
import OfficeLocation from '../_Main/OfficeLocation/page'
import Review from '../_Main/Review/page'

function Service () {
  const customerCommitment = [
    {
      title: 'Personalized Care & Expert Guidance',
      description:
        'We provide tailored skincare solutions backed by expert dermatologists and estheticians, ensuring the best treatments for your unique skin needs.',
      icon: <FaUserMd className='text-4xl text-pink-500' />
    },
    {
      title: 'Transparency & Trust',
      description:
        'We believe in honest consultations, clear ingredient lists, and results-driven treatments with no hidden surprises.',
      icon: <VscWorkspaceTrusted className='text-4xl text-blue-500' />
    },
    {
      title: 'Luxury Meets Care',
      description:
        'Enjoy a relaxing, spa-like experience with high-end skincare solutions designed to nourish, heal, and rejuvenate your skin.',
      icon: <FaSpa className='text-4xl text-green-500' />
    }
  ]

  return (
    <section>
      <SectionHeader
        serviceHeader={serviceHero}
        heading='Best Skin Care Service in Florida'
        btnText='Book Now'
        paraText='If you want great service, reach here.'
      />

      {/* Commitment to Customer */}
      <div className='e__section__gap'>
        <div className='e__service__container'>
          <button className='e__tooltip__btn'>Commitment</button>
          <h2 className='mt-3 mb-8'>Our Commitment to Customers</h2>

          {/* Commitment Cards */}
          <div className='e__commitment__parent'>
            {customerCommitment.map((commit, i) => (
              <div key={i} className='e__commitment__child'>
                <div className='mb-4'>{commit.icon}</div>
                <h3 className=''>{commit.title}</h3>
                <p className='mt-2'>{commit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* all services  */}
      <div className='e__section__gap'>
        <div className='e__service__container'>
          <div>
            <button className='e__tooltip__btn'>Service List</button>
            <h2 className='mt-3 mb-8'>Our available services for Customers</h2>
          </div>
          <div>
            <AllService/>
          </div>
        </div>
      </div>

      {/* cta section */}
      <Review/>
      <Cta/>
      <Faq/>
      <OfficeLocation/>
      
    </section>
  )
}

export default Service
