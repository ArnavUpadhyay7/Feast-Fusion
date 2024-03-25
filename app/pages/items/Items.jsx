"use client"
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import { useState } from 'react'

import React from 'react'

const Items = () => {
    const [lightMode, setLightMode] = useState(false);

    const toggleHandler = () => {
      setLightMode(!lightMode);
    }

  return (
    <div>
      {lightMode &&
        <div className="flex flex-col bg-white">
          <Navbar />
            <button onClick={toggleHandler} className='absolute md:top-9 top-7 md:left-[12vw] left-[29vw] md:w-[4vw] w-[17vw] h-[5vh] px-4 py-1 hover:bg-slate-300 md:bg-white rounded-xl font-semibold'>
                <img src='https://cdn-icons-png.flaticon.com/128/4489/4489231.png'/>
            </button>
          <Body />
        </div>
      }
      {!lightMode &&
        <div className="flex flex-col bg-black">
          <Navbar />
          <button onClick={toggleHandler} className='absolute md:top-9 top-7 md:left-[12vw] left-[28vw] md:w-[4vw] w-[18vw] h-[5vh] px-4 py-1 hover:bg-slate-300 md:bg-white rounded-xl font-semibold'>
              <img src='https://cdn-icons-png.flaticon.com/128/5915/5915194.png'/>
          </button>
          <Body />
        </div>
      }
      </div>
  )
}

export default Items
