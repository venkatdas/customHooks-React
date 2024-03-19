import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseWindow from './hooks/UseWindow'
function App() {
const {width, height} =UseWindow()

console.log(width,height);
  return (
    <div>
      <p>
        The window size is {width} x {height}.
      </p>
      {width < 600 ? (
        <p>You are on a small screen.</p>
      ) : (
        <p>You are on a large screen.</p>
      )}
    </div>
  );
}

export default App
