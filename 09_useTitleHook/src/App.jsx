import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseTitle from "./hooks/UseTitle";
function App() {
  UseTitle("My Custom Title");

  return (
    <div>
      <h1>Welcome to My Page</h1>
    </div>
  );
}

export default App;
