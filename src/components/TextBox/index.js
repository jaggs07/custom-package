import React from 'react'
import './index.css'

export default function TextBox ({ placeholder, onChange, value}) {
  return <input className='Input'  placeholder={placeholder} onChange={onChange} value={value} />
}