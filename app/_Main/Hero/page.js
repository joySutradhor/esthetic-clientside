import Image from 'next/image'
import React from 'react'
import hero from '@/public/Hero/hero.png'
import HeroServiceBtn from '@/app/_components/HeroServicesBtn/page'
import { MdArrowOutward } from 'react-icons/md'

function Hero () {
  return (
    <section>
      <div>
        <div className='e__hero__parent'>
          <div className='e__primary__bg'>
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
                  Transform Your Look{' '}
                  <span className='e__hero__heading__light__text'>
                    {' '}
                    With Expert Services at
                  </span>{' '}
                  Our Luxury Skin Care
                </h1>
                <p className='e__para'>
                The secret to glowing skin? A commitment to self-care, inside and out.
                </p>
              </div>
            </div>
            <div></div>
            <div className='grid justify-center '>
              <div>
                <h2 className='text-center'>
                "Nurture your skin, and it will glow with the radiance of self-care. Because healthy skin is the foundation of true beauty. - Neomi"
                </h2>
              </div>
            </div>
          </div>

          {/* all services here  */}
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
    </section>
  )
}

export default Hero
