"use client"
import Navbar from '@/app/components/Navbar'
import React, { useContext } from 'react'
import Favourites from './Favourites'
import ToggleContext from '@/app/utils/ToggleContext'

const page = () => {

  const {lightMode} = useContext(ToggleContext)

  return (
    <div>
    {lightMode ?
      <div className='bg-white min-h-screen'>
      <Navbar />
      <Favourites />
      </div>
      :
      <div className='bg-black min-h-screen'>
        <Navbar />
        <Favourites />
      </div>
    }
    </div>
  )
}

export default page
