import React, { useEffect, useState } from 'react'
import {getInputarr}  from './Share';

function Table() {
  // const inputarr = getInputarr();

  const [driver, setDriver] = useState()

  const fetchData = () => {
    fetch("http://localhost:5000/api/driver")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDriver(data)
      })
  }

  useEffect(() => {

    fetchData();
  }, [])

  console.log(driver);



  
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
          {driver && driver.driver.map(drivers =>(
            
          <tr key={drivers._id}>
          <td>#</td>
          <td> {drivers.driverID}</td>
          <td></td>
          <td>{drivers.firstName}</td>
          <td>{drivers.surname}</td>
          <td>{drivers.DOB}</td>
          <td>{drivers.gender}</td>
          <td>{drivers.mobileNo}</td>
          <td>{drivers.mailID}</td>
          <td>{drivers.nicNO}</td>
          <td>{drivers.doStart}</td>
          <td>{drivers.resignedDate}</td>
          <td>{driver.resignedDate =""? "Active" : "Deactive"}</td>
          {/* Display other fields as needed */}
        </tr>
        ))}


          
         </tbody>

        </table>
    );
  }
  
  export default Table;
  