import React from 'react'
import { useReducer } from 'react';



const counterReducer = (state,action) => {
switch(action.typ){
    case 'INCREMENT' :
        return{count: state.count +1};
        case 'DECREMENT' :
            return{count : state.count -1};
            default : return state;
}
}


const Reducer = () => {

const [state,dispatch] = useReducer(counterReducer, {count: 0})
  return (

    <>
    <h1>count value = {state.count}</h1>
<button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
<button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>

</>
  )
}

export default Reducer