import { useState } from 'react'
import './App.css'


function Usestate() {

let [counter, setCounter] = useState(0)


// let Counter = 1

const addValue =() =>{
  console.log('clicked', counter);
  counter = counter + 1
  setCounter(counter)
}

const removeValue =() =>{
  // counter = counter - 1
  if(counter === 0){
    setCounter(0)
  }else{
  setCounter(counter -1)
}}

  return (
    <>
      <h1>New Project</h1>
      <h2>Counter value: {counter}</h2>

<button onClick={addValue} >Add Value</button>
<br />
<br />

<button onClick={removeValue}>Remove Value </button>


    </>
  )
}

export default Usestate
