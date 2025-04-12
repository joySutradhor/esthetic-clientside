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

function AdminAccepted () {
  const [bookings, setBookings] = useState([])
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
      .get(`https://esthetic-serverside-teal.vercel.app/api/orders/accept`)
      .then(res => {
        setBookings(res.data)
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
        const updatedBookings = bookings.filter(order => order._id !== orderId)
        setBookings(updatedBookings)

        axios
          .delete(
            `https://esthetic-serverside-teal.vercel.app/api/deleteOrder/${orderId}`
          )
          .then(res => {})
          .catch(err => {
            console.error('Error deleting order:', err)
            // If error occurs, revert the local state update
            setBookings(bookings)
          })

        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success'
        })
      }
    })
  }

 const cancelStatus = orderId => {
    Swal.fire({
      title: 'Are you want to Cancel?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel it!'
    }).then(result => {
      if (result.isConfirmed) {
        // Update the bookings state locally before making the API call
        const updatedBookings = bookings.filter(order => order._id !== orderId)
        setBookings(updatedBookings)

        axios
          .patch(
            `https://esthetic-serverside-teal.vercel.app/api/cancel/${orderId}`
          )
          .then(res => {
            if (res.status === 200) {
              Swal.fire({
                title: 'Cencel!',
                text: 'Your Appointment has been Cancel.',
                icon: 'success'
              })
            } else {
              Swal.fire({
                title: 'Error!',
                text: 'Your Appointment not Cencel.',
                icon: 'warning'
              })
            }
          })
          .catch(err => {
            console.error('Error canceling order:', err)
            // If error occurs, revert the local state update
            setBookings(bookings)
          })
      }
    })
  }

  return (
    <div className='mt-[30%] md:mt-[20%] lg:mt-[15%] xl:mt-[10%] '>
      <div className='e__section__gap  '>
        <div className='flex items-center flex-wrap xl:gap-5 gap-x-5'>
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
            <button className='text-sm font-medium p-3  border bg-gray-100   rounded-lg my-2 lg:my-5 flex items-center gap-2 cursor-pointer'>
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
            <button className='text-sm font-medium p-3   border  rounded-lg my-2 lg:my-5 flex items-center gap-2 cursor-pointer'>
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
        ) : bookings?.length === 0 ? (
          <p className='text-gray-600 text-center'>No bookings found.</p>
        ) : (
          <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-5 lg:mt-10 mb-28 lg:mb-20'>
            {bookings?.map((order, i) => (
              <div
                key={i}
                className='bg-white border border-green-600 p-6 relative'
              >
                <div className='grid xl:grid-cols-2   border-b py-5'>
                  <div className='  '>
                    <h3>{order?.customerName}</h3>
                    <p>{order?.phone}</p>
                    <p>{order?.email}</p>
                  </div>

                  <div className=' flex  xl:justify-end pt-4 xl:pt-0'>
                    <div className='space-x-2 text-sm'>
                      {/* Delete Button */}
                      <button
                        onClick={() => deleteOrder(order._id)}
                        className=' py-1 px-4  border rounded  hover:text-red-500 border-red-500 '
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => cancelStatus(order._id)}
                        className=' py-1 px-4   border border-red-500 rounded  text-gray-800'
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

                {/* Booking Details */}
                <div className='border-b py-4 mb-4'>
                  <p className='text-gray-700 flex items-center gap-2'>
                    <span>
                      <SlCalender />
                    </span>{' '}
                    Date: {new Date(order.date).toLocaleDateString()}
                  </p>
                  <p className='text-gray-700 flex items-center gap-2'>
                    <span>
                      <LuAlarmClock />
                    </span>{' '}
                    Time: {order?.time}
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h4 className='text-lg font-semibold mb-2 text-gray-600'>
                    Selected Services:
                  </h4>
                  <div className='space-y-4'>
                    {order?.selectedServices?.map(service => (
                      <div
                        key={service?.id}
                        className='flex items-center gap-4 p-3 border rounded-lg bg-gray-50'
                      >
                        <div>
                          <p className='text-gray-600 font-medium'>
                            {service?.serviceName}
                          </p>
                          <div className='flex gap-x-5'>
                            <p className='text-gray-600 text-sm flex items-center gap-2'>
                              <span>
                                <LuAlarmClock />
                              </span>{' '}
                              {service?.time}
                            </p>
                            <p className='text-gray-700'>
                              <span className='line-through text-gray-500'>
                                ${service?.originalPrice}
                              </span>{' '}
                              <span className='text-green-600 font-bold'>
                                ${service?.discountedPrice}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className='mt-4 text-right'>
                  <p className='text-lg font-semibold text-gray-600'>
                    Total:{' '}
                    <span className='text-green-600'>${order?.subtotal}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminAccepted
