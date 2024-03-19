import "./App.css";
import UseToggle from "./hooks/UseToggle";
function App() {

  const [toggleState,toggleFunc] = UseToggle();
  return (
    <div className="app">
      <button className="btn" onClick={toggleFunc}>
        {toggleState ? "show" : "Hide"}
      </button>
    </div>
  );
}

export default App;
