'use client'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Confirm } from 'notiflix'
import React, { useEffect, useState } from 'react'
import { LuAlarmClockPlus } from 'react-icons/lu'
import { PhoneInput } from 'react-international-phone'
import { toast, Toaster } from 'sonner'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid' // Install with `npm install uuid`

function Book () {
  const [step, setStep] = useState(1) // Step state to manage stepper flow
  const [customerName, setCustomerName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const router = useRouter()

  // Sample skincare services data
  const skincareServices = [
    {
      id: 1,
      serviceName: 'Limpieza facial',
      originalPrice: 200,
      discountedPrice: 150,
      time: '60 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 2,
      serviceName: 'Plasma Rico en Plaquetas',
      originalPrice: 300,
      discountedPrice: 250,
      time: '90 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 3,
      serviceName: 'Mesoterapia de Acné',
      originalPrice: 300,
      discountedPrice: 250,
      time: '90 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 4,
      serviceName: 'Hidratación',
      originalPrice: 140,
      discountedPrice: 90,
      time: '60 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 5,
      serviceName: 'Tratamiento para Ojeras',
      originalPrice: 170,
      discountedPrice: 120,
      time: '60 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 6,
      serviceName: 'Mesoterapia de Vitaminas',
      originalPrice: 185,
      discountedPrice: 135,
      time: '60 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 7,
      serviceName: 'Meso Botox',
      originalPrice: 300,
      discountedPrice: 250,
      time: '30 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 8,
      serviceName: 'BB Botox',
      originalPrice: 400,
      discountedPrice: 350,
      time: '30 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 9,
      serviceName: 'Ácido Hialurónico',
      originalPrice: 350,
      discountedPrice: 300,
      time: 'N/A',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 10,
      serviceName: 'Tratamiento para Ojeras',
      originalPrice: 1150,
      discountedPrice: 1100,
      time: '90 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 11,
      serviceName: 'Dermapen',
      originalPrice: 230,
      discountedPrice: 180,
      time: '80 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 12,
      serviceName: 'Dermaplaning',
      originalPrice: 180,
      discountedPrice: 130,
      time: '45 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 13,
      serviceName: 'Nasogenianos',
      originalPrice: 400,
      discountedPrice: 350,
      time: '20 minutos',
      image: '/service/Tratamiento para Ojeras.webp'
    },
    {
      id: 14,
      serviceName: 'Labios',
      originalPrice: 350,
      discountedPrice: 300,
      time: 'N/A',
      image: '/service/Tratamiento para Ojeras.webp'
    }
  ]

  useEffect(() => {
    const existingBookings =
      JSON.parse(localStorage.getItem('estheticBookings')) || {}



    // Set values only if they exist
    if (existingBookings.customerName) {
      setCustomerName(existingBookings.customerName)
    }
    if (existingBookings.phone) {
      setPhone(existingBookings.phone)
    }
    if (existingBookings.email) {
      setEmail(existingBookings.email)
    }
  }, [step]) // Ensure step is defined

  const today = new Date().toLocaleDateString('fr-CA') // "YYYY-MM-DD" format in local time


  const toggleService = serviceId => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId))
    } else {
      setSelectedServices([...selectedServices, serviceId])
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const selectedServicesDetails = skincareServices.filter(service =>
      selectedServices.includes(service.id)
    )
    const subtotal = selectedServicesDetails.reduce(
      (total, service) => total + service.discountedPrice,
      0
    )

    Swal.fire({
      title: 'Esthetic Booking',
      text: 'Do you want to book?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.isConfirmed) {
        const orderId = uuidv4()

        const formData = {
          orderId, // Attach the unique ID to the order
          customerName,
          phone,
          email,
          date,
          time,
          status: "pending" ,
          selectedServices: selectedServicesDetails,
          subtotal
        }


        axios
          .post('http://localhost:8000/api/create', formData)
          .then(res => {
            if (res.status === 200) {
              // Save the booking to localStorage
              localStorage.setItem(
                'estheticBookings',
                JSON.stringify({ customerName, phone, email })
              )

              // Show success alert
              Swal.fire({
                title: 'Success',
                text: 'Appointment has been created successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                router.push("/dashboard")
              })
            }
          })
          .catch(error => {
            console.error({ error })

            // Show error alert
            Swal.fire({
              title: 'Error',
              text: 'Something went wrong. Please try again.',
              icon: 'error',
              confirmButtonText: 'OK'
            })
          })
      }
    })
  }

  const handleNextStep = () => {
    if (step === 1 && selectedServices.length === 0) {
      Confirm.show(
        'Select Service',
        'Please Select one service atleast',
        'Okay'
      )
      return
    }
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }



  return (
    <div className='e__book__container '>
      <Toaster position='top-right' />

      <form onSubmit={handleSubmit} className='e__book__form__parent'>
        <div className='mt-5'>
          <h3 className=''>Esthetic N. Del Rosario</h3>
          <p>Our Capital is Quality And Honesty - Neomi </p>
        </div>

        {step === 1 && (
          <>
            <div className='mb-4'>
              <label
                htmlFor='services'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Select Services*
              </label>
              <div className=' e__book__service__parent'>
                {skincareServices.map(service => (
                  <div
                    key={service.id}
                    className='flex items-center border p-5'
                  >
                    <input
                      type='checkbox'
                      id={`service-${service.id}`}
                      value={service.id}
                      checked={selectedServices.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                      className='h-4 w-4 '
                    />
                    <label
                      htmlFor={`service-${service.id}`}
                      className='ml-2 text-sm font-medium text-gray-700'
                    >
                      <span className='flex gap-x-2 items-center'>
                        <span>
                          <Image
                            src={service.image}
                            width={100}
                            height={100}
                            alt='image'
                          />
                        </span>
                        <span>
                          <span className=' text-gray-500'>
                            {service.serviceName}
                          </span>{' '}
                          <br />
                          <span className='line-through text-gray-500'>
                            ${service.originalPrice}
                          </span>
                          <span className='ml-1 text-red-600'>
                            ${service.discountedPrice}
                          </span>{' '}
                          <span className='flex items-center gap-x-1'>
                            <LuAlarmClockPlus />
                            {service.time}
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button
              type='button'
              onClick={handleNextStep}
              className='e__service__btn w-full md:py-2'
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className='mb-4'>
              <p className=' my-2 text-red-400'>
                Please Fill Name , Data and Time
              </p>
              <label
                htmlFor='customerName'
                className='block text-sm font-medium text-gray-700'
              >
                Your Name*
              </label>
              <input
                type='text'
                id='customerName'
                name='customerName'
                placeholder='Write your name'
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                required
                className='e__book__input__feild'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700'
              >
                Your Phone*
              </label>
              <input
                type='number'
                id='phone'
                name='phone'
                placeholder='Write Phone Number'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                className='e__book__input__feild'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Your Email*
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Write Email Here'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className='e__book__input__feild'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='date'
                className='block text-sm font-medium text-gray-700'
              >
                Date*
              </label>
              <input
                type='date'
                id='date'
                name='date'
                value={date}
                onChange={e => setDate(e.target.value)}
                min={today}
                required
                className='e__book__input__feild'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='time'
                className='block text-sm font-medium text-gray-700'
              >
                Time*
              </label>
              <div className='mt-2'>
                {/* Generate buttons based on day */}
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].includes(
                  new Date(date).toLocaleString('en-us', { weekday: 'short' })
                ) ? (
                  <div className='grid grid-cols-3 gap-3'>
                    {/* Time slots for Monday to Saturday */}
                    {[
                      '7:00 AM',
                      '8:00 AM',
                      '9:00 AM',
                      '10:00 AM',
                      '11:00 AM',
                      '12:00 PM',
                      '1:00 PM',
                      '2:00 PM',
                      '3:00 PM',
                      '4:00 PM',
                      '5:00 PM',
                      '6:00 PM',
                      '7:00 PM',
                      '8:00 PM'
                    ].map(timeSlot => (
                      <button
                        key={timeSlot}
                        type='button'
                        className={`px-2 py-1 rounded-lg border ${
                          time === timeSlot
                            ? 'bg-green-500 text-white'
                            : 'bg-white text-blue-500'
                        }`}
                        onClick={() => setTime(timeSlot)}
                      >
                        {timeSlot}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className='grid grid-cols-3 gap-3'>
                    {/* Time slots for Sunday */}
                    {['2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(
                      timeSlot => (
                        <button
                          key={timeSlot}
                          type='button'
                          className={`px-2 py-1 rounded-lg border ${
                            time === timeSlot
                              ? 'bg-green-500 text-white'
                              : 'bg-white text-blue-500'
                          }`}
                          onClick={() => setTime(timeSlot)}
                        >
                          {timeSlot}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-between gap-x-5'>
              <button
                type='button'
                onClick={handlePreviousStep}
                className='w-full bg-gray-200 text-sm font-medium rounded-xl md:py-2'
              >
                Previous
              </button>
              <button
                type='button'
                onClick={handleNextStep}
                disabled={!customerName || !date || !time} // Disable "Next" if fields are empty
                className={`w-full e__service__btn md:py-2 ${
                  !customerName || !date || !time
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className='mb-5 border border-dashed p-5'>
              <h3 className=' pb-2 font-medium border-b border-dashed'>
                ## Order Summary for <br />{' '}
                <span className='text-base font-semibold italic'>
                  {customerName}
                </span>
              </h3>

              {/* Booking Date and Time */}
              <div className='bg-white  mt-5 '>
                <div className='flex justify-between border-b border-gray-200 pb-3'>
                  <div>
                    <h4 className='text-base font-medium e__primary__color'>
                      Booking Date
                    </h4>
                    <p className='text-sm text-gray-500'>
                      {new Date(date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <h4 className='text-base font-medium e__primary__color'>
                      Booking Time
                    </h4>
                    <p className='text-sm text-gray-500'>{time}</p>
                  </div>
                </div>

                {/* Service List */}
                <ul className='space-y-3 mt-4'>
                  {selectedServices.map(serviceId => {
                    const service = skincareServices.find(
                      s => s.id === serviceId
                    )
                    return (
                      <li
                        key={service.id}
                        className='flex justify-between text-sm font-medium text-gray-700 border-b border-gray-200 py-2'
                      >
                        <span>{service.serviceName}</span>
                        <span className='font-semibold e__primary__color'>
                          ${service.discountedPrice}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                {/* Total */}
                <div className='flex justify-between mt-4'>
                  <h4 className='text-lg font-semibold text-gray-900'>Total</h4>
                  <h4 className='text-lg font-semibold text-gray-900'>
                    $
                    {selectedServices.reduce((total, serviceId) => {
                      const service = skincareServices.find(
                        s => s.id == serviceId
                      )
                      return total + (service ? service.discountedPrice : 0)
                    }, 0)}
                  </h4>
                </div>
              </div>
            </div>

            <div className='flex justify-between lg:gap-x-10'>
              <button
                type='button'
                onClick={handlePreviousStep}
                className='w-full e__primary__btn md:py-2'
              >
                Previous
              </button>
              <button type='submit' className='w-full e__service__btn md:py-2'>
                Confirm Booking
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}

export default Book
