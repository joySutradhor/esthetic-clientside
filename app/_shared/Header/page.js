import React from 'react'
import NavButton from '@/app/_components/NavButton/page'
import { IoIosHome } from 'react-icons/io'
import { IoBriefcaseSharp } from 'react-icons/io5'
import { MdOutlinePhotoLibrary } from 'react-icons/md'
import { MdPeopleAlt } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiWhatsapp } from 'react-icons/si'

function Header () {
  return (
    <header className='e__nav__parent'>
      <nav className='header__footer__main__gapping'>
        <div className='e__nav__wrapper'>
          <div>
            <ul className='e__nav__item__parent group'>
              <NavButton
                className=' !bg-black !text-white'
                navButtonText='Home'
                navButtonLink='/home'
                icon={IoIosHome}
              />
              <NavButton
                navButtonText='About Us'
                navButtonLink='/about'
                icon={MdPeopleAlt}
              />
              <NavButton
                navButtonText='Services'
                navButtonLink='/services'
                icon={IoBriefcaseSharp}
              />
              <NavButton
                navButtonText='Gallery'
                navButtonLink='/gallery'
                icon={MdOutlinePhotoLibrary}
              />
            </ul>
          </div>
          <div className='flex gap-5 items-center'>
            <div>
              <p className='flex items-center gap-1 e__para'>
                {' '}
                <span className='animate-bounce'>
                  <SiWhatsapp />
                </span>{' '}
                +1 (813) 416-9628{' '}
              </p>
            </div>

            <div className='flex  gap-2'>
              <div className='e__socail__icon'>
                <FaFacebook />
              </div>
              <div className='e__socail__icon'>
                <FaInstagram />
              </div>
              <div className='e__socail__icon'>
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
