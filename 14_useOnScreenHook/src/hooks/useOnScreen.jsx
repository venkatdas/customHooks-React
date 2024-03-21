import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
//Options to configure the Intersection Observer.
const useOnScreen = (options) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  // Ref to attach to the element we want to observe
  const ref = useRef();

  useEffect(() => {
    // Creating an Intersection Observer instance with the callback and options
    const observer = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      options
    );
    // If the ref is attached to an element, start observing that element
    if (ref.current) {
      observer.observe(ref.current);
    }
    // Cleanup function to unobserve the element when the component unmounts or options change
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]); // Re- run when options change

  return [ref, isOnScreen];
};

export default useOnScreen;
