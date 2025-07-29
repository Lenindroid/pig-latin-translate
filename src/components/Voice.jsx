import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

function Voice({ type }) {

  function speakText() {
    let text = document.querySelector(type).textContent;
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  }

  return (
    <button onClick={speakText}>
        <FontAwesomeIcon icon={ faVolumeHigh } />
    </button>
  )
}

export default Voice
