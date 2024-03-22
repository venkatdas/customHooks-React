import { useState } from "react";
import "./App.css";
import useClickOutside from "./hooks/useClickOutside";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const close = () => {
    setIsOpen(false);
    console.log("Click outside detected");
  };
  const nodeRef = useClickOutside(close);
  return (
    <div>
      <button onClick={toggleOpen}>Toggle Dropdown</button>
      {isOpen && (
        <div ref={nodeRef}>
          {/* Dropdown Content */}
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      )}
    </div>
  );
}

export default App;
