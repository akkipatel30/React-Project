import React, { useState } from 'react'

function BMICalculator() {

const [conut, setCount] = useState(0);
const Increment = () => setCount(conut + 1);
// const Decrement = () =>{
//   if(count === 0){setCount(0)
//   }else{
//   setCount(count - 1)
// }}
const Decrement = () =>{
  if(conut === 0){setCount(0)
}else
  {setCount(conut - 1)

}}


  return (
    <div className='flex-col '>
<h1 className='flex-col gap-32'> Count : {conut}</h1>
<button onClick={Increment} className='gap-1.5 border-2 rounded-2xl'>Increment</button>
<button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default BMICalculator