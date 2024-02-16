import React from 'react'
import "./FillDetails.css"
import { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Table, { setObjectData } from '../Table';

function FillDetails() {
  
  // Profile picture
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        setInputdata({ ...inputdata, image: reader.result });
      };
    }
  };
  const [file, setFile] = useState(null); // Define the 'file' state variable

  const [inputdata,setInputdata] =useState({
    driverid:"",
    mailid: "",
    first:"",
    address:"",
    nino: "",
    vehdetails: "",
    dateofstart:"",
    phone: "",
    surname:"",
    dob:"",
    postalcode: "",
    pco:"",
    vrm:"",
    resign:"",
    gender:"",
    image: null
    

  });

  const [inputarr,setInputarr] = useState([]);
  let{driverid,mailid} =inputdata;

  function changehandle(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
    
    
  };
  function handle(){
    setInputarr([...inputarr,{driverid,mailid}]);
    console.log(inputarr);
    setInputdata({ driverid:"",mailid: "",first:"",
    address:"",
    nino: "",
    vehdetails: "",
    dateofstart:"",
    phone: "",
    surname:"",
    dob:"",
    postalcode: "",
    pco:"",
    vrm:"",
    resign:"",
    gender:"",
    image: null})
   

  };
  function handleGenderChange(event) {
    setInputdata({ ...inputdata, gender: event.target.value });
  }
  function handlePhoneChange(phone) {
    setInputdata({ ...inputdata, phone });
  }
  /*function handleContinue() {
    handleFormData(inputdata);
  }*/

  
  return (
    <div className='details'>
        <h4>Profile details</h4>
        <div className='leftbar'>
           <h5>Driver Id</h5> 
           <input type='text' name='driverid' value={inputdata.driverid} onChange={changehandle} /> 
           <h5>Mail Id</h5> 
           <input type='text' name ='mailid' value={inputdata.mailid} onChange={changehandle} required/> 
           <h5>First Name</h5> 
           <input type='text' name ='first' value={inputdata.first} onChange={changehandle} required/> 

           <h5>Gender</h5> 
           <div className='gender-form' >
           
           <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={inputdata.gender === "male"}
            onChange={handleGenderChange}
            
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={inputdata.gender === "female"}
            onChange={handleGenderChange}

            
          />
          Female
        </label>
           </div>

           <h5>Address</h5> 
           <input type='text' name='address' value={inputdata.address} onChange={changehandle} required/> 
           <h5>NI No </h5> 
           <input type='text' name='nino' value={inputdata.nino} onChange={changehandle} required/> 
           <h5>Vehicle Details</h5>
           <input type='text' name='vehdetails' value={inputdata.vehdetails} onChange={changehandle} required/> 
           
           <h5>Date of Start</h5>
           <input type='date' name='dateofstart' value={inputdata.dateofstart} onChange={changehandle} required/> 
        </div>
        <div className='rigthtbar'>
            <h5>Mobile No</h5> 
            <PhoneInput className='PhoneInput' style={{ marginLeft: '50px' , width: '500px' }}
          country={'gb'}
          
          
          inputProps={{
            required: true,
            
          }}
          onChange={handlePhoneChange}
          /*name='mobno' value={inputdata.mobno} onChange={changehandle}*/
          
        /> 
        <h5>Profile Picture</h5>
        {file && <img src={file} alt="Profile Picture" style={{  width: '60px', height: '60px' , marginLeft: '50px' }} />}
        <input type='file' onChange={handleChange}></input>
          
        <h5>Sure Name</h5> 
           <input type='text' name='surname' value={inputdata.surname} onChange={changehandle} required/>
        <h5>Date of Birth</h5> 
          <input type='date' name='dob' value={inputdata.dob} onChange={changehandle} required/>
          <h5>Postal Code</h5> 
           <input type='text' name='postalcode' value={inputdata.postalcode} onChange={changehandle} required/>
           <h5>PCO Badge No</h5>
           <input type='text' name='pco' value={inputdata.pco} onChange={changehandle}  required/>
           <h5>VRM No</h5>
           <input type='text' name='vrm' value={inputdata.vrm} onChange={changehandle} required/>
           
           <h5>Resign Date</h5>
           <input type='date' name='resign' value={inputdata.resign} onChange={changehandle} required/>
          

        </div>
        <button onClick={handle}>Continue</button>
       
        
    </div>
  )
}

export default FillDetails 
