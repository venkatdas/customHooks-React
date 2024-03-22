import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const useClickOutside = (handlerFunc) => {
  const ref = useRef();

  console.log(ref);

  useEffect(() => {
    const handleClickOutside = (e) => {
        console.log(e);
      if (ref.current && !ref.current.contains(e.target)) {
        handlerFunc();
        console.log('click happens at ouside');
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handlerFunc]);

  return ref;
};

export default useClickOutside;
