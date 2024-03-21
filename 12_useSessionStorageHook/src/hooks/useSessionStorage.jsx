import React from 'react'
import { useState } from 'react';
const useSessionStorage = (key, initialValue) => {
  // Get an item from sessionStorage and initialize state with it
  // or with the initial value if the key doesn't exist in sessionStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // A function to set both the state and the sessionStorage item
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save to state
      setStoredValue(valueToStore);
      // Save to sessionStorage
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return    [storedValue, setValue];
}

export default useSessionStorage