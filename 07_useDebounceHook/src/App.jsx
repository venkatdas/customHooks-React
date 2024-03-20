import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseDebounce from "./hooks/UseDebounce";

function App() {
  const [inputValue, setInputValue] = useState("");

  const debouncedSearchTerm = UseDebounce(inputValue, 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("mekaing an api call with", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <label htmlFor="">Input</label> <span></span>
      <input
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default App;
