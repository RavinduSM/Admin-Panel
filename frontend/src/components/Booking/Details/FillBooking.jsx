import React from 'react'
import "./FillBooking.css"
import { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function FillBooking() {
  // Profile picture
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        setFile(reader.result);
      };
    }
  };

  
  return (
    <div className='details'>
        <h4>BOOKING DETAILS</h4>
        <div className='leftbar'>
           <h5>Date of Booking</h5> 
           <input type='date' required/> 
           <h5>Customer Mail</h5> 
           <input type='text' required/> 
           <h5>Post code</h5> 
           <input type='text' required/> 

           

           <h5>Destination</h5> 
           <input type='text' required/> 
           <h5>Fare </h5> 
           <input type='text' required/> 
           <h5>Booking sub contracted out to</h5>
           <input type='text' required/> 
           
        </div>
        <div className='rigthtbar'>
        
          
        <h5>Date of Journey</h5> 
           <input type='date' required/>
        <h5>Tel Number</h5> 
          <input type='text' required/>
          <h5>Place of collection</h5> 
           <input type='text' required/>
           <h5>Time of collection</h5>
           <input type='time' required/>
           <h5>Driver ID</h5>
           <input type='text' required/>
           <h5>VRM No</h5>
           <input type='text' required/>
           
           
           

        </div>
        <button>Continue</button>
    </div>
  )
}

export default FillBooking