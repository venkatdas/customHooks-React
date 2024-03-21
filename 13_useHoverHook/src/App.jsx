import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useHover from './hooks/useHover'
function App() {
const [hoverRef,isHovered] = useHover()
  return (
    <div ref={hoverRef} style={{ color: isHovered ? "blue" : "black" }}>
      {isHovered ? "You're hovering over me!" : "I'm not being hovered over."}
    </div>
  );
}

export default App
