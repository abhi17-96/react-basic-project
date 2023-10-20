import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const deValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="card">
        <h1>Counter : {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase count
        </button>
        <br />
        <br />
        <button onClick={deValue}>Decrease count (not below 0)</button>
      </div>
    </>
  );
}

export default App;
