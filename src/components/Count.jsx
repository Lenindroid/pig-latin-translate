import React from 'react'

function Count({ text }) {
  return (
    <span className="char-count">{text.length}/5000</span>
  )
}

export default Count
