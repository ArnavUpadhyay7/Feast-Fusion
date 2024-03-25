"use client"
import React from 'react'
import Card from './Card'
import { useState,useEffect } from 'react';
import Skimmer from './Skimmer';

const Body = () => {

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

  return (
    <div>
      <div className='flex gap-4 justify-center pt-6'>
        <input onChange={textHandler} className='bg-[#D0CDCD] placeholder:text-black rounded-xl md:px-[2vw] px-[4vw] py-[1.2vh]' placeholder='Search...' type='text' />
        <button onClick={clickHandler} className='px-4 py-1 hover:bg-slate-300 bg-[#D0CDCD] rounded-xl font-semibold'>
            <img className='size-8' src='https://cdn-icons-png.flaticon.com/128/151/151773.png'/>
        </button>
      </div>
      {isLoading ? 
          <Skimmer />
          : 
        <div className='py-10 md:px-20 px-14 flex flex-wrap gap-10 overflow-x-hidden'>
          {data?.recipes.map((val)=>{
            return (
            <Card key={val.recipe_id} heading={val.title} res={val.publisher} imgSrc={val.image_url}/>
            )
          })}
        </div>
      }

    </div>
  )
}

export default Body
