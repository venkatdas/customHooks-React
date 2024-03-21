import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useEventListener from './hooks/useEventListener'
function App() {

const handleClick=(event)=>{
  console.log("Clicked",event);
}

  useEventListener("click", handleClick);
  useEventListener('resize',()=>console.log("window resized"))

  return (
  <div>Click anywhere on this page.</div>
  )
}

export default App
