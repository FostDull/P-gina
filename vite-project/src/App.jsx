import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [option, setOption] = useState(false);
  const [option2, setOption2] = useState(false);

  // States for Real Calculator
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleSum = () => {
    const resultado = Number(num1) + Number(num2);
    alert("Resultado: " + resultado);
  };

  const handleClick = () => {
    console.log("HI")
    setOption(true)
    setOption2(false)
  }

  const handleClick2 = () => {
    console.log("HI APP 2")
    setOption2(true)
    setOption(false)
  }

  // Real Calculator Functions
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

  console.log("Running first time")

  return (
    <>
      <button type="button" onClick={handleClick}>
        APP 1
      </button>

      <button type="button" onClick={handleClick2}>
        APP 2
      </button>

      {option && (<>

        <section id="center">

          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

          <div>
            <h1>CALCULATOR</h1>
            <p>
              Sum of 2 numbers
            </p>
          </div>

          {/* INPUT 1 */}
          <div>
            <label>Numero 1:</label>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>

          {/* INPUT 2 */}
          <div>
            <label>Numero 2:</label>
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>

          {/* BOTÓN SUMAR */}
          <button onClick={handleSum}>
            Sumar
          </button>
          <button onClick={() => setOption(false)}>
            return
          </button>

        </section>

        <div className="ticks"></div>

        <section id="Calculator">

          <div id="docs">

          </div>

        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>

      </>
      )}

      {option2 && (<>

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

          {/* BOTtons */}
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
      )}

    </>
  )
}

export default App