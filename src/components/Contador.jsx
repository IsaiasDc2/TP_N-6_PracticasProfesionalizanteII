import { useState } from "react";
import "./Contador.css";

function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetear = () => {
    setCount(0);
  };

  return (
    <div className="contador">
      <h1>Contador</h1>
      <h2
        style={{
          color: count > 0 ? "black" : "red",
        }}
      >
        {count}
      </h2>

      <div className="botones">
        <button onClick={incrementar}>
          +1
        </button>

        <button
          onClick={decrementar}
          disabled={count === 0}
        >
          -1
        </button>

        <button onClick={resetear}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Contador;