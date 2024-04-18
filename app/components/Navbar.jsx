"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import ToggleContext from '../utils/ToggleContext'
import { Toaster, toast } from 'sonner'

const Navbar = () => {

  const {lightMode} = useContext(ToggleContext);
  const {setLightMode} = useContext(ToggleContext);

    const toggleHandler = () => {
      setLightMode(!lightMode);
      lightMode ?   
      toast.success("SWITCHED TO DARK MODE!")
      : 
      toast.success("SWITCHED TO LIGHT MODE!")
    }

  const favouriteItems = useSelector((store)=>store.favourites.items)

  return (

    <div className='pt-4 sticky top-0 z-10'>
      <div className='bg-[#d0cdcd] py-4 flex justify-between items-center md:px-10 px-6 mx-auto w-[90vw] h-[10vh] rounded-xl'>
        <div className='flex items-center justify-center md:gap-6 gap-2'>
          <Link href="/pages/landing"><img className='size-12' src='https://cdn-icons-png.flaticon.com/128/562/562678.png'/></Link>
          <button onClick={toggleHandler} className='px-4 py-1 hover:bg-slate-300 md:bg-white rounded-xl font-semibold'>
          <Toaster position="top-center" richColors/>
            <img className='size-8' src='https://cdn-icons-png.flaticon.com/128/4489/4489231.png'/>
          </button>
        </div>
        <div className='flex md:gap-10 gap-4'>
          <Link href='/pages/items' className='text-2xl font-extralight hover:font-semibold'>Items</Link>
          <Link href='/pages/favourites' className='md:text-2xl font-extralight hover:font-semibold'>Favourites - {favouriteItems.length} items</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
