// store/action/index.js
import {ADD,DELETE}from"./actionTypes"
const addData = (text: any) => {
    return {
      type: ADD,
      text,
    };
  };
  
  const deleteData = (id: any) => {
    return {
      type: DELETE,
      id,
    };
  };


  export {addData,deleteData}