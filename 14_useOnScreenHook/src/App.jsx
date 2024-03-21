import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useOnScreen from './hooks/useOnScreen'
function App() {

   const [ref, isVisible] = useOnScreen({
     rootMargin: "0px",
     threshold: 0.1, // This means the element is considered visible when 10% of it is in the viewport
   });
  return (
    <div>
      <p>
        The useOnScreen custom hook in React can be used to determine whether a
        component is visible within the viewport, which is particularly useful
        for lazy loading content. This hook relies on the Intersection Observer
        API, a powerful web API that provides a way to asynchronously observe
        changes in the intersection of a target element with an ancestor element
        or with a top-level document's viewport.
      </p>
      <div ref={ref}>
        {" "}
        {/* Attach the ref to the element you want to observe */}
        {isVisible && <h1>I am now visible on screen!</h1>}{" "}
        {/* Conditionally render content based on visibility */}
      </div>
    </div>
  );
}

export default App
