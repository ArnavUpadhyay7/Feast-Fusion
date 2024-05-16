"use client"
// import { useSearchParams } from 'next/navigation';
import {React, useState, useEffect} from 'react'
import {useSearchParams} from 'react-dom'

const WatchPage = () => {

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("watchPage"))

    // useEffect(()=>{
    //     const fetchAPI = async () => {
    //       const API = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    //       const jsonData = await API.json();
    //       setData(jsonData);
    //     }
    //     fetchAPI();
    //   },[])


  return (
    <div className='flex justify-center pt-32'>
      <div className='flex gap-60'>
        <div>
          <h2>NAME</h2>
          <h3>Price / description</h3>
          {/* <button className='pt-20'>ADD TO CART</button> */}
        </div>
        <div className='bg-black size-64 rounded-xl'>
          <img className='size-20' src="" alt="IMAGE" />
        </div>
      </div>
    </div>
  )
}

export default WatchPage
