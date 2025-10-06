import React, { useEffect, useState } from 'react'

function FetchData() {

const [counter, stecounter] = useState(0);

useEffect(() => {
  console.log('UseEffect is runnung....')
  document.title = counter;
}, [counter])

  return (
    <>
    <h1> Counter = {counter}</h1>
    <div className='mt-2 gap-4'>  
   <button onClick={() => stecounter(counter +1)}>Increase</button>
   <button onClick={() => stecounter(counter -1)} >Decrease</button>
    </div>

    </>
  )
}

export default FetchData