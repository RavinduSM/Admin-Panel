import React from 'react'
import "./FillDetails.css"
import { useState } from 'react';
import axios from 'axios';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Table, { setObjectData } from '../Table';
import { format } from 'date-fns';

function FillDetails() {

  const handleSubmit = (event) => {
    const driverID = event.target.driverID.value;
    const mailID = event.target.mailID.value;
    const firstName = event.target.firstName.value;
    const surname = event.target.surname.value;
    const gender = event.target.gender.value;
    const address = event.target.address.value;
    const nicNO = event.target.nicNO.value;
    const vehicleDetails = event.target.vehicleDetails.value;
    const doStart = event.target.doStart.value;
    // const mobileNo = event.target.mobileNo.value;
    const profiePicture = event.target.profiePicture.value;
    const DOB = event.target.DOB.value;
    const postalCode = event.target.postalCode.value;
    const pcoBadgeNumber = event.target.pcoBadgeNumber.value;
    const vrmNo = event.target.vrmNo.value;
    const resignedDate = event.target.resignedDate.value;
    axios.post('http://localhost:5000/api/driver/', {
      driverID,
      mailID,
      firstName,
      surname,
      gender,
      address,
      nicNO,
      vehicleDetails,
      doStart,
      mobileNo: '0718861390',
      profiePicture,
      DOB,
      postalCode,
      pcoBadgeNumber,
      vrmNo,
      resignedDate,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }


  
  // // Profile picture
  // const handleChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(selectedFile);
  //     reader.onload = () => {
  //       setInputdata({ ...inputdata, image: reader.result });
  //     };
  //   }
  // };
  // const [file, setFile] = useState(null); // Define the 'file' state variable

  // const [inputdata,setInputdata] =useState({
  //   driverid:"",
  //   mailid: "",
  //   first:"",
  //   address:"",
  //   nino: "",
  //   vehdetails: "",
  //   dateofstart:"",
  //   phone: "",
  //   surname:"",
  //   dob:"",
  //   postalcode: "",
  //   pco:"",
  //   vrm:"",
  //   resign:"",
  //   gender:"",
  //   image: null
    

  // });

  // const [inputarr,setInputarr] = useState([]);
  // let{driverid,mailid} =inputdata;

  // function changehandle(e){
  //   setInputdata({...inputdata,[e.target.name]:e.target.value})
    
    
  // };
  // function handle(){
  //   setInputarr([...inputarr,{driverid,mailid}]);
  //   console.log(inputarr);
  //   setInputdata({ 
  //   driverid:"",
  //   mailid: "",
  //   first:"",
  //   address:"",
  //   nino: "",
  //   vehdetails: "",
  //   dateofstart:"",
  //   phone: "",
  //   surname:"",
  //   dob:"",
  //   postalcode: "",
  //   pco:"",
  //   vrm:"",
  //   resign:"",
  //   gender:"",
  //   image: null})
   

  // };
  // function handleGenderChange(event) {
  //   setInputdata({ ...inputdata, gender: event.target.value });
  // }
  // function handlePhoneChange(phone) {
  //   setInputdata({ ...inputdata, phone });
  // }
  /*function handleContinue() {
    handleFormData(inputdata);
  }*/

  
  return (
    <div className='details'>
      <form onSubmit={handleSubmit}>
        <h4>Profile details</h4>
        <div className='leftbar'>
           <h5>Driver Id</h5> 
           <input type='text' name='driverID'  /> 
           <h5>Mail Id</h5> 
           <input type='text' name ='mailID'  /> 
           <h5>First Name</h5> 
           <input type='text' name ='firstName'  /> 

           <h5>Gender</h5> 
           <div className='gender-form' >
           
           <label>
          <input
            type="radio"
            name="gender"
            value="male"
            
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"

            
          />
          Female
        </label>
           </div>

           <h5>Address</h5> 
           <input type='text' name='address'  /> 
           <h5>NI No </h5> 
           <input type='text' name='nicNO' /> 
           <h5>Vehicle Details</h5>
           <input type='text' name='vehicleDetails'  /> 
           
           <h5>Date of Start</h5>
           <input type='dateFormat(date, "yyyy-mm-dd")'  placeholder="yyyy-mm-dd" name='doStart'  /> 
        </div>
        <div className='rigthtbar'>
            <h5>Mobile No</h5> 
            <PhoneInput className='PhoneInput' style={{ marginLeft: '50px' , width: '500px' }}
          country={'gb'}
          
          
          inputProps={{
            required: true,
            
          }}
          name="mobileNo"
          // onChange={handlePhoneChange}
          /*name='mobno' value={inputdata.mobno} onChange={changehandle}*/
          
        /> 
        <h5>Profile Picture</h5>
        
        <input type='filr'  name='profiePicture'></input>
          
        <h5>Sure Name</h5> 
           <input type='text' name='surname'  />
        <h5>Date of Birth</h5> 
          <input type='dateFormat(date, "yyyy-mm-dd")'  placeholder="yyyy-mm-dd" name='DOB'  />
          <h5>Postal Code</h5> 
           <input type='text' name='postalCode'  />
           <h5>PCO Badge No</h5>
           <input type='text' name='pcoBadgeNumber'  />
           <h5>VRM No</h5>
           <input type='text' name='vrmNo'  />
           
           <h5>Resign Date</h5>
           <input type='dateFormat(date, "yyyy-mm-dd")'  placeholder="yyyy-mm-dd" name='resignedDate'  />
          

        </div>
        <button type='submit' >Continue</button>
       
        </form>   
    </div>
  )
}

export default FillDetails 
