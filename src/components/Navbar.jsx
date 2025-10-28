import React from 'react'
import logo from '/images/logo.svg'
import units from '/images/icon-units.svg'
import drop_down from '/images/icon-dropdown.svg'

function Navbar() {
  return (
    <div className='flex justify-between'>
      <img src={logo} alt="logo"/>
      <div>
        <button className='flex items-center gap-1.5 bg-Neutral-600 text-white px-3 py-2 rounded-lg '>
          <img src={units} alt="units"/>
          <p>Units</p>
          <img src={drop_down} alt=""/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
