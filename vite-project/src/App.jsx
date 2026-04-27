import { useState } from 'react'
import App1 from './components/App1'
import App2 from './components/App2'
import App3 from './components/App3'
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

      {option && <App1 setOption={setOption} />}

      {option2 && <App2 setOption2={setOption2} />}

      {option3 && <App3 setOption3={setOption3} />}
    </>
  )
}

export default App