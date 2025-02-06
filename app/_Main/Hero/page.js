import Image from 'next/image'
import React from 'react'
import hero from '@/public/Hero/hero.png'
// import man from '@/public/Hero/man.jpg'

function Hero () {
  return (
    <section>
      {/* bg-gradient-to-r from-red-300 via-pink-200 to-red-300 */}
      <div>
        <div className='h-screen w-full flex justify-center items-center overflow-hidden'>
          <div className=' bg-gradient-to-r from-red-400 via-pink-300 to-red-400'>
            <div>
              <Image
                src={hero}
                className='w-full object-cover object-center brightness-75'
                alt='hero img'
              />
            </div>
          </div>
        </div>

        <div className=' w-full'>
          <div className='absolute top-[30vh] left-[0] mx-20 grid grid-cols-3'>
            <div>
              <h1 className='e__hero__heading__text'>
                Transform Your Look <span className='e__hero__heading__light__text'> With Expert Services at</span> Our
                Luxury Skin Care
              </h1>
              <p className='text-white/80 font-normal'>
                Include popular icons in your React projects easily with
                react-icons
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
