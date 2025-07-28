import React from 'react'
import Copy from './Copy'
import Voice from './Voice'

function Result() {
  return (
    <div className="box">
        <h2>Pig latin</h2>
        <div className="output text-block"></div>
        <div>
          <Voice></Voice>
          <Copy></Copy>
        </div>
    </div>
  )
}

export default Result
