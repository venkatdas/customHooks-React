import React from 'react'
import { useRef, useEffect} from 'react'
// Custom hook to get the previous value of a prop or state
const UsePrevious = (value) => {
  // Use useRef to store the previous value
  const ref = useRef();
  useEffect(() => {
    // Store current value in ref
    ref.current = value; // Only re-run if value changes
  }, [value]);
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export default UsePrevious