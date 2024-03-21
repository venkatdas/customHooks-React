
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

/**
 * Custom hook that encapsulates setting a timeout.
 *
 * @param {Function} callback - The function to be executed after the timeout.
 * @param {number} delay - Delay in milliseconds for the timeout.
 */
const useTimeout = (callback,delay) => {
  //Use the useRef() hook to create a ref for the callback function.
  const callbackRef = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

useEffect(()=>{
    const timeoutId = setTimeout(() => {
        callbackRef.current()
    }, delay);

    return(()=>{
        clearTimeout(timeoutId)
    })
},[])

//   return <div>useTimeout</div>;
}

export default useTimeout