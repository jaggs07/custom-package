import React from 'react'
import './index.css'

export default function Card ({ title, body, footer }) {
  return <div className='Card'>
   <div className='Card-header'>
      {title}
   </div>
   <div className='Card-body'>
       {body}
   </div>
   <div className='Card-footer'>
       {footer}
   </div>
  </div>
}
