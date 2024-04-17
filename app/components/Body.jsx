"use client"
import React from 'react'
import Card from './Card'
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import userOnlineStatus from '../utils/userOnlineStatus';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/FavSlice';

const Body = () => {

  const onlineStatus = userOnlineStatus();

  const [data, setData] = useState(null);
  const [text,setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const textHandler = (e) => {
    setText(e.target.value)
    console.log(text)
  }
  const clickHandler = () => {
      const fetchAPI = async () => {
        const API = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${text}`);
        const jsonData = await API.json();
        setData(jsonData);
      }
      fetchAPI();
  }

  useEffect(()=>{
    const fetchAPI = async () => {
      const API = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
      const jsonData = await API.json();
      setData(jsonData);
      setIsLoading(false)
    }
    fetchAPI();
  },[])

  const dispatch = useDispatch()
  const favouriteHandler = (val) => {
    dispatch(addToCart(val))
  }

  if(onlineStatus===false)
    return (
  <div className='h-screen text-center pt-20'>
    <div className='text-red-500 md:text-4xl text-xl font-semibold'>LOOKS LIKE YOU ARE OFFLINE.</div>
    <div className='text-red-400 md:text-3xl text-[3vh] px-10 pt-5'>Please check your internet connection and try again!!</div>
  </div>
    );

  return (
    <div>
      <div className='flex gap-4 justify-center pt-6'>
        <input onChange={textHandler} className='bg-[#D0CDCD] placeholder:text-black rounded-xl md:px-[2vw] px-[4vw] py-[1.2vh]' placeholder='Search...' type='text' />
        <button onClick={clickHandler} className='px-4 py-1 hover:bg-slate-300 bg-[#D0CDCD] rounded-xl font-semibold'>
            <img className='size-8' src='https://cdn-icons-png.flaticon.com/128/151/151773.png'/>
        </button>
      </div>
      {isLoading ? 
          <Shimmer />
          : 
        <div className='py-10 md:px-20 px-14 flex flex-wrap gap-10 overflow-x-hidden'>
          {data?.recipes.map((val)=>{
            return (
              <div>
                <Card key={val.recipe_id} heading={val.title} res={val.publisher} imgSrc={val.image_url}/>
                <button onClick={()=>favouriteHandler(val)} className='absolute mt-[-70px] ml-[50px] md:px-10 px-8 md:py-4 py-4 text-[2vh] font-semibold bg-red-600 hover:bg-red-800 rounded-xl'> Add to Favourites </button>
              </div>
            )
          })}
        </div>
      }

    </div>
  )
}

export default Body
