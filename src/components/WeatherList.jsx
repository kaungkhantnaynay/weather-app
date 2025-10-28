import React from 'react'
import DailyForecast from './DailyForecast'
import { weather } from '../data'

function WeatherList() {
  return (
    <div className='bg-Neutral-900 mt-8 '>
        <h2 className='text-white text-xl font-bold mb-4'>Daily forecast</h2>
        <div className='flex gap-2 w-1/2 h-35'>

      {weather.map((item,index)=>(
        <DailyForecast
            key={index}
            title={item.title}
            image={item.image}
            first={item.first}
            second={item.second}
            />
      ))}
        </div>
    </div>
  )
}

export default WeatherList
