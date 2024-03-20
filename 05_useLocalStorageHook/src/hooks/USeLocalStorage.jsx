import React, { useState } from 'react'
/**
 * useLocalStorage: A hook that manages a single localStorage key-value pair.
 *
 * @param key - The localStorage key to manage. like saved and retrieving
 * @param initialValue - The initial value for the key; used if no value is already stored.
 * @returns An array with the current value associated with the key, and a setter function.
 */
const USeLocalStorage = (key, intialValue) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      console.log("item",item);
      // Parse stored json or, if none, return initialValue
      return item ? JSON.parse(item) : intialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return intialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

        //save State
        setStoredValue(valueToStore)
        //save to local storage
        window.localStorage.setItem(key,JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue,setValue];
}

export default USeLocalStorage