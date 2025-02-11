'use client'
import React, { useState } from 'react'
import reviews from '@/public/FakeDb/reviews.json'


function Review () {
  const [sliceReview, setSliceReview] = useState(3)
  const [isShow, setIsShow] = useState(false)
  const allReviews = reviews.slice(0, sliceReview);
  console.log(allReviews)

  const handleReviewToogle = () => {
    setIsShow(!isShow)
    setSliceReview(isShow ? 3 : 6)
  }
  return (
    <section className='e__section__gap'>
      <div className='e__review__container'>
        <div>
          <button className='e__tooltip__btn'>Review</button>
          <h2 className='e__review__heading'>Our Customers Reviews</h2>
        </div>
        {/* customer reviews */}
        <div className='e__review__card__parent'>
          {allReviews?.map((r, i) => (
            <div key={i} className='border p-3  space-y-2'>
              <h3>{r?.name}</h3>
              <p>{r?.date}</p>
              <p>{r?.comment}</p>
              <p>{"⭐".repeat(Math.round(r?.rating))}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-10'>
            <button className='e__bookBtn' onClick={handleReviewToogle}>{ isShow ? "See Less" : "See More"}</button>
        </div>
      </div>
    </section>
  )
}

export default Review
