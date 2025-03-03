import React from 'react'
import SectionHeader from '../_components/SectionHeader/page'
// import serviceHeader from '@/public/service/serviceHeader.jpg'
import serviceHeader from '@/public/gallery/red.jpg'
import ourMission from '@/public/about/ourmission.jpg'

import Image from 'next/image'
import OfficeLocation from '../_Main/OfficeLocation/page'

export const metadata = {
  title: 'About estheticsbynoemi | Premium Skin Care in Brandon, Florida',
  description:
    'Explore estheticsbynoemi in Brandon, FL. Offering premium skin care services like mesotherapy and Meso Botox to rejuvenate, hydrate, and enhance your natural beauty.',
  keywords:
    'estheticsbynoemi, skin care, mesotherapy, Meso Botox, anti-aging, facial treatments, beauty services, Brandon Florida, rejuvenation, skin hydration, natural beauty',
  openGraph: {
    title:
      'About estheticsbynoemi | Premium Skin Care Services | Brandon, Florida',
    description:
      'Discover estheticsbynoemi’s commitment to providing rejuvenating and non-invasive skin care treatments in Brandon, FL.',
    images: [
      {
        url: 'https://i.ibb.co/cK6DX7jJ/ourmission.jpg', // ✅ Correct format
        width: 1200,
        height: 630,
        alt: 'estheticsbynoemi Premium Skin Care in Brandon, Florida'
      }
    ],
    url: 'https://www.estheticndelrosario.com/about',
    siteName: 'estheticsbynoemi',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@estheticnrosario',
    title: 'About estheticsbynoemi | Premium Skin Care in Brandon, Florida',
    description:
      'Learn more about estheticsbynoemi and our premium skin care services in Brandon, FL.',
    images: ['https://i.ibb.co/My2ydCTV/ourmission.jpg'] // ✅ Correct format
  }
}

function About () {
  return (
    <section>
      <div>
        <SectionHeader
          serviceHeader={serviceHeader}
          heading='Vamos a saber más sobre nosotras'
          btnText='Reserva ahora'
          paraText='Conoce nuestra misión y visión, y descubre cómo transformamos el cuidado de la piel para tu bienestar.'
        />
      </div>
      {/* our mission and vision */}
      <div className='e__section__gap'>
        <div className='e__mission__container'>
          <div>
            <button className='e__tooltip__btn'>Sobre nosotras</button>
            <h2 className='mt-3 mb-8'>Lea nuestro momento de lucha</h2>
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
                  <h2 className='my-4'>
                    Cómo podemos mejorar tu cuidado de la piel
                  </h2>
                  <p>
                    Al entrar en 2025, nuestra misión es revolucionar el cuidado
                    de la piel ofreciendo tratamientos personalizados y
                    efectivos que priorizan la salud y belleza de tu piel. Nos
                    esforzamos por empoderar a las personas con servicios
                    profesionales de cuidado de la piel de alta calidad que
                    aborden necesidades específicas, promoviendo la
                    autoconfianza y el bienestar.
                    <br /> <br />
                    Nuestra visión es redefinir la manera en que las personas
                    cuidan su piel. Imaginamos un mundo donde los tratamientos
                    para la piel no solo sean efectivos, sino que también se
                    sientan lujosos y adaptados a las necesidades únicas de cada
                    persona, permitiendo que los individuos logren una piel más
                    saludable y radiante, y abracen su belleza natural.
                  </p>
                </div>
              </div>

              {/* Our Mission & Vision */}
              <div className='e__journey__child__parent '>
                <div>
                  <h2 className='my-4'>Nuestra Misión y Visión para 2025</h2>
                  <p>
                    Nuestra misión es ofrecer servicios de cuidado de la piel
                    premium y personalizados que no solo mejoren la apariencia
                    de tu piel, sino que también promuevan su salud a largo
                    plazo. Al mirar hacia el futuro, nos comprometemos a
                    utilizar técnicas avanzadas y productos de alta calidad para
                    obtener resultados excepcionales, asegurando que cada
                    cliente se sienta confiado y radiante con su propia piel.
                  </p>
                  <p className='mt-4'>
                    De cara al futuro, nuestra visión es convertirnos en un
                    destino líder en cuidado de la piel, ofreciendo tratamientos
                    adaptados a las necesidades únicas de cada persona.
                    Aspiramos a crear un ambiente en el que cada individuo pueda
                    experimentar un cuidado de la piel transformador,
                    construyendo confianza a través de resultados sobresalientes
                    y un compromiso con la belleza holística.
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
                  alt='llc message'
                  width={120}
                  height={120}
                  className='mx-auto rounded-full mb-4'
                />
                <h2 className='mb-2'>Un mensaje de nuestra fundadora</h2>
                <p>
                  "Nuestra misión es ofrecer cuidados de la piel excepcionales,
                  ayudando a cada persona a sentirse segura y radiante. Nos
                  dedicamos a mejorar la salud y belleza de tu piel con
                  tratamientos personalizados y productos de calidad."
                </p>
                <p className='font-semibold mt-4'>- Noemi Del Rosario, LLC</p>
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
