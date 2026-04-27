import { useState } from 'react';
import Buttoons from './Buttoons';

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
    // Formatear para evitar muchos decimales
    setDisplay(String(Math.round(result * 100000000) / 100000000));
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header section with back button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-black tracking-tight">Advanced Calculator</h1>
            <p className="mt-1 text-base text-gray-700 font-medium">Perform standard operations.</p>
          </div>
          <Buttoons variant="back" onClick={() => setOption2(false)}>
            ← Back
          </Buttoons>
        </div>

        {/* Calculator UI */}
        <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden max-w-xs mx-auto p-5 border border-gray-800">
          
          {/* Display */}
          <div className="bg-gray-800 rounded-2xl p-4 mb-5 shadow-inner text-right min-h-[90px] flex flex-col justify-end">
            <div className="text-gray-300 text-xs h-5 font-medium tracking-wide">
              {prevValue !== null ? `${prevValue} ${operator || ''}` : ''}
            </div>
            <div className="text-white text-4xl font-light tracking-wide overflow-hidden truncate">
              {display}
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-2.5">
            {/* Row 1 */}
            <Buttoons variant="calc-clear" className="col-span-2" onClick={handleClear}>C</Buttoons>
            <Buttoons variant="calc-operator" onClick={() => handleOperator("/")}>÷</Buttoons>
            <Buttoons variant="calc-operator" onClick={() => handleOperator("*")}>×</Buttoons>

            {/* Row 2 */}
            <Buttoons variant="calc-digit" onClick={() => handleDigit(7)}>7</Buttoons>
            <Buttoons variant="calc-digit" onClick={() => handleDigit(8)}>8</Buttoons>
            <Buttoons variant="calc-digit" onClick={() => handleDigit(9)}>9</Buttoons>
            <Buttoons variant="calc-operator" className="text-3xl leading-none" onClick={() => handleOperator("-")}>−</Buttoons>

            {/* Row 3 */}
            <Buttoons variant="calc-digit" onClick={() => handleDigit(4)}>4</Buttoons>
            <Buttoons variant="calc-digit" onClick={() => handleDigit(5)}>5</Buttoons>
            <Buttoons variant="calc-digit" onClick={() => handleDigit(6)}>6</Buttoons>
            <Buttoons variant="calc-operator" onClick={() => handleOperator("+")}>+</Buttoons>

            {/* Row 4 */}
            <Buttoons variant="calc-digit" onClick={() => handleDigit(1)}>1</Buttoons>
            <Buttoons variant="calc-digit" onClick={() => handleDigit(2)}>2</Buttoons>
            <Buttoons variant="calc-digit" onClick={() => handleDigit(3)}>3</Buttoons>
            <Buttoons variant="calc-equal" className="row-span-2" onClick={handleEqual}>=</Buttoons>

            {/* Row 5 */}
            <Buttoons variant="calc-digit" className="col-span-3 text-center" onClick={() => handleDigit(0)}>0</Buttoons>
          </div>

        </div>
      </div>
    </div>
  );
}