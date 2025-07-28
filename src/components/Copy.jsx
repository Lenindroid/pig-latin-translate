import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

function Copy() {
  return (
    <button>
      <FontAwesomeIcon icon={faCopy} />
    </button>
  )
}

export default Copy
