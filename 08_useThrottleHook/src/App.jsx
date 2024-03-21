import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseThrottle from './hooks/UseThrottle'
import { useEffect } from 'react'
function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const throttledWindowSize = UseThrottle(windowSize,5000)

  useEffect(()=>{
    const handleResize =()=>{
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize',handleResize)
    return(()=>{
      window.removeEventListener('resize',handleResize)
    })
  },[])

  return (
    <div>
      <p>Window width: {throttledWindowSize.width}</p>
      <p>Window height: {throttledWindowSize.height}</p>
    </div>
  );
}

export default App
