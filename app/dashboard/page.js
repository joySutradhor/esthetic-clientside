'use client'
import React, { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'

function Dashboard () {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const storedOrders =
      JSON.parse(localStorage.getItem('estheticBookings')) || []
    setOrders(storedOrders)
  }, [])

  // const deleteOrder = orderId => {
  //   const updatedOrders = orders.filter(order => order.id !== orderId)
  //   setOrders(updatedOrders)
  //   localStorage.setItem('estheticBookings', JSON.stringify(updatedOrders))
  // }

  return (
    <>
      <div className='flex items-center justify-center h-screen bg-gray-100'>
       hello
      </div>
    </>
    // <div className='min-h-screen bg-gray-100 p-4 md:p-8'>
    //   <div className='max-w-4xl mx-auto'>
    //     <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
    //       Your Bookings
    //     </h2>
    //     {orders.length === 0 ? (
    //       <p className='text-gray-600 text-center'>No bookings found.</p>
    //     ) : (
    //       <div className='grid gap-6'>
    //         {orders.map(order => (
    //           <div
    //             key={order.id}
    //             className='bg-white shadow-lg rounded-lg p-6 relative'
    //           >
    //             {/* Delete Button */}
    //             <button
    //               onClick={() => deleteOrder(order.id)}
    //               className='absolute top-10 right-8 text-red-500 hover:text-red-700'
    //             >
    //               <FaTrash size={18} />
    //             </button>

    //             {/* Customer Info */}
    //             <div className='border-b pb-4 mb-4'>
    //               <h3 className='text-xl font-semibold text-gray-800'>
    //                 {order.customerName}
    //               </h3>
    //               <p className='text-gray-600'>📞 {order.phone}</p>
    //               <p className='text-gray-600'>📧 {order.email}</p>
    //             </div>

    //             {/* Booking Details */}
    //             <div className='border-b pb-4 mb-4'>
    //               <p className='text-gray-700'>
    //                 📅 <strong>Date:</strong> {order.date}
    //               </p>
    //               <p className='text-gray-700'>
    //                 ⏰ <strong>Time:</strong> {order.time}
    //               </p>
    //             </div>

    //             {/* Services */}
    //             <div>
    //               <h4 className='text-lg font-semibold mb-2 text-gray-800'>
    //                 Selected Services:
    //               </h4>
    //               <div className='space-y-4'>
    //                 {order.selectedServices.map(service => (
    //                   <div
    //                     key={service.id}
    //                     className='flex items-center gap-4 p-3 border rounded-lg bg-gray-50'
    //                   >
    //                     <div>
    //                       <p className='text-gray-800 font-medium'>
    //                         {service.serviceName}
    //                       </p>
    //                       <div className='flex gap-x-5'>
    //                         <p className='text-gray-600 text-sm'>
    //                           ⏳ {service.time}
    //                         </p>
    //                         <p className='text-gray-700'>
    //                           💰{' '}
    //                           <span className='line-through text-gray-500'>
    //                             ${service.originalPrice}
    //                           </span>{' '}
    //                           <span className='text-green-600 font-bold'>
    //                             ${service.discountedPrice}
    //                           </span>
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>

    //             {/* Total */}
    //             <div className='mt-4 text-right'>
    //               <p className='text-lg font-semibold text-gray-800'>
    //                 🛒 Total:{' '}
    //                 <span className='text-green-600'>${order.subtotal}</span>
    //               </p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </div>
  )
}

export default Dashboard
