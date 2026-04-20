import { useState } from 'react'
import './App.css'

function App() {
  
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleSum = () => {
    const resultado = Number(num1) + Number(num2);
    alert("Resultado: " + resultado);
  };

  return (
    <>
      <section id="center">



        <div>
          <h1>CALCULATOR</h1>
          <p>

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
      

      </section>

      <div className="ticks"></div>

      <section id="Calculator">

        <div id="docs">
          
        </div>
        
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App