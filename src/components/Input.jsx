import React from 'react'
import Count from './Count'
import Voice from './Voice'


function Input() {
  return (
    <div className="box">
        <h2 className="lang-one">English</h2>
        <textarea className="text-block"></textarea>
        <div>
          <Voice></Voice>
          <Count></Count>
        </div>
    </div>
  )
}

export default Input
