import React, { useState } from 'react'

const Alldata = ({name,age,salary}) => {
    // const name = 'Ram'
    // const email = 'Ram23@gmail.com'
    // const password = 'laxman@34'
// let counter = 0;

const [counter, setCounter] = useState(10)


const increase = () => {
    // counter++;
    // console.log(counter)
    setCounter(counter +1)
}

const decrease =() => {
    // counter--;
    // console.log(counter)
    setCounter(counter -1)
}

    return (
        <>
<div className='bg-amber-100 text-black gap-1 px-10 mt-3 border rounded border-blue-500 '>
 {/* <h1 className=''>Name :- {name}</h1> */}
            {/* <h1>Email :- {email}</h1>
            <h1>Password :- {password}</h1> */}
            {/* <h1>Age :- {age}</h1> */}
            {/* <h1>Salary :- {salary}</h1> */}
</div>
          <h1>{counter}</h1> 
<button onClick={increase}>increase</button>
<button onClick={decrease}>Decrease</button>

        </>
    )
}

export default Alldata