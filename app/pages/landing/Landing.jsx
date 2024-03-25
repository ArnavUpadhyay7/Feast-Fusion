import Navbar from '../../components/Navbar';
import Link from 'next/link'
import React from 'react'

const Landing = () => {
  return (
    <div className='h-screen bg-black'>
      <Navbar />
      <div className='text-white w-[80vw] mx-auto pt-16 md:flex gap-20'>
        <div className='md:w-[50vw]'>
          <h2 className='md:text-[8vh] text-[5vh] md:mb-[-10px]'>Welcome,</h2>
          <h2 className='text-red-600 text-[6vh] md:text-[10vh] font-semibold'>Feast Fusion.</h2> 
          <p className='hidden md:block pt-6 md:text-[2vh] w-[35vw]'>Your gateway to a fusion of flavors. Explore a diverse menu, from traditional favorites to innovative dishes, all conveniently delivered to your door.</p>
          <div className='pt-10 flex justify-center'>
            <Link href='/pages/items' className='md:px-16 px-8 md:py-5 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl'>Explore More</Link>
          </div>
        </div>
        <div className='w-[60vw] pt-10 mx-auto'>
          <img className='rounded-3xl h-[25vh] md:h-[52vh]' src="https://media.istockphoto.com/id/963403554/photo/craft-beef-burger-and-french-fries-sauce-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=ADvEXsSQdDEZ4DjcFqdgeFX-lly7QjYtYja8i57dosE=" alt="Home page image" />
        </div>
      </div>
    </div>
  )
}

export default Landing
