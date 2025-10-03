import React, { useState } from 'react'

function BMICalculator() {

const [conut, setCount] = useState(0);

const [number, setnumber] = useState(2, 20, 32, 34);
 const [Salary, setSalary] = useState(20000);



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
<h1 className='flex-col gap-32 '> Count : {conut}</h1>
<div className='flex-col mt-4'>
<button onClick={Increment} className=''>Increment</button>
<div className='mt-2'>
<button onClick={Decrement}>Decrement</button>
</div>
</div>
<button className='mt-3'>Number :-  {number}</button>
<h3 className='mt-2 text-xl font-medium'>Salary :- <span className='font-normal'>{Salary}</span></h3>
    </div>
  ) 
}

export default BMICalculator