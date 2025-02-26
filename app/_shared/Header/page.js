'use client'
import React, { useState } from 'react'
import NavButton from '@/app/_components/NavButton/page'
import { IoIosHome } from 'react-icons/io'
import { IoBriefcaseSharp } from 'react-icons/io5'
import { MdOutlinePhotoLibrary, MdPeopleAlt } from 'react-icons/md'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import { FaTiktok } from 'react-icons/fa6'
import { MdOutlineDashboard } from 'react-icons/md'

import { SiWhatsapp } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import logo from '@/public/logo.jpg'
import Link from 'next/link'

function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='e__nav__container hidden md:block'>
        <nav className='header__footer__main__gapping  e__nav__parent '>
          <div className='flex justify-between items-center'>
            {/* Mobile Menu Toggle */}
            <button
              className='e__nav__menuToggle__btn'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <IoClose />
              ) : (
                <GiHamburgerMenu className='text-black' />
              )}
            </button>

            {/* Navigation Links */}
            <ul
              className={`e__nav__navigation__parent
              ${isOpen ? 'e__nav__isOpen' : 'e__nav__isClose'}`}
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
                <Link href='/'>
                  <button className='e__header__btn flex items-center gap-1 !bg-black !text-white/80'>
                    {' '}
                    <span>
                      {' '}
                      <IoIosHome />{' '}
                    </span>{' '}
                    Hogar{' '}
                  </button>
                </Link>
              </div>

              <div>
                <Link href='/about'>
                  <button className='e__header__btn flex items-center gap-1'>
                    {' '}
                    <span>
                      {' '}
                      <MdPeopleAlt />{' '}
                    </span>{' '}
                    Sobre nosotras{' '}
                  </button>
                </Link>
              </div>
              <div>
                <Link href='/service'>
                  <button className='e__header__btn flex items-center gap-1'>
                    {' '}
                    <span>
                      {' '}
                      <IoBriefcaseSharp />{' '}
                    </span>{' '}
                    Servicios{' '}
                  </button>
                </Link>
              </div>
              <div>
                <Link href='/gallery'>
                  <button className='e__header__btn flex items-center gap-1'>
                    {' '}
                    <span>
                      {' '}
                      <MdOutlinePhotoLibrary />{' '}
                    </span>{' '}
                    Galería{' '}
                  </button>
                </Link>
              </div>
              <div>
                <Link href='/dashboard'>
                  <button className='e__header__btn flex items-center gap-1'>
                    {' '}
                    <span>
                      {' '}
                      <MdOutlineDashboard />{' '}
                    </span>{' '}
                    Panel{' '}
                  </button>
                </Link>
              </div>
            </ul>

            {/* Contact & Social Links */}
            <div className='flex gap-5 items-center '>
              <p className='flex items-center gap-1 e__para text-sm'>
                <a
                  href='https://wa.me/18134169628'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1'
                >
                  <span className='animate-bounce'>
                    <SiWhatsapp />
                  </span>
                  +1 (813) 416-9628
                </a>
              </p>

              <div className='flex gap-2'>
                <div className='e__socail__icon'>
                  <a
                    href='https://www.facebook.com/profile.php?id=100063898472777'
                    target='__blank'
                  >
                    <FaFacebook />
                  </a>
                </div>
                <div className='e__socail__icon'>
                  <a
                    href='https://www.instagram.com/esthetic_n.delrosario/'
                    target='__blank'
                  >
                    <FaInstagram />
                  </a>
                </div>
                <div className='e__socail__icon'>
                  <a
                    href='https://www.tiktok.com/@noemidelrosario03'
                    target='_blank'
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* mobile header */}
      <div className='absolute top-5 left-0 px-5 z-50 w-full md:hidden'>
        <div className='flex justify-between items-center'>
          <div>
            <Link href='/'>
              <Image
                src={logo}
                alt='logo'
                height={50}
                width={50}
                className='rounded-full block lg:hidden '
              ></Image>
            </Link>
          </div>
          <div>
            <Link href='/book'>
              <button className='e__service__btn'>Reserva ahora</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
