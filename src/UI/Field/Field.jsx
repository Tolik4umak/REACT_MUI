import React from 'react'
import s from './style.module.css'

export default function Field({label, direction, ...props}) {


  const style =   {
    flexDirection: `${direction}`
}
  
  return (
    <div className={s.field} style={style}>
        <p>{label}</p>
        <input className={s.input} type="text" {...props} />
    </div>
  )
}
