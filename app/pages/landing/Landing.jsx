"use client"
import ToggleContext from '@/app/utils/ToggleContext';
import Navbar from '../../components/Navbar';
import Link from 'next/link'
import React, { useContext } from 'react'

const Landing = () => {

  const {lightMode} = useContext(ToggleContext)

  return (
    <>
      {lightMode ? 
        <div className='h-screen bg-white'>
          {/* LIGHT MODE */}
        <Navbar />
        <div className='text-black w-[80vw] mx-auto pt-16 md:flex gap-20'>
          <div className='md:w-[50vw]'>
            <h2 className='md:text-[8vh] text-[5vh] md:mb-[-10px]'>Welcome,</h2>
            <h2 className='text-red-600 text-[6vh] md:text-[10vh] font-semibold'>Feast Fusion.</h2> 
            <p className='hidden md:block pt-6 md:text-[2vh] w-[35vw]'>Your gateway to a fusion of flavors. Explore a diverse menu, from traditional favorites to innovative dishes, all conveniently delivered to your door.</p>
            {/* FOR MOBILE */}
            <div className='md:hidden pt-10 flex justify-center'>
              <Link href='/pages/items' className='px-12 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl'>Explore More</Link>
              </div>
              <div className='md:hidden pt-4 flex justify-center'>
                <button className='px-6 py-4 text-[2vh] font-semibold bg-green-700 hover:bg-green-600 rounded-xl'>
                  <div className='flex justify-around items-center gap-3'>
                    <div>
                      <img className='size-6' src='https://cdn-icons-png.flaticon.com/128/2702/2702602.png'/>
                    </div>
                    <div>
                      Google Sign In 
                    </div>
                  </div>
                </button>
              </div>
              {/* FOR PC */}
              <div className='pt-10 hidden md:flex justify-center gap-6'>
                <Link href='/pages/items' className='md:px-16 md:py-5 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl'> Explore More </Link>
                <button className='md:px-12 md:py-5 text-[2vh] font-semibold bg-green-700 hover:bg-green-600 rounded-xl'>
                  <div className='flex justify-around items-center gap-2'>
                    <div>
                      <img className='size-6' src='https://cdn-icons-png.flaticon.com/128/2702/2702602.png'/>
                    </div>
                    <div>
                      Google Sign In 
                    </div>
                  </div>
                </button>
              </div>
            </div>
          <div className='w-[60vw] pt-10 mx-auto'>
            <img className='rounded-3xl h-[25vh] md:h-[52vh]' src="https://media.istockphoto.com/id/963403554/photo/craft-beef-burger-and-french-fries-sauce-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=ADvEXsSQdDEZ4DjcFqdgeFX-lly7QjYtYja8i57dosE=" alt="Home page image" />
          </div>
        </div>
        </div>
        :
        <div className='h-screen bg-black'>
          {/* DARK MODE */}
          <Navbar />
          <div className='text-white w-[80vw] mx-auto pt-16 md:flex gap-20'>
            <div className='md:w-[50vw]'>
              <h2 className='md:text-[8vh] text-[5vh] md:mb-[-10px]'>Welcome,</h2>
              <h2 className='text-red-600 text-[6vh] md:text-[10vh] font-semibold'>Feast Fusion.</h2> 
              <p className='hidden md:block pt-6 md:text-[2vh] w-[35vw]'>Your gateway to a fusion of flavors. Explore a diverse menu, from traditional favorites to innovative dishes, all conveniently delivered to your door.</p>
              {/* FOR MOBILE */}
              <div className='md:hidden pt-10 flex justify-center'>
              <Link href='/pages/items' className='px-12 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl'>Explore More</Link>
              </div>
              <div className='md:hidden pt-4 flex justify-center'>
                <button className='px-6 py-4 text-[2vh] font-semibold bg-green-700 hover:bg-green-600 rounded-xl'>
                  <div className='flex justify-around items-center gap-3'>
                    <div>
                      <img className='size-6' src='https://cdn-icons-png.flaticon.com/128/2702/2702602.png'/>
                    </div>
                    <div>
                      Google Sign In 
                    </div>
                  </div>
                </button>
              </div>
              {/* FOR PC */}
              <div className='pt-10 hidden md:flex justify-center gap-6'>
                <Link href='/pages/items' className='md:px-16 md:py-5 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl'> Explore More </Link>
                <button className='md:px-12 md:py-5 text-[2vh] font-semibold bg-green-700 hover:bg-green-600 rounded-xl'>
                  <div className='flex justify-around items-center gap-2'>
                    <div>
                      <img className='size-6' src='https://cdn-icons-png.flaticon.com/128/2702/2702602.png'/>
                    </div>
                    <div>
                      Google Sign In 
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className='w-[60vw] pt-10 mx-auto'>
              <img className='rounded-3xl h-[25vh] md:h-[52vh]' src="https://media.istockphoto.com/id/963403554/photo/craft-beef-burger-and-french-fries-sauce-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=ADvEXsSQdDEZ4DjcFqdgeFX-lly7QjYtYja8i57dosE=" alt="Home page image" />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Landing
