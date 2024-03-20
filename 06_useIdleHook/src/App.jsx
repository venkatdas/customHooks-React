import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseIdle from './hooks/UseIdle'
function App() {
const isIdle = UseIdle(10000)
  return (
   <div>
{isIdle? <p>You have been idlefor a while</p>: <p>Hello User....!</p>}
   </div>
  )
}

export default App
