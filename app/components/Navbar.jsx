"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  return (
    <div className='pt-4'>
      <div className='bg-[#d0cdcd] py-4 flex justify-between items-center md:px-10 px-6 mx-auto w-[90vw] h-[10vh] rounded-xl'>
        <img className='size-12' src='https://cdn-icons-png.flaticon.com/128/562/562678.png'/>
        <div className='flex md:gap-10 gap-4'>
          <Link href='/pages/landing' className='text-2xl font-extralight hover:font-semibold'>Home</Link>
          <Link href='/pages/items' className='text-2xl font-extralight hover:font-semibold'>Items</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
