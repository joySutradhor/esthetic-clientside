import Image from 'next/image'
import React from 'react'
import hero from '@/public/Hero/hero.png'
import HeroServiceBtn from '@/app/_components/HeroServicesBtn/page'
import { MdArrowOutward } from 'react-icons/md'
// import man from '@/public/Hero/man.jpg'

function Hero () {
  return (
    <section>
      <div>
        <div className='e__hero__parent e__primary__bg'>
          <div className=''>
            <div>
              <Image
                src={hero}
                className='e__hero__main__image'
                alt='hero img'
              />
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='e__hero__contentArea__parent'>
            <div className='e__hero__content'>
              <div>
                <h1 className='e__hero__heading__text'>
                  Transforma tu apariencia{' '}
                  <span className='e__hero__heading__light__text'>
                    {' '}
                    con servicios expertos en
                  </span>{' '}
                  nuestro lujoso cuidado de la piel
                </h1>

                <p className='e__para'>
                El secreto para una piel radiante? Un compromiso con el cuidado personal, por dentro y por fuera.
                </p>
              </div>
            </div>
            <div></div>
            <div className='grid justify-center '>
              <div>
                <h4 className='e__quote'>
                  "Cuida tu piel y brillará con la radiancia del autocuidado. Porque una piel saludable es la base de la verdadera belleza. <span className='text-xl font-bold'> - Neomi</span>"
                </h4>
              </div>
            </div>
          </div>

          {/* all services here  */}
          <div className='hidden lg:block'>
            <div className='e__hero__content__child'>
              <HeroServiceBtn
                btnText='Peel'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Peeling'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Botox'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Bb Botox'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Dermapen '
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                className=' !bg-black !text-white animate-pulse'
                btnText='DERMAPLENING '
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Y mucho más'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Meso botox'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Ácido hialuronico'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Limpieza facial'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Plasma Rico en plaquetas'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Mesoterapia de vitaminas '
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Rejuvenecimiento facial'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
              <HeroServiceBtn
                btnText='Hidratación profunda'
                Icon={MdArrowOutward}
                serviceLink='/'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
