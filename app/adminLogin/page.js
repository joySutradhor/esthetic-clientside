'use client'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Swal from 'sweetalert2'

function AdminLogin () {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const defaultPassword = 'admin123' // Set the default password

  const handleSubmit = e => {
    e.preventDefault()

    // Check if password matches the default password
    if (password === defaultPassword) {
      Swal.fire({
        title: 'Success!',
        text: 'You have logged in successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'The password is incorrect. Please try again.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      })
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-semibold text-center mb-4'>Admin Login</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='relative'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter your password'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none mb-4  '
            />
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute right-3 top-[65%] transform -translate-y-1/2'
            >
              {showPassword ? (
                <FaEyeSlash size={20} className='text-gray-600' />
              ) : (
                <FaEye size={20} className='text-gray-600' />
              )}
            </button>
          </div>

          <button
            type='submit'
            className='w-full p-3 bg-gray-800 text-white rounded-lg  focus:outline-none '
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
