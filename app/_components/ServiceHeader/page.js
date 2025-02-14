import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ServiceHeader ({ serviceHeader, heading, btnText, paraText, link }) {
  return (
    <div className='e__c__header__service__parent'>
      <Image
        src={serviceHeader}
        alt='service header'
        height={800}
        width={800}
        className='h-full w-full object-cover object-center'
      ></Image>
      <div className='e__c__service__overlay'></div>
      <div className='e__c__content__service__header'>
        <div className='flex justify-center items-center'>
          <button className='flex gap-2 list-disc'>
            <Link href='/'>
              <span>Home /</span>
            </Link>
            <Link href='/service'>
              <span>Service /</span>
            </Link>
            <Link href=''>
              <span>{link}</span>
            </Link>
          </button>
        </div>
        <h1 className='text-white/80'>{heading}</h1>
        <p className='e__c__para'>{paraText}</p>
        <Link href='/book'>
          <button className='e__bookBtn'>{btnText}</button>
        </Link>
      </div>
    </div>
  )
}

export default ServiceHeader
