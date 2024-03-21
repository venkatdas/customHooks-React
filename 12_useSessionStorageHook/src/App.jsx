import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useSessionStorage from './hooks/useSessionStorage'
function App() {

const [name, setName] = useSessionStorage("name", "");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default App
