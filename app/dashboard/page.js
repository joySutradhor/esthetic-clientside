'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { LuAlarmClock } from 'react-icons/lu'
import { SlCalender } from 'react-icons/sl'
import Swal from 'sweetalert2'
import { GrUserAdmin } from 'react-icons/gr'
import Link from 'next/link'

function Dashboard () {
  const [bookings, setBookings] = useState([])
  const [phone, setPhone] = useState('')
  const [customerInfo, setCustomerInfo] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const storedBookings =
      JSON.parse(localStorage.getItem('estheticBookings')) || {}

    setCustomerInfo(storedBookings)

    if (storedBookings.phone) {
      setPhone(storedBookings.phone)
    }
  }, []) // Don't add `phone` here, to avoid unnecessary re-fetch

  useEffect(() => {
    if (phone) {
      setLoading(true)
      axios
        .get(`https://esthetic-serverside.vercel.app/api/orders/${phone}`)
        .then(res => {
          setBookings(res.data)
          setLoading(false)
        })
        .catch(err => {
          console.error('Error fetching data:', err)
          setLoading(false) // Ensure loading is turned off even if there's an error
        })
    }
  }, [phone])


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
            `https://esthetic-serverside.vercel.app/api/deleteOrder/${orderId}`
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

  return (
    <div className='mt-[30%] md:mt-[20%] lg:mt-[15%] xl:mt-[10%] '>
      <div className='e__section__gap  '>
        <Link href='/adminLogin'>
          <button className='text-sm font-medium p-3 bg-gray-100 rounded-lg my-2 lg:my-5 flex items-center gap-2 cursor-pointer'>
            {' '}
            <span>
              <GrUserAdmin />
            </span>{' '}
            Admin Login
          </button>
        </Link>
        <div className='mb-10 space-y-2 border p-5  '>
          <h3 className=''>
            #Order History of{' '}
            <span className='font-bold'>
              {customerInfo.customerName || 'No User Found'}
            </span>
          </h3>
          <div>
            <p className=''>Phone : {customerInfo.phone || 'No Phone Found'}</p>
            <p className=''>
              Email : {customerInfo?.email || 'No Email Found'}
            </p>
          </div>
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
          <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-28 lg:mb-20'>
            {bookings?.map((order, i) => (
              <div key={i} className='bg-white border p-6 relative'>
                {/* Delete Button */}
                <button
                  onClick={() => deleteOrder(order._id)}
                  className='absolute top-10 right-8 text-red-500 hover:text-red-700'
                >
                  <FaTrash size={18} />
                </button>

                {/* Booking Details */}
                <div className='border-b pb-4 mb-4'>
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
                    Time: {order.time}
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h4 className='text-lg font-semibold mb-2 text-gray-600'>
                    Selected Services:{' '}
                    <span className='text-sm'>({order?.status})</span>
                  </h4>
                  <div className='space-y-4'>
                    {order.selectedServices.map(service => (
                      <div
                        key={service.id}
                        className='flex items-center gap-4 p-3 border rounded-lg bg-gray-50'
                      >
                        <div>
                          <p className='text-gray-600 font-medium'>
                            {service.serviceName}
                          </p>
                          <div className='flex gap-x-5'>
                            <p className='text-gray-600 text-sm flex items-center gap-2'>
                              <span>
                                <LuAlarmClock />
                              </span>{' '}
                              {service.time}
                            </p>
                            <p className='text-gray-700'>
                              <span className='line-through text-gray-500'>
                                ${service.originalPrice}
                              </span>{' '}
                              <span className='text-green-600 font-bold'>
                                ${service.discountedPrice}
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
                    <span className='text-green-600'>${order.subtotal}</span>
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

export default Dashboard
