import React from 'react'
import drop_down from '/images/icon-dropdown.svg'

const hourlyData = [
    {time: "3 PM", temp: "20°", icon: "/images/icon-overcast.webp"},
    {time: "4 PM", temp: "20°", icon: "/images/icon-partly-cloudy.webp"},
    {time: "5 PM", temp: "20°", icon: "/images/icon-sunny.webp"},
    {time: "6 PM", temp: "19°", icon: "/images/icon-overcast.webp"},
    {time: "7 PM", temp: "18°", icon: "/images/icon-snow.webp"},
    {time: "8 PM", temp: "18°", icon: "/images/icon-fog.webp"},
    {time: "9 PM", temp: "17°", icon: "/images/icon-snow.webp"},
    {time: "10 PM", temp: "17°", icon: "/images/icon-overcast.webp"}
]

function HourlyForecast() {
  return (
    <div className='bg-Neutral-900 rounded-xl border w-1/2'>
        <div className='flex justify-between'>
            <h2 className='text-white'>Hourly forecast</h2>
            <div className='flex'>
            <button className='flex'>
                <p className='text-white'>Tuesday</p>
                <img src={drop_down} alt="" />
            </button>
            </div>
        </div>

        <div className="flex flex-col gap-2 ">
        {hourlyData.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center  px-4 py-3 rounded-xl border bg-Neutral-800"
          >
            <div className="flex items-center gap-3">
              <img src={item.icon} alt="" className='w-20' />
              <p className="text-sm text-white">{item.time}</p>
            </div>
            <p className="text-sm font-medium text-white">{item.temp}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HourlyForecast
