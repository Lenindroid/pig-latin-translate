import './App.css'
import Result from './components/Result'
import Input from './components/Input'

function App() {
  return (
    <>
      <header>
        <h1><span className="piglatin">Pig Latin</span> <span className="translate">Translate</span></h1>
      </header>
      <div className="boxes">
        <Input></Input>
        <Result></Result>
      </div>
    </>
  )
}

export default App
