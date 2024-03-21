import React, { useEffect, useRef } from "react";
/**
 * Custom hook for adding an event listener to a DOM element.
 * @param {string} eventName - Name of the event to listen for.
 * @param {Function} handler - Function to execute when the event fires.
 * @param {HTMLElement | Window} [element=window] - Element to attach the event listener to. Defaults to window.
 */
const useEventListener = (eventName, handler, element = window) => {
  //create ref that stores the handler
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Make sure element supports addEventListener
    // On
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    // Create event listener that calls handler function stored in ref
    const eventListener = (event) => {
      savedHandler.current(event);
    };
    // Add event listener
    element.addEventListener(eventName, eventListener);
    // Remove event listener on cleanup
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName,element]);
  return <div>useEventListener</div>;
};

export default useEventListener;
