import React, { useEffect, useState } from 'react'

const Changcolor = () => {
const [color, setColor] = useState('lightred');
useEffect(() => {
  document.body.style.backgroundColor = color;

}, [color])

  return (
    <div><h2 className='text-2xl font-semibold text-black'>Current Background: {color}</h2>
    <div className='mt-3 flex-col'>
<button onClick={() => setColor("red")}>Red</button>
<button onClick={() => setColor("green")}>Green</button>
<button onClick={() => setColor("blue")}>Blue</button>
<button onClick={() => setColor("orange")}>Oramge</button>

</div>
    </div>
  )
}

export default Changcolor