import React from 'react'
import Count from './Count'
import Voice from './Voice'


function Input({ setText }) {

  function updateText(e) {
    if (e.target.value === "") {
      setText("Translation");
      return;
    }
    setText(e.target.value);
  }

  return (
    <div className="box">
        <h2 className="lang-one">English</h2>
        <textarea className="text-block" onChange={updateText}></textarea>
        <div className="button-container">
          <Voice></Voice>
          <Count></Count>
        </div>
    </div>
  )
}

export default Input
