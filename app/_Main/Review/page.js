'use client'
import React, { useEffect, useState } from 'react'
// import reviews from '@/public/FakeDb/reviews.json'
import { FaPlus } from 'react-icons/fa'
import axios from 'axios'

function Review () {
  const [reviews, setReviews] = useState([])
  const [sliceReview, setSliceReview] = useState(3)
  const [isShow, setIsShow] = useState(false)
  const allReviews = reviews.slice(0, sliceReview)
  const [postOpen, setPostOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [message, setMessage] = useState('')

  // ✅ Fetch reviews from server
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          'https://esthetic-serverside-teal.vercel.app/api/reviews'
        )
        setReviews(res.data)
      } catch (error) {
        console.error('Failed to fetch reviews:', error)
      }
    }

    fetchReviews()
  }, [loading])

  const handleReviewPost = () => {
    setPostOpen(true)
  }

  const handleReviewToogle = () => {
    setIsShow(!isShow)
    setSliceReview(isShow ? 3 : 6)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setPostOpen(false)
    const reviewData = {
      name,
      rating,
      message
    }
    console.log('catch')
    console.log(reviewData, 'here')

    try {
      const res = await axios.post(
        'https://esthetic-serverside-teal.vercel.app/api/review',
        reviewData
      )
      console.log('Review submitted:', res.data)
      setLoading(false)

      // Clear form
      setName('')
      setRating('')
      setMessage('')
      setPostOpen(false)
    } catch (error) {
      console.error('Error submitting review:', error)
      setLoading(false)
    }
  }

  const avgReview =
    reviews.length > 0
      ? reviews.reduce(
          (acc, review) => acc + parseInt(review?.rating || 0),
          0
        ) / reviews.length
      : 0

  return (
    <section className='e__section__gap relative'>
      {postOpen && (
        <div className='flex justify-center items-center fixed inset-0 bg-black/40 z-50'>
          <form
            onSubmit={handleSubmit}
            className='bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-md lg:max-w-lg 2xl:max-w-xl relative'
          >
            <div className='flex justify-between items-center  mb-5'>
              <h2 className='text-xl font-semibold'>Leave a Review</h2>
              <button
                type='button'
                onClick={() => setPostOpen(false)}
                className='py-1 px-4 rounded bg-red-500 text-white hover:bg-red-600'
              >
                Close
              </button>
            </div>

            <label className='block mb-1 text-sm font-medium'>Full Name</label>
            <input
              type='text'
              onChange={e => setName(e.target.value)}
              className='w-full mb-4 px-3 py-2 border rounded-md focus:outline-none'
              required
            />

            <label className='block mb-1 text-sm font-medium'>Ratings</label>
            <select
              onChange={e => setRating(e.target.value)}
              className='w-full mb-4 px-3 py-2 border rounded-md focus:outline-none'
              required
            >
              <option value=''>Select Rating</option>
              {[1, 2, 3, 4, 5].map(rate => (
                <option key={rate}>{rate}</option>
              ))}
            </select>

            <label className='block mb-1 text-sm font-medium'>
              Review Message
            </label>
            <textarea
              onChange={e => setMessage(e.target.value)}
              className='w-full mb-4 px-3 py-2 border rounded-md focus:outline-none'
              rows='4'
              required
            ></textarea>

            <button
              type='submit'
              className='w-full bg-gray-700 text-white py-2 rounded-md  transition'
            >
              Submit Review
            </button>
          </form>
        </div>
      )}

      {loading && (
        <div className='flex justify-center items-center absolute inset-0 bg-white p-5 border rounded'>
          <div className='spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid rounded-full border-gray-700 border-t-transparent'></div>
          <p className='text-gray-600 text-center ml-4'>
            submitting your review...
          </p>
        </div>
      )}

      <div className='e__review__container'>
        <div className='flex justify-between items-center'>
          <div>
            <button className='e__tooltip__btn'>Revisar</button>
            <h2 className='e__review__heading'>
              Opiniones de nuestras clientes
            </h2>
          </div>
          <div className='text-right'>
            {reviews.length > 0 ? (
              <>
                <h3>
                  <span className='text-3xl font-bold mb-1'>
                    {avgReview.toFixed(1)}
                  </span>{' '}
                  de <span className='text-3xl font-bold'>5</span>
                </h3>
                <p className='underline underline-offset-2'>
                  {'⭐'.repeat(Math.round(avgReview))} {reviews.length} Reviews
                </p>
              </>
            ) : (
              <p className='text-gray-500'>No reviews yet.</p>
            )}
          </div>
        </div>
        {/* customer reviews */}
        <div className='e__review__card__parent'>
          {allReviews?.map((r, i) => (
            <div key={i} className='border p-3  space-y-2'>
              <h3>{r?.name}</h3>
              <p>{new Date(r?.createdAt).toLocaleDateString('en-US')}</p>
              <p>{r?.message}</p>
              <p>{'⭐'.repeat(Math.round(r?.rating))}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-start mt-10 gap-x-5'>
          <button
            className='e__bookBtn flex gap-2 items-center'
            onClick={handleReviewPost}
          >
            Write Review{' '}
            <span>
              <FaPlus />
            </span>
          </button>

          <button className='e__bookBtn' onClick={handleReviewToogle}>
            {isShow ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Review
