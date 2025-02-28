'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

function CTACard () {
  const [cardOpen, setCardOpen] = useState(false)

  const handleCardOpen = () => {
    console.log('click')
    setCardOpen(true)
  }
  return (
    <section
      className={`e__secondary__bg w-[90.5vw] md:w-[50vw] lg:w-[45vw] xl:w-[30vw] 2xl:w-[25vw] p-5  border shadow fixed bottom-16 md:bottom-5 right-5 ${
        cardOpen ? 'hidden' : 'block'
      }  `}
    >
      <div className=''>
        <h2 className='mb-3 mt-3 md:mt-0'>Tu Piel Merece el Mejor Cuidado</h2>
        <p className='mb-5 lg:mb-10 border-b pb-4'>
          Estamos aquí para responder todas tus preguntas sobre cuidado de la
          piel. ¡Llámanos en cualquier momento para recibir asesoría y apoyo
          experto!
        </p>
        <div className='flex gap-5 md:justify-end justify-center'>
          <a href='tel:+18134169628'>
            <button className='border py-2 px-6 bg-gray-800 text-white rounded'>
              Llama Ahora
            </button>
          </a>
          <Link href='/book'>
            <button className='border py-2 px-6 e__secondary__color bg-white rounded'>
              Reserva Ahora
            </button>
          </Link>
        </div>
        <div className='absolute top-0 right-0'>
          <button
            onClick={handleCardOpen}
            className='border p-1 rounded-full bg-white'
          >
            <IoCloseSharp className='text-2xl e__secondary__color  ' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTACard
