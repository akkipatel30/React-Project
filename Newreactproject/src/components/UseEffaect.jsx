import React, { useState } from 'react'

const UseEffaect = () => {

const [counter, setCounter] = useState(10)

  return (
    <>
    <h1>UseEffect Hook</h1>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter)}>Click</button>
    
    </>
  )
}

export default UseEffaect