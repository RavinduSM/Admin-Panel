import React from 'react'
import './AddDrivers.css'
import { Link } from 'react-router-dom'
import Table from './Table' ;
import { useState } from 'react';
import FillDetails from './details/FillDetails';


  function AddDrivers() {
    
   
  return (
  
    <div>
        <div className='container1'>
        
        <Link to ="/adddrivers/details">
        <button>  Add New</button>
        </Link>
        
      </div>
      <div className='container2'>
      
        <Table />
        

      </div>
     

    </div>
  )
}

export default AddDrivers