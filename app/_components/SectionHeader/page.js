import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SectionHeader ({serviceHeader , heading , btnText , paraText}) {
  return (
    <div className='e__c__header__parent'>
      <Image
        src={serviceHeader}
        alt='service header'
        height={800}
        width={800}
        className='h-full w-full object-cover object-center'
        layout="responsive"
      ></Image>
      <div className='e__c__overlay'></div>
      <div className='e__c__content__header'>
        <h1 className='text-white/80'>{heading}</h1>
        <p className='e__c__para'>
          {paraText}
        </p>
        <Link href="/book"><button className='e__bookBtn'>{btnText}</button></Link>
      </div>
    </div>
  )
}

export default SectionHeader
