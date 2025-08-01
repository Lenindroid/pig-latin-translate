import React from 'react'
import Copy from './Copy'
import Voice from './Voice'

function Result({ text }) {
  return (
    <div className="box">
        <h2 className="lang-two">Pig latin</h2>
        <div className="output text-block">
          {text}
        </div>
        <div className="button-container">
          <Voice type=".output"></Voice>
          <Copy></Copy>
        </div>
    </div>
  )
}

export default Result
