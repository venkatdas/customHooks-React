import React, { useEffect, useState } from "react";

const UseDebounce = (value, delay) => {
  const [debouncedValue, setdebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setdebouncedValue(value);
    }, delay);

    // Return a cleanup function that will be called on component unmount
    // or if value or delay changes
    return () => {
      clearTimeout(handler);
    };
  }, [value,delay]);


  return debouncedValue;
};

export default UseDebounce;
