import { useState } from "react";
import { useEffect } from "react";
import React from 'react'

export const useDebounce=(value,delay)=> {
    const [debouncedValue,setDebouncedvalue]=useState(value);
      useEffect(()=>{
       const timer= setTimeout(()=>{
            setDebouncedvalue(value);
        },delay);
    return()=> clearTimeout(timer);} ,[value,delay]);

   return debouncedValue;
  
}
