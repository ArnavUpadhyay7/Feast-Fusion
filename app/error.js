"use client"
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div className='h-screen bg-black text-white pt-40 text-center px-6'>
    
      <h1 className='text-5xl'>Sorry,</h1>
      <h2 className='text-4xl pt-6'>The Item you searched for does not exist in our menu.</h2>
      <div className='md:flex justify-center gap-10 pt-12'>
        <div>
          <Link className='md:px-16 px-8 md:py-5 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl' href='https://forkify-api.herokuapp.com/phrases.html'> Check Our Menu. </Link>
        </div>
        <div className='md:pt-0 pt-12'>
          <Link className='md:px-16 px-8 md:py-5 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl' href='/'>Back to Home Page</Link>  
        </div>
      </div>
      
    </div>
  )
}

export default error
