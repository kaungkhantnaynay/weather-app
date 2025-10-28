import React from 'react'
import search from '/images/icon-search.svg'

function Hero() {
  return (
    <div>
      <h1 className='flex text-white justify-center font-medium text-3xl pt-6'>How's the sky looking today?</h1>
      <div className='flex justify-center gap-3 mt-4 '>
        <div className='flex bg-Neutral-600 items-center rounded-xl overflow-hidden px-4 py-2 max-w-70 w-full gap-2'>
          <img src={search} alt="search" className='w-4 h-4 opacity-70' />
          <input type="text" placeholder='Search for a place...' className='bg-transparent outline-none text-white placeholder-grey-400'/>
        </div>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-xl'>Search</button>
      </div>
    </div>
  )
}

export default Hero
