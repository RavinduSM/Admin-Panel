
import React from 'react'

function Share() {
  return (
    <div>Share</div>
  )
}

export default Share


let inputarr = [];

export const setInputarr = (newInputarr) => {
  inputarr = newInputarr;
  console.log(inputarr); 
  
};

export const getInputarr = () => {
     
    return inputarr;
};
 