import React, { useState } from 'react'

export const useInputData = (initialState) => {
  const [inputData, setInputData]=useState(initialState);

  const handlerInputData = (e) =>{
    setInputData(prev => {
      const newInputData = {...prev};
      newInputData[e.target.name] = e.target.value;
      console.log(newInputData);
      return(newInputData);
    });
  }
  return ([inputData, handlerInputData, setInputData]);
}
