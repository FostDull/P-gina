import { useState } from 'react'
import CalculatorS from './components/CalculatorS'
import CalculatorB from './components/CalculatorB'
import Cards from './components/Cards'
import Menu from './components/Menu'
import './App.css'

function App() {

  const [option, setOption] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);

  return (
    <>
      {!option && !option2 && !option3 && (
        <Menu 
          setOption={setOption} 
          setOption2={setOption2} 
          setOption3={setOption3} 
        />
      )}

      {option && <CalculatorS setOption={setOption} />}

      {option2 && <CalculatorB setOption2={setOption2} />}

      {option3 && <Cards setOption3={setOption3} />}
    </>
  )
}

export default App