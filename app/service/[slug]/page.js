'use client'
import React, { useEffect, useState } from 'react'
import servicesData from '@/public/FakeDb/services.json'
import { useParams } from 'next/navigation'
import ServiceHeader from '@/app/_components/ServiceHeader/page'
import Image from 'next/image'
import Link from 'next/link'
import Review from '@/app/_Main/Review/page'
import OfficeLocation from '@/app/_Main/OfficeLocation/page'

function ServiceDetails () {


  const params = useParams()
    const { slug } = params
    const services = servicesData?.services
  
    // Find the service matching the slug section
    const singleService = services.find(service => service.slug === slug);

  
    if (!services) {
      return (
        <p className='text-center text-xl text-red-500'>Service not found!</p>
      )
    }

  // Destructure the service data for easier usage
  const {
    service_name,
    short_description,
    intro,
    why_need_it,
    benefits,
    expert_opinion,
    price,
    time,
    images
  } = singleService

  return (
    <section className=''>
      {/* Service Header */}
      <div className='relative'>
        <ServiceHeader
          link={slug}
          // serviceHeader={images}
          heading={service_name}
          btnText='Reserva ahora'
          paraText={intro}
        />
      </div>

      {/* Service Details */}
      <div className='e__section__gap'>
        <section className='e__details__action__parent'>
          <div className='hidden lg:block'>
            <Image
              src={images}
              height={300}
              width={500}
              alt={service_name}
              className='w-full h-full object-cover rounded'
            ></Image>
          </div>
          <div className=''>
            <p>
              {' '}
              <span>Home /</span> <span>service /</span> <span>{slug}</span>{' '}
            </p>
            <h2 className='e__details__serviceName '>{service_name}</h2>
            <p className='e__details__intro'>{intro}</p>
            <div>
              <div className='e__details__action__child'>
                <div className='e__deitails__child__parent'>
                  <h3>Price : ${price}</h3>
                  <h3>Duration : {time}</h3>
                </div>
                <Link href='/book'>
                  <button className='e__service__btn'>Make Appointment</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='e__section__gap'>
        <div className='e__service__details__container space-y-10'>
          {/* Why You Need It */}
          <section className='space-y-4'>
            <h2>Why You Need {service_name}</h2>
            <p>{why_need_it}</p>
          </section>

          <section className='e__details__benefit__container'>
            {/* Benefits */}
            <section className='space-y-5  border  p-5'>
              <h2>Benefits of {service_name}</h2>
              <ul className='space-y-2'>
                {benefits?.map((benefit, index) => (
                  <li key={index} className='list-decimal ml-5'>
                    <strong className='text-lg text-gray-800'>
                      {benefit.title}:
                    </strong>
                    <p className='text-gray-600 lg:ml-4 '>
                      - {benefit.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Expert Opinion */}
            <section className='space-y-10 md:space-y-5 border p-5'>
              <h2> Expert recommendations</h2>
              {expert_opinion?.map((opinion, index) => (
                <div key={index} className='e__details__expert__parent'>
                  {/* <div className=''>
                    <img
                      src={opinion.src}
                      alt={opinion.name}
                      className='h-52 xl:h-full w-full rounded object-cover object-top'
                    />
                  </div> */}
                  <p>
                    <strong>{opinion.name}</strong>: {opinion.opinion}
                  </p>
                </div>
              ))}
            </section>
          </section>

          {/* Short Description */}
          <section className='space-y-4'>
            <h2>Know More About {service_name}</h2>
            <p>{short_description}</p>
          </section>
        </div>
      </div>
      {/* Reviews */}
      <Review />
      <OfficeLocation />
    </section>
  )
}

export default ServiceDetails
