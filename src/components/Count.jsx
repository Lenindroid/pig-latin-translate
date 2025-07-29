import React from 'react'

function Count() {
  return (
    <span className="char-count">{document.querySelector('.input').value.length}/5000</span>
  )
}

export default Count
