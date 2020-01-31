import React from 'react'
import './index.css'

export default function TextBox({ placeholder, onChange, value }) {
  return <input placeholder={placeholder} onChange={onChange} className='Input' value={value} />  
}