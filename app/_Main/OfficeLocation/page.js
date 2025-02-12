"use client"
import Image from 'next/image'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'
import esthetic from '@/public/office/esthetic.webp'
import { useState } from 'react'
import { FaCopy, FaEnvelope, FaPhone } from 'react-icons/fa6'
import { FaLocationDot } from "react-icons/fa6";


function OfficeLocation () {
  const [copied, setCopied] = useState('')

  // Copy function
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)

    setTimeout(() => {
      setCopied('')
    }, 2000)
  }

  return (
    <section className='e__section__gap mb-24 md:mb-20'>
      <div className='e__office__container e__secondary__bg '>
        <div className='e__office__containerParent'>
          {/* Heading & Business Area */}
          <div className='e__office__header__parent'>
            <button className='e__tooltip__btn '>Business Area</button>
            <h2 className='e__faq_heading'>You Can Find Us Here </h2>
          </div>

          {/* Content Section */}
          <div className='e__office__content__container'>
            {/* Left: Image */}
            <div>
              <Image
                src={esthetic}
                height={500}
                width={500}
                className='h-full w-full object-cover rounded-lg shadow-lg'
                alt='Estetic N. Del Rosario'
              />
            </div>

            {/* Right: Business Information */}
            <div>
              <div className='e__office__bussiness__info'>
                {/* Contact Info */}
                <div className='space-y-4'>
                  <h3>
                    Contact Information
                  </h3>

                  {/* Address */}
                  <p className=' flex items-center space-x-1'>
                    <FaLocationDot/> <span>146 W Robertson Brandon St, Florida 33511</span>
                  </p>

                  {/* Phone */}
                  <div className='flex items-center space-x-2'>
                    <a
                      href='tel:+18134169628'
                      className='text-blue-600 hover:underline flex items-center space-x-1'
                    >
                      <FaPhone />
                      <span>+1 (813) 416-9628</span>
                    </a>
                    <button
                      onClick={() => handleCopy('+18134169628', 'phone')}
                      className='text-gray-500 hover:text-blue-500'
                    >
                      <FaCopy />
                    </button>
                    {copied === 'phone' && (
                      <span className='text-green-600 text-sm'>Copied!</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className='flex items-center space-x-2'>
                    <a
                      href='mailto:Noemidlrosario@hotmail.com'
                      className='text-blue-600 hover:underline flex items-center space-x-1'
                    >
                      <FaEnvelope />
                      <span>Noemidlrosario@hotmail.com</span>
                    </a>
                    <button
                      onClick={() =>
                        handleCopy('Noemidlrosario@hotmail.com', 'email')
                      }
                      className='text-gray-500 hover:text-blue-500'
                    >
                      <FaCopy />
                    </button>
                    {copied === 'email' && (
                      <span className='text-green-600 text-sm'>Copied!</span>
                    )}
                  </div>
                </div>

                {/* Opening Hours */}
                <div>
                  <div>
                    <h3>Opening Hours</h3>
                    <ul className='text-gray-600 mt-2'>
                      <ul className='space-y-2'>
                        <p>🕒 Monday: 7:00 AM - 8:00 PM</p>
                        <p>🕒 Tuesday: 7:00 AM - 8:00 PM</p>
                        <p>🕒 Wednesday: 7:00 AM - 8:00 PM</p>
                        <p>🕒 Thursday: 7:00 AM - 8:00 PM</p>
                        <p>🕒 Friday: 7:00 AM - 8:00 PM</p>
                        <p>🕒 Saturday: 7:00 AM - 8:00 PM</p>
                        <p>🕒 Sunday: 2 PM -5 PM</p>
                      </ul>
                    </ul>
                  </div>
                </div>

                {/* Social Icons */}
                <div>
                  <h3 className='text-xl font-semibold text-gray-800'>
                    Follow Us
                  </h3>
                  <div className='flex space-x-4 mt-3'>
                    <a
                      href='#'
                      className='text-white bg-blue-600 p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-700'
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href='#'
                      className='text-white bg-blue-400 p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-500'
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href='#'
                      className='text-white bg-blue-700 p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-800'
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href='#'
                      className='text-white bg-pink-500 p-2 md:p-3 rounded-full shadow-lg hover:bg-pink-600'
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeLocation
