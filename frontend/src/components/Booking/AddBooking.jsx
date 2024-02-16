import React from 'react'
import './AddBooking.css'
import { Link } from 'react-router-dom'

function AddBooking() {
  return (
    <div className='container1'>
        <h4>Welcome to the 'Add Booking' 
          section! Here, you can effortlessly
           schedule new bookings for your 
           transportation services. Seamlessly 
           manage all your bookings, including 
           reservation details, customer information, 
           pickup and drop-off locations, and scheduling 
           preferences. Simplify your workflow and ensure 
           smooth operation by efficiently scheduling 
           bookings and coordinating with your drivers. 
           With our intuitive booking system, you can optimize 
           your transportation operations and provide excellent 
           service to your customers. Start adding new bookings 
           now to streamline your operations and enhance productivity!</h4>
        <Link to ="/addbooking/details">
        <button>  Add New</button>
        </Link>
        
    </div>
  )
}

export default AddBooking