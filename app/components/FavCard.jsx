import React from 'react'

const FavCard = (props) => {
  return (
    <div className='flex'>
      <div>
        <h2>{props.publisher}</h2>
        <h2>{props.title}</h2>
      </div>
      <div>
        <img src={props.image_url}/>
        <button>Remove item</button>
      </div>
    </div>
  )
}

export default FavCard
