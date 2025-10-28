import React from 'react'
import Sunny from '/images/icon-sunny.webp'

function WeatherCard() {
  return (
    <div className='mt-10'>
      <div className= 'flex items-center justify-between w-1/2 py-15 px-8 bg-cover bg-center rounded-2xl' style={{backgroundImage: "url('/images/bg-today-large.svg')"}}>
          <div>
            <h3 className='text-white text-lg font-semibold'>Berlin, Germany</h3>
            <p className='text-white text-sm opacity-90'>Tuesday, Aug5, 2025</p>
          </div>
          <div className='flex flex-row '>
            <img className='w-20' src={Sunny} alt="" />
            <p className='text-6xl text-white font-semibold'>20°</p>
          </div>
      </div>

      <div className='grid grid-cols-4 gap-2 mt-5 text-center w-1/2'>
        <div className='bg-Neutral-800 rounded-xl py-3'>
          <p className='text-white text-start ml-4'>Feels Like</p>
          <p className='text-white text-start  ml-4'>18°</p>
        </div>

        <div className='bg-Neutral-800 rounded-xl py-3'>
          <p className='text-white text-start ml-4'>Humidity</p>
          <p className='text-white text-start ml-4'>46%</p>
        </div>

        <div className='bg-Neutral-800 rounded-xl py-3'>
          <p className='text-white text-start ml-4'>Wind</p>
          <p className='text-white text-start ml-4'>14 km/h</p>
        </div>

        <div className='bg-Neutral-800 rounded-xl py-3'>
          <p className='text-white text-start ml-4'>Precipitation</p>
          <p className='text-white text-start ml-4'>0 mm</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
