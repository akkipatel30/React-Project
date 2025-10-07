// import React from 'react'
// import { useReducer } from 'react';

// const counterReducer = (state,action) => {
// switch(action.typ){
//     case 'INCREMENT' :
//         return{count: state.count +1};
//         case 'DECREMENT' :
//             return{count : state.count -1};
//             default : return state;
// }
// }


// const Reducer = () => {

// const [state,dispatch] = useReducer(counterReducer, {count: 0})
//   return (

//     <>
//     <h1>count value = {state.count}</h1>
// <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
// <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>

// </>
//   )
// }

// export default Reducer


import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }

  if (action.type === 'decremented_age') {
    return {
      age: state.age - 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 12 });

  return (
    <>
          <p className='text-2xl'>Hello! You are {state.age}.</p>
      <button  onClick={() => {
        dispatch({ type: 'incremented_age' })
      }} className='mt-2'>
        Increment age
      </button>
       <button  onClick={() => {
        dispatch({ type: 'decremented_age' })
      }} className='mt-2'>
        Decrement age
      </button>
    </>
  );
}
