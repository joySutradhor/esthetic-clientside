'use client'

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { LuAlarmClock } from 'react-icons/lu'
import { SlCalender } from 'react-icons/sl'
import Swal from 'sweetalert2'
import { GrUserAdmin } from 'react-icons/gr'
import Link from 'next/link'

function Dashboard() {
  // State management
  const [bookings, setBookings] = useState([])
  const [phone, setPhone] = useState('')
  const [customerInfo, setCustomerInfo] = useState({})
  const [loading, setLoading] = useState(false)

  // Load customer info from localStorage on mount
  useEffect(() => {
    setLoading(true)
    const storedBookings = JSON.parse(localStorage.getItem('estheticBookings')) || {}
    setCustomerInfo(storedBookings)

    if (storedBookings.phone) {
      setPhone(storedBookings.phone)
    }
  }, [])

  // Fetch bookings when phone number is available
  useEffect(() => {
    if (phone) {
      fetchBookings()
    }
  }, [phone])

  // Function to fetch bookings
  const fetchBookings = () => {
    setLoading(true)
    axios
      .get(`https://esthetic-serverside-teal.vercel.app/api/orders/${phone}`)
      .then(res => {
        setBookings(res.data)
      })
      .catch(err => {
        console.error('Error fetching data:', err)
      })
      .finally(() => setLoading(false))
  }

  // Delete order function
  const deleteOrder = orderId => {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`https://esthetic-serverside-teal.vercel.app/api/deleteOrder/${orderId}`)
          .then(() => {
            Swal.fire('Deleted!', 'Your order has been deleted.', 'success')
            fetchBookings() // Refetch data after deletion
          })
          .catch(err => {
            console.error('Error deleting order:', err)
          })
      }
    })
  }

  // Cancel order function
  const cancelStatus = orderId => {
    Swal.fire({
      title: 'Are you sure you want to cancel?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!'
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .patch(`https://esthetic-serverside-teal.vercel.app/api/cancel/${orderId}`)
          .then(res => {
            if (res.status === 200) {
              Swal.fire('Cancelled!', 'Your appointment has been cancelled.', 'success')
              fetchBookings() // Refetch data after cancellation
            } else {
              Swal.fire('Error!', 'Failed to cancel appointment.', 'error')
            }
          })
          .catch(err => {
            console.error('Error canceling order:', err)
          })
      }
    })
  }

  return (
    <div className='mt-[30%] md:mt-[20%] lg:mt-[15%] xl:mt-[10%] '>
      <div className='e__section__gap'>
        {/* Admin Login Button */}
        <Link href='/adminLogin'>
          <button className='text-sm font-medium p-3 bg-gray-100 rounded-lg my-2 lg:my-5 flex items-center gap-2 cursor-pointer'>
            <GrUserAdmin /> Admin Login
          </button>
        </Link>

        {/* Customer Info */}
        <div className='mb-10 space-y-2 border p-5'>
          <h3>#Order History of <span className='font-bold'>{customerInfo.customerName || 'No User Found'}</span></h3>
          <p>Phone: {customerInfo.phone || 'No Phone Found'}</p>
          <p>Email: {customerInfo?.email || 'No Email Found'}</p>
        </div>

        {/* Booking List */}
        {loading ? (
          <div className='flex justify-center items-center'>
            <div className='spinner-border animate-spin w-8 h-8 border-4 border-solid rounded-full border-gray-700 border-t-transparent'></div>
            <p className='text-gray-600 ml-4'>Loading your bookings...</p>
          </div>
        ) : bookings.length === 0 ? (
          <p className='text-gray-600 text-center'>No bookings found.</p>
        ) : (
          <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-28 lg:mb-20'>
            {bookings.map((order, i) => (
              <div key={i} className='bg-white border p-6 relative'>
                {/* Order Date & Actions */}
                <div className='flex justify-between items-center border-b mb-4 pb-4'>
                  <div>
                    <p className='text-gray-700 flex items-center gap-2'><SlCalender /> Date: {new Date(order.date).toLocaleDateString()}</p>
                    <p className='text-gray-700 flex items-center gap-2'><LuAlarmClock /> Time: {order.time}</p>
                  </div>
                  {order.status === 'pending' ? (
                    <button onClick={() => deleteOrder(order._id)} className='text-red-500 hover:text-red-700'>
                      <FaTrash size={18} />
                    </button>
                  ) : order.status === 'accepted' ? (
                    <button onClick={() => cancelStatus(order._id)} className='border py-1 px-4'>Cancel</button>
                  ) : null}
                </div>

                {/* Selected Services */}
                <h4 className='text-lg font-semibold mb-2 text-gray-600'>Selected Services: <span className='text-sm text-red-500'>({order.status})</span></h4>
                <div className='space-y-4'>
                  {order.selectedServices.map(service => (
                    <div key={service.id} className='flex items-center gap-4 p-3 border rounded-lg bg-gray-50'>
                      <p className='text-gray-600 font-medium'>{service.serviceName}</p>
                      <p className='text-gray-700'>
                        <span className='line-through text-gray-500'>${service.originalPrice}</span> 
                        <span className='text-green-600 font-bold'>${service.discountedPrice}</span>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Total Price */}
                <p className='mt-4 text-lg font-semibold text-gray-600 text-right'>Total: <span className='text-green-600'>${order.subtotal}</span></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
