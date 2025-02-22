'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import serviceList from '@/public/FakeDb/services.json'
import { LuAlarmClock } from "react-icons/lu";


import Link from 'next/link'

function AllService () {
  const { services } = serviceList
  const [sliceService, setSliceService] = useState(6)
  const [showMore, setShowMore] = useState(true)
  const sliceServices = services.slice(0, sliceService)

  const toggleShowMore = () => {
    setSliceService(showMore ? 14 : 6)
    setShowMore(!showMore)
  }

  return (
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
              <h3 className='font-bold'>{item?.service_name}</h3>
              <p className='flex justify-between items-center font-bold'> <span>${item?.price}</span> <span className='flex gap-x-1 items-center'> <LuAlarmClock/> {item?.time} </span> </p>
              <p>{item?.intro}</p>
            </div>

            <div className='flex justify-between items-center m-5'>
              <div>
                <Link href={`/service/${item?.slug}`}><button className='underline underline-offset-2'>
                  View Details
                </button></Link>
              </div>

              <div className=''>
                <Link href="/book"><button className='e__service__btn'>Try Now</button></Link>
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
  )
}

export default AllService
