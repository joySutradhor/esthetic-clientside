'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FaTrash, FaUndoAlt } from 'react-icons/fa'
import { LuAlarmClock } from 'react-icons/lu'
import { SlCalender } from 'react-icons/sl'
import Swal from 'sweetalert2'
import { GrUserAdmin } from 'react-icons/gr'
import Link from 'next/link'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { VscCheckAll } from 'react-icons/vsc'
import { PiChecksBold } from 'react-icons/pi'
import { useRouter } from 'next/navigation'
import { FaInfoCircle } from 'react-icons/fa'
import { MdOutlineRateReview } from 'react-icons/md'

function AdminReviews () {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    if (!isAdmin) {
      router.push('/adminLogin')
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://esthetic-serverside-teal.vercel.app/api/reviews`)
      .then(res => {
        setReviews(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching data:', err)
        setLoading(false) // Ensure loading is turned off even if there's an error
      })
  }, [])

  // Delete order function
  const deleteOrder = orderId => {
    Swal.fire({
      title: 'Are you  want to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        // Update the bookings state locally before making the API call
        const updatedBookings = reviews.filter(order => order._id !== orderId)
        setReviews(updatedBookings)

        axios
          .delete(
            `https://esthetic-serverside-teal.vercel.app/api/deleteReview/${orderId}`
          )
          .then(res => {})
          .catch(err => {
            console.error('Error deleting order:', err)
            // If error occurs, revert the local state update
            setReviews(bookings)
          })

        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success'
        })
      }
    })
  }



  

  return (
    <div className='mt-[30%] md:mt-[20%] lg:mt-[15%] xl:mt-[10%] '>
      <div className='e__section__gap  '>
        <div className='flex items-center  flex-wrap xl:gap-5 gap-x-5'>
          <Link href='/adminDashboard'>
            <button className='text-sm font-medium p-3 border rounded-lg my-2 lg:my-5 flex items-center gap-2 cursor-pointer'>
              {' '}
              <span>
                <FaInfoCircle />
              </span>{' '}
              Pending List
            </button>
          </Link>

          <Link href='/adminAccepted'>
            <button className='text-sm font-medium p-3  border  rounded-lg my-2 lg:my-5 flex items-center gap-2 cursor-pointer'>
              {' '}
              <span>
                <VscCheckAll />
              </span>{' '}
              Accepted List
            </button>
          </Link>

          <Link href='/adminCancel'>
            <button className='text-sm font-medium p-3   border  rounded-lg my-2 lg:my-5 flex items-center gap-2 cursor-pointer'>
              {' '}
              <span>
                <FaUndoAlt />
              </span>{' '}
              Cancel List
            </button>
          </Link>

          <Link href='/adminReviews'>
            <button className='text-sm font-medium p-3  bg-gray-100  border  rounded-lg my-2 lg:my-5 flex items-center gap-2 cursor-pointer'>
              {' '}
              <span>
                <MdOutlineRateReview />
              </span>{' '}
              Review List
            </button>
          </Link>
        </div>

        {loading ? (
          <div className='flex justify-center items-center'>
            <div className='spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid rounded-full border-gray-700 border-t-transparent'></div>
            <p className='text-gray-600 text-center ml-4'>
              Loading your bookings...
            </p>
          </div>
        ) : reviews?.length === 0 ? (
          <p className='text-gray-600 text-center'>No bookings found.</p>
        ) : (
          <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-28 lg:mb-20 mt-5 lg:mt-10'>
            {reviews?.map((review, i) => (
              <div
                key={i}
                className='bg-white border border-yellow-600 p-6 relative'
              >
                <div className='pb-5 border-b '>
                  <p className='text-lg font-semibold pb-2 '>{review?.name}</p>
                  <p className='mt-5'>{review?.message}</p>
                  <p className='bg-gray-100 my-3 text-lg font-semibold'>Review : {review?.rating}</p>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => deleteOrder(review._id)}
                  className='absolute top-5 right-8   bg-red-600 py-2 px-6 text-white rounded'
                >
                  DELETE
                </button>


             
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminReviews ;
