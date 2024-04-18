"use client"
import React from 'react'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import { useContext } from 'react'
import ToggleContext from '@/app/utils/ToggleContext'
import { Toaster } from 'sonner'

const Items = () => {
  
  const {lightMode} = useContext(ToggleContext);

  return (

    <div>
      <Toaster position="top-center" richColors/>
      {lightMode &&
        <div className="flex flex-col bg-white">
          <Navbar />
          <Body />
        </div>
      }
      {!lightMode &&
        <div className="flex flex-col bg-black">
          <Navbar />
          <Body />
        </div>
      }
      </div>
  )
}

export default Items
