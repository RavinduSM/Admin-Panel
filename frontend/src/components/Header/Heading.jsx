import React from 'react'
import './Header.css'

function Heading() {
  return (
    <div className='container'>
        <img src="https://baldriverapp.autooze.com/assets/img/vehicle.png" alt="Vehicle" />
        <h1><span style={{color:'white' }} >BA</span>London Transport</h1>
        <button>Logout</button>
    </div>
  )
}

export default Heading