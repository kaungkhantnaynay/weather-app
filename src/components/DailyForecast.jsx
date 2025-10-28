import React from 'react'

function DailyForecast({title,image,first,second}) {
  return (
      <div className='flex flex-col items-center justify-center w-24 py-4 rounded-2xl border bg-Neutral-800 '>
        <p className='text-white flex justify-center items-center'>{title}</p>
        <img src={image} alt="" />
        <div className='flex justify-between'>
          <p className='text-white'>{first}</p>
          <p className='text-white'>{second}</p>
        </div>
      </div>
  )
}

export default DailyForecast
