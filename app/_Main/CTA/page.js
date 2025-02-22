import Link from 'next/link'
import React from 'react'
import { FaRegHandPointer } from 'react-icons/fa6'

function Cta () {
  return (
    <section className='e__section__gap'>
      <div className='e__cta__container'>
        <div className='e__cta__childParent'>
          <div className='e__cta__content__parent'>
            <h2>Comienza tu viaje hacia una piel más saludable</h2>
            <p className='mt-2 lg:mt-2'>
              ¡Aquí en The Skin Care Clinic creemos en la confianza en la piel!
              Cuando te sientes bien con tu apariencia, ¡te sientes bien contigo
              mismo! ¡La confianza en tu piel lleva a la confianza en tu vida!
            </p>
          </div>
          <div className='e__cta__btnParent'>
            <Link href='/book'>
              {' '}
              <button className='e__bookBtn flex gap-x-2 items-center'>
                Reserva ahora{' '}
                <span className='rotate-90'>
                  <FaRegHandPointer />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
