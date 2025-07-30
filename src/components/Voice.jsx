import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faStop } from '@fortawesome/free-solid-svg-icons'

function Voice({ type }) {
  const [speaking, setSpeaking] = React.useState(false);
  const utteranceRef = React.useRef(null);

  function speakText() {
    if (speaking) {
      if (utteranceRef.current) {
        speechSynthesis.cancel();
        setSpeaking(false);
      }
      return;
    }

    let text;
    if (type === '.input') {
      text = document.querySelector('.input').value;
    } else if (type === '.output') {
      text = document.querySelector('.output').textContent;
    }
    
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text)
      utteranceRef.current = utterance;
      utteranceRef.current.lang = 'en-US';
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);

      utterance.onstart = () => {
        setSpeaking(true);
      };

      utterance.onend = () => {
        setSpeaking(false);
      };
    }
  }


  return (
    <button onClick={speakText}>
        <FontAwesomeIcon icon={ speaking ? faStop : faVolumeHigh } />
    </button>
  )
}

export default Voice
