import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [option, setOption] = useState(false);

  const handleSum = () => {
    const resultado = Number(num1) + Number(num2);
    alert("Resultado: " + resultado);
  };
  //to do
  const handleClick = () => {
    console.log("HI")
    setOption(true)
  }
   console.log("Running first time")


  

  return (
    <>
      <button type="button" onClick={handleClick}>
        APP 1
      </button>

       <button type="button" onClick={handleClick}>
        APP 2
      </button>

      { option && ( <>
      
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
       <button onClick={handleClick}>
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
      )

      }


    </>
  )
}

export default App