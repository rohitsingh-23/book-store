import React from 'react'
import "./Chip.css"

const Chip = ({text, onClick}) => {
  return (
    <div className='chip' onClick={onClick}>{text}</div>
  )
}

export default Chip