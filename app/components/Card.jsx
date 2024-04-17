import React from 'react'

const Card = (props) => {

  return (

      <div className='cursor-pointer md:h-[60vh] h-[60vh] md:w-[20vw] w-[70vw] bg-[#c8c6c6] rounded-2xl hover:scale-[1.1] ease-in duration-200'>
        <div className='flex justify-center'>
          <img className='h-[30vh] md:w-[16vw] w-[60vw] mt-6 rounded-xl' src={props.imgSrc} />
        </div>
        <h1 className='text-center mt-6 text-2xl'>{props.heading}</h1>
        <h1 className='text-center mt-2'>{props.res}</h1>
      </div>
  )
}

export default Card
