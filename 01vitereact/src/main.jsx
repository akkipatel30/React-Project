import React from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react';

import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


const reactElement = React.createElement(
  'a',
  {href: 'https://react.dev/learn', target: '_blank'},
  'click me to visit react doc',
  // anotherElement

)
// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit google</a>
// )




function Counter(){
  const[count,steCount] = useState(0);
  return(
    <>
    <h1>{count}</h1>
    <button onClick={() => steCount(count + 1)}>
      Increment
    </button>
    
    </>
  );
}


createRoot(document.getElementById('root')).render(
//  anotherElement
//  <App />
//  reactElement
<Counter />

)