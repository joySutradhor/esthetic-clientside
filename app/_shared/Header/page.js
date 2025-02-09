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
    <header className='absolute top-0 2xl:pt-10 pt-3 left-0 z-50 w-full'>
      <nav className='header__footer__main__gapping  py-4 rounded-lg'>
        <div className='flex justify-between items-center'>
          {/* Mobile Menu Toggle */}
          <button
            className='lg:hidden text-xl focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoClose />
            ) : (
              <GiHamburgerMenu className='text-white/80' />
            )}
          </button>

          {/* Navigation Links */}
          <ul
            className={`lg:flex gap-x-4  font-normal text-black/80   items-center transition-all duration-300 
              ${
                isOpen
                  ? 'block absolute z-50 top-0  left-0 2xl:w-auto w-full h-[100vh] 2xl:h-auto e__primary__bg 2xl:e__primary__bg space-y-3 pt-5  px-5 2xl:shadow-none  shadow-lg'
                  : 'hidden lg:flex'
              }`}
          >
            <div className='flex justify-between items-center 2xl:border-none border-b pb-5 mb-8'>
              <div>
                <Image
                  src={logo}
                  alt='logo'
                  height={50}
                  width={50}
                  className='rounded-full block 2xl:hidden'
                ></Image>
              </div>
              <button
                className='lg:hidden text-xl focus:outline-none bg-gray-300 p-2 rounded-full'
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
                className='!bg-black !text-white'
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
              <div className='e__secondary__bg p-2 rounded-full'>
                <FaFacebook />
              </div>
              <div className='e__secondary__bg p-2 rounded-full'>
                <FaInstagram />
              </div>
              <div className='e__secondary__bg p-2 rounded-full'>
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
