'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import serviceList from '@/public/FakeDb/services.json'

function OurServices () {
  const { services } = serviceList
  const [sliceService, setSliceService] = useState(6)
  const [showMore, setShowMore] = useState(true)
  const sliceServices = services.slice(0, sliceService)
  const toggleShowMore = () => {
    setSliceService(showMore ? 12 : 6)
    setShowMore(!showMore)
  }
  return (
    <section className='e__section__gap'>
      <div className='e__service__container'>
        <div>
          <button className='e__tooltip__btn'>What We Provide</button>
          <h2 className='e__service__heading'>Our Commitment To Customers</h2>
        </div>

        {/* services card */}
        <div>
          {/* service cards */}
          <div className='e__service__parent'>
            {sliceServices?.map((item, i) => (
              <div key={i} className='border relative  '>
                <div className='overflow-hidden'>
                  <Image
                    height={200}
                    width={400}
                    src={item?.images}
                    alt={item?.service_name}
                    className='hover:scale-125  transition-all ease-out duration-700'
                  />
                </div>

                <div className='p-5 space-y-3'>
                  <h3>{item?.service_name}</h3>
                  <p>{item?.intro}</p>
                </div>

                <div className='flex justify-between items-center m-5'>
                  <div>
                    <button className='underline underline-offset-2'>
                      View Details
                    </button>
                  </div>

                  <div className=''>
                    <button className='e__service__btn'>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='e__showMore__btn__parent'>
            <button className='e__bookBtn' onClick={toggleShowMore}>
              {showMore ? 'Show More ' : 'Show Less'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
