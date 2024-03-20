import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import USeLocalStorage from './hooks/USeLocalStorage'

function App() {

  //two different examples
  const [name, setName] = USeLocalStorage('name' ,'')
  const [count, setCount] = USeLocalStorage("counter", 0);


  return (
    // <div>
    //   <input type="text" placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)} />

    //   <p>Hello, {name}</p>
    // </div>
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default App
