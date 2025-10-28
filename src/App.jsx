import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WeatherCard from './components/WeatherCard'
import DailyForecast from './components/DailyForecast'
import WeatherList from './components/WeatherList'
import HourlyForecast from './components/HourlyForecast'

function App() {

  return (
    <div className='bg-Neutral-900 h-screen px-20 py-8'>
      <Navbar/>
      <Hero/>
      <WeatherCard/>
      <WeatherList/>
      <HourlyForecast/>
    </div>
  )
}

export default App
