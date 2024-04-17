"use client"
import Card from '@/app/components/Card'
import { clearCart, removeFromCart } from '@/app/utils/FavSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Favourites = () => {
    
  const favouriteItems = useSelector((store)=>store.favourites.items);
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(clearCart())
  }
  const removeItem = (val) => {
    dispatch(removeFromCart(val))
  }

  return (
    <div>
      {favouriteItems.length == 0 ? 
        <h1 className='text-center font-semibold text-4xl pt-10'>Add something to your Favourites</h1>
      :
      <div className='flex justify-center pt-10'>
        <button onClick={removeHandler} className='md:px-16 px-8 md:py-5 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl text-white'>Remove all</button>
      </div>
    }
    <div className='py-10 md:px-20 px-14 flex flex-wrap gap-10 overflow-x-hidden'>
      {favouriteItems.map((val)=>{
        return (
          <div>
            <Card key={val.recipe_id} heading={val.title} res={val.publisher} imgSrc={val.image_url}/>
            <button onClick={()=>removeItem(val)} className='absolute mt-[-70px] ml-[80px] md:px-10 px-8 md:py-4 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl'> Remove </button>
          </div>
          )
      })} 
    </div>
    </div>
  )
}

export default Favourites
