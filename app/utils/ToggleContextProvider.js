"use client"
import React, { useState } from 'react'
import ToggleContext from './ToggleContext'

const ToggleContextProvider = ({children}) => {
    
  const [lightMode, setLightMode] = useState(false);

  return (
    <ToggleContext.Provider value={{lightMode, setLightMode}}>
      {children}
    </ToggleContext.Provider>
  )
}

export default ToggleContextProvider
