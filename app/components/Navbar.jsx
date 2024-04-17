"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const favouriteItems = useSelector((store)=>store.favourites.items)

  return (

    // TO DO's
    // Make navbar fixed (sticky top-0) and bg-blur
    // make the toggleMode icon/button on navbar
    // and use it's value in body (another slice in redux)
    // Lazy load items

    <div className='pt-4'>
      <div className='bg-[#d0cdcd] py-4 flex justify-between items-center md:px-10 px-6 mx-auto w-[90vw] h-[10vh] rounded-xl'>
        <Link href="/pages/landing"><img className='size-12' src='https://cdn-icons-png.flaticon.com/128/562/562678.png'/></Link>
        <div className='flex md:gap-10 gap-4'>
          <Link href='/pages/items' className='text-2xl font-extralight hover:font-semibold'>Items</Link>
          <Link href='/pages/favourites' className='md:text-2xl font-extralight hover:font-semibold'>Favourites - {favouriteItems.length} items</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
