import Link from 'next/link'
import React from 'react'
import { FaRegHandPointer } from 'react-icons/fa6'

function Cta () {
  return (
    <section className='e__section__gap'>
      <div className='e__cta__container'>
        <div className='e__cta__childParent'>
          <div className='e__cta__content__parent'>
            <h2>Start your journey to better skin</h2>
            <p className='mt-2 lg:mt-2'>
              Here at The Skin Care Clinic we believe in skin confidence! When
              you feel good about your appearance, about yourself! Confidence in
              your skin leads to confidence in your life!
            </p>
          </div>
          <div className='e__cta__btnParent'>
            <Link href="/book">
              {' '}
              <button className='e__bookBtn flex gap-x-2 items-center'>
                Book Now{' '}
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
