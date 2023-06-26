import React, { useState } from 'react'

export const useInputData = (initialState) => {
  const [inputData, setInputData]=useState(initialState);

  const updateInput = (contactInfo)=>{
    setInputData(contactInfo)
  }

  const handlerInputData = (e) =>{
    setInputData(prev => {
      const newInputData = {...prev};
      newInputData[e.target.name] = e.target.value;
      return(newInputData);
    });
  }
  return ([inputData, handlerInputData, updateInput]);
}
