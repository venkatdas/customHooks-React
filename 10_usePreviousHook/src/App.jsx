import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UsePrevious from "./hooks/UsePrevious";
function App() {
  const [count, setCount] = useState(0);

  const prevCount = UsePrevious(count);

  return (
    <div>
      <h1>
        Now: {count}, Before:{prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
