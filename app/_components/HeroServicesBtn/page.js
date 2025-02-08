import Link from 'next/link'
import React from 'react'

export default function HeroServiceBtn ({ btnText, serviceLink, Icon = Icon , className }) {
  return (
    <div>
      <Link href={serviceLink}>
        <button className={`e__primary__btn flex gap-1 items-center group ${className}`}>
          {btnText}
          {Icon && <Icon className='h-5 w-5 group-hover:translate-x-2 transition-all ease-in-out duration-100' />}
        </button>
      </Link>
    </div>
  )
}
