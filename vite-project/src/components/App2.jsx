import { useState } from 'react';

export default function App2({ setOption2 }) {
  // States for Real Calculator
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  // Calculator Functions
  const handleDigit = (digit) => {
    if (waitingForNewValue) {
      setDisplay(String(digit));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? String(digit) : display + String(digit));
    }
  };

  const handleOperator = (op) => {
    if (operator && !waitingForNewValue) {
      const current = parseFloat(display);
      let result = 0;
      switch (operator) {
        case "+": result = prevValue + current; break;
        case "-": result = prevValue - current; break;
        case "*": result = prevValue * current; break;
        case "/": result = prevValue / current; break;
        default: return;
      }
      setDisplay(String(result));
      setPrevValue(result);
    } else {
      setPrevValue(parseFloat(display));
    }
    setOperator(op);
    setWaitingForNewValue(true);
  };

  const handleEqual = () => {
    if (!operator || prevValue === null) return;
    const current = parseFloat(display);
    let result = 0;
    switch (operator) {
      case "+": result = prevValue + current; break;
      case "-": result = prevValue - current; break;
      case "*": result = prevValue * current; break;
      case "/": result = prevValue / current; break;
      default: return;
    }
    setDisplay(String(result));
    setPrevValue(result);
    setOperator(null);
    setWaitingForNewValue(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  };

  return (
    <>
      <section id="Calculator-App">
        <div>
          <h1>CALCULATOR BUTTONS</h1>
        </div>

        {/* Display */}
        <div>
          <input
            type="text"
            value={display}
            readOnly
          />
        </div>

        {/* BOTTONS */}
        <div>
          <button onClick={() => handleDigit(7)}>7</button>
          <button onClick={() => handleDigit(8)}>8</button>
          <button onClick={() => handleDigit(9)}>9</button>
          <button onClick={() => handleOperator("/")}>/</button>
        </div>
        <div>
          <button onClick={() => handleDigit(4)}>4</button>
          <button onClick={() => handleDigit(5)}>5</button>
          <button onClick={() => handleDigit(6)}>6</button>
          <button onClick={() => handleOperator("*")}>*</button>
        </div>
        <div>
          <button onClick={() => handleDigit(1)}>1</button>
          <button onClick={() => handleDigit(2)}>2</button>
          <button onClick={() => handleDigit(3)}>3</button>
          <button onClick={() => handleOperator("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleDigit(0)}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleEqual}>=</button>
          <button onClick={() => handleOperator("+")}>+</button>
        </div>

        <br />
        <button onClick={() => setOption2(false)}>
          return
        </button>
      </section>

      <div className="ticks"></div>
    </>
  );
}