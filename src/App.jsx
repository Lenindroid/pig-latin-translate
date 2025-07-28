import './App.css'
import Result from './components/Result'
import Input from './components/Input'
import { useState } from 'react'

function App() {
  const [text, setText] = useState("Translation");

  return (
    <>
      <header>
        <h1><span className="piglatin">Pig Latin</span> <span className="translate">Translate</span></h1>
      </header>
      <div className="boxes">
        <Input setText={setText}></Input>
        <Result text={text}></Result>
      </div>
    </>
  )
}

export default App
