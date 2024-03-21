import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const UseThrottle = (value, limitDelay) => {
  const [throttledValue, setThrottledvalue] = useState(value);

const lastRan = useRef(Date.now());
useEffect(()=>{
    const handler = setTimeout(() => {
        if(Date.now()-lastRan.current>=limitDelay){
            setThrottledvalue(value)
            lastRan.current = Date.now();
        }
    }, limitDelay - (Date.now()-lastRan.current));

    return(()=>{
        clearTimeout(handler)
    })
},[value,limitDelay])

  return throttledValue;
};

export default UseThrottle