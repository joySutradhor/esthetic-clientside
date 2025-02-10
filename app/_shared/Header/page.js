'use client'
import React, { useState } from 'react'
import NavButton from '@/app/_components/NavButton/page'
import { IoIosHome } from 'react-icons/io'
import { IoBriefcaseSharp } from 'react-icons/io5'
import { MdOutlinePhotoLibrary, MdPeopleAlt } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { SiWhatsapp } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import logo from '@/public/logo.jpg'

function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='e__nav__container'>
      <nav className='header__footer__main__gapping  e__nav__parent'>
        <div className='flex justify-between items-center'>
          {/* Mobile Menu Toggle */}
          <button
            className='e__nav__menuToggle__btn'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoClose />
            ) : (
              <GiHamburgerMenu className='text-white' />
            )}
          </button>

          {/* Navigation Links */}
          <ul
            className={`e__nav__navigation__parent
              ${
                isOpen
                  ? 'e__nav__isOpen'
                  : 'e__nav__isClose'
              }`}
          >
            <div className='e__nav__mobile__nav'>
              <div>
                <Image
                  src={logo}
                  alt='logo'
                  height={50}
                  width={50}
                  className='rounded-full block lg:hidden '
                ></Image>
              </div>
              <button
                className='e__nav__menuToggle'
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <IoClose className='text-xl font-bold ' />
                ) : (
                  <GiHamburgerMenu className='text-white/80' />
                )}
              </button>
            </div>

            <div>
              <NavButton
                className='!bg-black !text-white/80'
                navButtonText='Home'
                navButtonLink='/home'
                icon={IoIosHome}
              />
            </div>
            <div>
              <NavButton
                navButtonText='About Us'
                navButtonLink='/about'
                icon={MdPeopleAlt}
              />
            </div>
            <div>
              <NavButton
                navButtonText='Services'
                navButtonLink='/services'
                icon={IoBriefcaseSharp}
              />
            </div>
            <div>
              <NavButton
                navButtonText='Gallery'
                navButtonLink='/gallery'
                icon={MdOutlinePhotoLibrary}
              />
            </div>
          </ul>

          {/* Contact & Social Links */}
          <div className='flex gap-5 items-center '>
            <p className='flex items-center gap-1 e__para text-sm'>
              <span className='animate-bounce'>
                <SiWhatsapp />
              </span>
              +1 (813) 416-9628
            </p>
            <div className='flex gap-2'>
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
