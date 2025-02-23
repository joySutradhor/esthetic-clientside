import React from 'react'
import serviceHero from '@/public/gallery/img6.webp'

import SectionHeader from '../_components/SectionHeader/page'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { FaUserMd, FaSpa } from 'react-icons/fa'
import AllService from '../_components/AllService/page'
import Cta from '../_Main/CTA/page'
import Faq from '../_Main/Faq/page'
import OfficeLocation from '../_Main/OfficeLocation/page'
import Review from '../_Main/Review/page'

export const metadata = {
  title: 'Services | Esthetic N. Del Rosario | Premium Skin Care in Brandon, Florida',
  description:
    'Explore the premium skin care services offered by Esthetic N. Del Rosario, including mesotherapy, Meso Botox, facials, and other rejuvenating treatments for healthier, youthful skin.',
  keywords:
    'Esthetic N. Del Rosario, skin care services, mesotherapy, Meso Botox, facial treatments, anti-aging, skin rejuvenation, beauty services, Brandon Florida, skin care, hydration, skin health',
  openGraph: {
    title: 'Services | Esthetic N. Del Rosario | Premium Skin Care in Brandon, Florida',
    description:
      'Discover a range of advanced skin care services at Esthetic N. Del Rosario. From mesotherapy to Meso Botox, we offer non-invasive treatments for glowing, youthful skin.',
    images: [
      {
        url: 'https://i.ibb.co/cK6DX7jJ/ourmission.jpg', // Image for social sharing
        width: 1200,
        height: 630,
        alt: 'Esthetic N. Del Rosario - Skin Care Services'
      }
    ],
    url: 'https://www.estheticndelrosario.com/services',
    siteName: 'Esthetic N. Del Rosario',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@estheticnrosario',
    title: 'Services | Esthetic N. Del Rosario | Premium Skin Care in Brandon, Florida',
    description:
      'Explore a variety of premium skin care treatments including mesotherapy and Meso Botox to rejuvenate and enhance your natural beauty.',
    images: ['https://i.ibb.co/My2ydCTV/ourmission.jpg'] // Image for Twitter sharing
  }
};


function Service () {
  const customerCommitment = [
    {
      title: 'Atención Personalizada y Asesoramiento Experto',
      description:
        'Ofrecemos soluciones de cuidado de la piel personalizadas respaldadas por dermatólogos y esteticistas expertos, asegurando los mejores tratamientos para las necesidades únicas de tu piel.',
      icon: <FaUserMd className='text-4xl text-pink-500' />
    },
    {
      title: 'Transparencia y Confianza',
      description:
        'Creemos en consultas honestas, listas claras de ingredientes y tratamientos orientados a resultados sin sorpresas ocultas.',
      icon: <VscWorkspaceTrusted className='text-4xl text-blue-500' />
    },
    {
      title: 'Lujo y Cuidado',
      description:
        'Disfruta de una experiencia relajante y tipo spa con soluciones de cuidado de la piel de alta gama diseñadas para nutrir, sanar y rejuvenecer tu piel.',
      icon: <FaSpa className='text-4xl text-green-500' />
    }
  ]

  return (
    <section>
      <SectionHeader
        serviceHeader={serviceHero}
        heading='El mejor servicio de cuidado de la piel en Florida'
        btnText='Reserva ahora'
        paraText='Tratamientos personalizados para una piel radiante y saludable, respaldados por expertos en dermatología y estética'
      />

      {/* Commitment to Customer */}
      <div className='e__section__gap'>
        <div className='e__service__container'>
          <button className='e__tooltip__btn'>Lo que ofrecemos</button>
          <h2 className='mt-3 mb-8'>Nuestro compromiso con las clientes</h2>

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
            <button className='e__tooltip__btn'>Lista de servicios</button>
            <h2 className='mt-3 mb-8'>Nuestros servicios disponibles para el Paciente</h2>
          </div>
          <div>
            <AllService />
          </div>
        </div>
      </div>

      {/* cta section */}
      <Review />
      <Cta />
      <Faq />
      <OfficeLocation />
    </section>
  )
}

export default Service
