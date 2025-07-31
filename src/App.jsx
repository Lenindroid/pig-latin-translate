import './App.css'
import Result from './components/Result'
import Input from './components/Input'
import { useState } from 'react'
import SwitchLang from './components/SwitchLang';

function App() {
  const [text, setText] = useState("Translation");
  const [pigLatinLeft, setPigLatinLeft] = useState(true);

  return (
    <>
      <header>
        <h1><span className="piglatin">Pig Latin</span> <span className="translate">Translate</span></h1>
      </header>
      <div className="boxes">
        <Input setText={setText}></Input>
        <Result text={text}></Result>
      </div>
      <div className="switch-lang-container">
        <SwitchLang setPigLatinLeft={setPigLatinLeft} pigLatinLeft={pigLatinLeft}></SwitchLang>
      </div>
    </>
  )
}

export default App
