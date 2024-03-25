"use client"
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div className='h-screen bg-black text-white pt-40 text-center'>
      <h1 className='text-5xl'>Sorry,</h1>
      <h2 className='text-4xl pt-6'>The Item you searched for does not exist in our menu.</h2>
      <div className='flex justify-center gap-10 pt-10'>
      <Link className='md:px-16 px-8 md:py-5 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl' href='https://forkify-api.herokuapp.com/phrases.html'> Check Our Menu. </Link>
        <Link className='md:px-16 px-8 md:py-5 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl' href='/'>Back to Home Page</Link>
      </div>
      
    </div>
  )
}

export default error
