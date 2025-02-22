'use client'
import React, { useState } from 'react'
import images from '@/public/FakeDb/images.json'

function GalleryImages () {
  const [showAll, setShowAll] = useState(false)
  const displayedImages = showAll ? images : images.slice(0, 10)

  return (
    <section>
      <div className='e__section__gap'>
        <div className='e__gallery__container'>
          <button className='e__tooltip__btn'>Área de trabajo</button>
          <h2 className='mt-3 mb-8'>Nuestra cartera de trabajo reciente</h2>

          {/* Masonry Grid */}
          <div className='columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 '>
            {displayedImages.map(image => (
              <img
                key={image.id}
                src={image.img}
                alt={`Gallery ${image.id}`}
                className='w-full rounded-md shadow-md break-inside-avoid'
              />
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <div className='text-center mt-5'>
            <button
              className='e__bookBtn'
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryImages
