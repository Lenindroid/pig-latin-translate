import React from 'react'
import Count from './Count'
import Voice from './Voice'


function Input() {
  return (
    <div>
        <h2>English</h2>
        <textarea></textarea>
        <div>
          <Voice></Voice>
          <Count></Count>
        </div>
    </div>
  )
}

export default Input
