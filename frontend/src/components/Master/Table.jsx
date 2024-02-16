import React, { useState } from 'react'
import {getInputarr}  from './Share';

function Table() {
  const inputarr = getInputarr();


  
    return (
        <table border={1} 
        cellPadding={20}
        style={{ borderCollapse: 'collapse',padding:'15px', border: '2px solid black' }}
        >
         <tbody>
          <tr>
            <th>#</th>
            <th>Driver ID</th>
            <th>Profile Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Mail Id</th>
            <th>NI Number</th>
            <th>Start Date</th>
            <th>Resign Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {inputarr.map((item, index) => (
            
          <tr key={index}>
          <td>#</td>
          <td>Driver ID: {item.driverid}</td>
          <td>Mail ID: {item.mailid}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          {/* Display other fields as needed */}
        </tr>
        ))}


          
         </tbody>

        </table>
    );
  }
  
  export default Table;
  