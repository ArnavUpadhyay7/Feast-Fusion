"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import ToggleContext from '../utils/ToggleContext'
import { Toaster, toast } from 'sonner'
import { signOut } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../config/firebase'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const {lightMode} = useContext(ToggleContext);
  const {setLightMode} = useContext(ToggleContext);
  const [hamburger, sethamburger] = useState(false)

  const favouriteItems = useSelector((store)=>store.favourites.items);

    const toggleHandler = () => {
      setLightMode(!lightMode);
      lightMode ?   
      toast.success("SWITCHED TO DARK MODE!")
      : 
      toast.success("SWITCHED TO LIGHT MODE!")
    }

  const router = useRouter()
  const googleSignOut = async() => {
    const result = await signOut(auth)
    router.push('/pages/landing')
  }
  const googleSignIn = async() => {
    const result = await signInWithPopup(auth, provider);
    console.log(result)
    router.push('/pages/items')
  }
  const hamburgerToggle = () => {
    sethamburger(!hamburger)
  }

  return (

    <div className='pt-4 sticky top-0 z-10'>
      <div className='bg-[#d0cdcd] py-4 flex justify-between items-center md:px-10 px-6 mx-auto w-[90vw] h-[10vh] rounded-xl'>
        <div className='flex items-center justify-center md:gap-6 gap-2'>
          <Link href="/pages/landing"><img className='md:size-12 size-10' src='https://cdn-icons-png.flaticon.com/128/562/562678.png'/></Link>
          <button onClick={toggleHandler} className='px-4 py-1 hover:bg-slate-300 md:bg-white rounded-xl font-semibold'>
          <Toaster position="top-center" richColors/>
            {lightMode ? 
              <img className='size-8' src='https://cdn-icons-png.flaticon.com/128/4489/4489231.png'/>
              :
              <img className='size-8' src='https://cdn-icons-png.flaticon.com/128/5915/5915194.png'/>
            }
          </button>
        </div>
        <div className='flex items-center gap-5'>
          {
            auth.currentUser &&
            <div className='flex justify-center items-center gap-5'>
              <p className='hidden md:flex text-semibold text-xl'>Welcome, {auth.currentUser?.displayName}</p>
              <img className='size-12 md:size-14 rounded-full' src={auth.currentUser?.photoURL}/>
            </div>
          }
          {
            hamburger ?
              <div>
                <button onClick={hamburgerToggle}>
                  <img className='size-10' src='https://cdn-icons-png.flaticon.com/128/2099/2099238.png'/>
                </button>
                <div className='flex flex-col items-center absolute mt-6 md:mt-10 right-5 md:right-20 h-[40vh] w-[70vw] md:h-[40vh] md:w-[20vw] bg-gray-400 rounded-3xl'>
                  <div className='my-5 flex flex-col justify-center gap-3 items-center'>
                    <Link href='/' className='md:text-2xl text-md font-semibold hover:text-red-500'>Home</Link>
                    <Link href='/pages/items' className='md:text-2xl text-md font-semibold hover:text-red-500'>Items</Link>
                    <Link href='/pages/favourites' className='md:text-2xl text-md font-semibold hover:text-red-500'>Favourites ({favouriteItems.length} items)</Link>
                  </div>
                  <div>
                    {
                      auth.currentUser ?
                        <button onClick={googleSignOut} className='md:px-8 px-8 md:py-3 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl'>Sign Out</button>
                      : 
                      <button onClick={googleSignIn} className='px-4 md:px-6 py-3 md:py-4 text-[2vh] font-semibold bg-green-600 hover:bg-green-700 rounded-xl'>
                        <div className='flex justify-around items-center gap-3'>
                          <div>
                            <img className='size-6' src='https://cdn-icons-png.flaticon.com/128/2702/2702602.png'/>
                          </div>
                          <div>
                            Google Sign In 
                          </div>
                        </div>
                      </button>
                    }
                  </div>
                </div>
              </div>
            :
          <button onClick={hamburgerToggle}>
            <img className='size-10' src='https://cdn-icons-png.flaticon.com/128/10486/10486773.png'/>
          </button>
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar
