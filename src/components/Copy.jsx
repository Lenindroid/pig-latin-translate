import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

function Copy() {
  function copyToClipboard() {
    const textToCopy = document.querySelector('.output').textContent;
    navigator.clipboard.writeText(textToCopy);
  }

  return (
    <button onClick={copyToClipboard}>
      <FontAwesomeIcon icon={faCopy} />
    </button>
  )
}

export default Copy
