import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

function Voice() {
  return (
    <button>
        <FontAwesomeIcon icon={ faVolumeHigh } />
    </button>
  )
}

export default Voice
