import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseIdle = (timeout = 1000 * 60 * 5) => {
  const [isIdle, setIsIdle] = useState(false);
  useEffect(() => {
    let timer;
    //Function to reset the timer

    const resetTimer = () => {
      clearTimeout(timer);
      setIsIdle(false);
      timer = setTimeout(() => {
        setIsIdle(true);
      }, timeout);
    };

    // Events that reset the timer
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("scroll", resetTimer);
    //set the intial timer
    resetTimer();

    //cleanup function

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, [timeout]); // Re-run the effect if the timeout changes
  return isIdle;
};

export default UseIdle;
