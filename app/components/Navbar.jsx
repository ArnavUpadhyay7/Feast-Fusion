"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
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

  const favouriteItems = useSelector((store)=>store.favourites.items);

    const toggleHandler = () => {
      setLightMode(!lightMode);
      lightMode ?   
      toast.success("SWITCHED TO DARK MODE!")
      : 
      toast.success("SWITCHED TO LIGHT MODE!")
    }

  const googleSignOut = async() => {
    const result = await signOut(auth)
    console.log(result)
  }

  const router = useRouter()

  const googleSignIn = async() => {
    const result = await signInWithPopup(auth, provider);
    console.log(result)
    router.push('/pages/items')
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
        {/* ONLY FOR PC FOR NOW*/}
        {/* HAVE TO MAKE A RESPONSIVE NAVBAR  */}
        {
          auth.currentUser ?
          <div className='md:flex hidden justify-center items-center gap-2'>
            <p className='text-semibold text-xl'>{auth.currentUser?.displayName}</p>
            <img className='size-14 rounded-full' src={auth.currentUser?.photoURL}/>
            <button onClick={googleSignOut} className='md:px-4 px-8 md:py-2 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl'>Sign Out</button>
          </div>
          : 
        <button onClick={googleSignIn} className='px-6 py-4 text-[2vh] font-semibold bg-green-700 hover:bg-green-600 rounded-xl'>
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
        <div className='flex md:gap-10 gap-3 items-center'>
          <Link href='/pages/items' className='md:text-2xl text-sm font-semibold hover:text-red-500'>Items</Link>
          <Link href='/pages/favourites' className='md:text-2xl md:flex hidden md:w-full w-24 text-sm font-semibold hover:text-red-500'>Favourites ({favouriteItems.length} items)</Link>
          <Link href='/pages/favourites' className='md:hidden w-24 text-sm font-semibold'>Fav ({favouriteItems.length} items)</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
