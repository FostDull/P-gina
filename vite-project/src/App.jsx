import { useState } from 'react'
import App1 from './components/App1'
import App2 from './components/App2'
import App3 from './components/App3'
import './App.css'

function App() {

  const [option, setOption] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);

  const handleClick = () => {
    console.log("HI")
    setOption(true)
    setOption2(false)
    setOption3(false)
  }

  const handleClick2 = () => {
    console.log("HI APP 2")
    setOption2(true)
    setOption(false)
    setOption3(false)
  }

  const handleClick3 = () => {
    console.log("HI APP 3")
    setOption3(true)
    setOption(false)
    setOption2(false)
  }

  console.log("Running first time")

  return (
    <>
      {!option && !option2 && !option3 && (
        <>
          <button type="button" onClick={handleClick}>
            APP 1
          </button>

          <button type="button" onClick={handleClick2}>
            APP 2
          </button>

          <button type="button" onClick={handleClick3}>
            APP 3
          </button>
        </>
      )}

      {option && <App1 setOption={setOption} />}

      {option2 && <App2 setOption2={setOption2} />}

      {option3 && <App3 setOption3={setOption3} />}
    </>
  )
}

export default App