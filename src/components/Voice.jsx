import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

function Voice({ type }) {

  function speakText() {
    let text;
    if (type === '.input') {
      text = document.querySelector('.input').value;
    } else if (type === '.output') {
      text = document.querySelector('.output').textContent;
    }
    
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
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
