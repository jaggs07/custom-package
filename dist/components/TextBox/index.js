import React from 'react'
import './index.css'

export default function ({ placeholder, onChange }) {
  return <input placeholder={placeholder} onChange={onChange} className='Input'/>  
}