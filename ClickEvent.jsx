import React from 'react'
import './index.css'
import { useState } from 'react'



const ClickEvent = () => {
const [number,setNumber]=useState(0)

const increment=()=>{
    setNumber(number+1)
}
const decrement=()=>{
    setNumber(number-1)
}
const reset=()=>{
    setNumber(0)
}

  return (
    <div className='container'>
      <h1 className='number'>{number}</h1>
      <div className='Elements'>
      <button onClick={decrement} className='btn1'>Decrement</button>
      <button onClick={reset}className='btn2'>Reset</button>
      <button onClick={increment}className='btn3'>Increment</button>

      </div>

    </div>
  )
}

export default ClickEvent
