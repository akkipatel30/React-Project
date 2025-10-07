import React, { useState, useCallback } from 'react'
import Button from './Button'
const Index = () => {

const [Count, setCount] = useState(0);
const [darkMode, setDarkMode] = useState(false);

// const handleClike =() => setCount(Count+1);
const handleClike = useCallback(
  () => {
    setCount((prev) => prev +1)
  },
  [],
)



  return (
    <div style={{background: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#F4F4F4', padding: '20px'
    }}>

<button onClick={handleClike}></button>

<button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  )
}

export default Index