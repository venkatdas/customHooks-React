import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useTimeout from './hooks/useTimeout'
function App() {
const [message, setMessage] = useState("waiting for timeout...!")
useTimeout(()=>{
  setMessage('timeout completed')
},5000)
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App
