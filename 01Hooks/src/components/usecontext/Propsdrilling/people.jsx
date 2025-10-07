import React, { useState } from 'react'
import Context from '../context'
import { useContext } from 'react';
import Moneystate from '../Moneystate';

const People = () => {
// console.log('Priting the context and DataTable =', useContext(Context))
  
const data = useContext(Context);
// const {money, counter, setCounter} = useContext(Context);


  return (
    <div>
        <h1 className='text-xl hover:text-4xl hover:font-semibold bg-gradient-to-b to-orange-400 from-orange-900 p-3 rounded cursor-pointer transition duration-300 hover:bg-amber-900 mt-3'>This is people Componeant = {data.money}</h1>
        <h1>Counter = {data.counter}</h1>
        <button onClick={() => data.setCounter(data.counter + 1)}>increase</button>
         <button onClick={() => data.setCounter(data.counter - 1)}>Decrease</button>
    </div>
  )
}

export default People