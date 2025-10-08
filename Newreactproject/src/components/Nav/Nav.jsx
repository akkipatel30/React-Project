import React from 'react'
import Alldata from '../df/Alldata'

const Nav = () => {

const handleClick = (data) => {
  alert('Buttone was clicked...' + data)
}


  return (
    <>
      {/* <h1 className='font-bold  text-8xl'>Hello world!</h1> */}

      {/* <Alldata name='smae' age={23} salary={1000} />
      <Alldata name='ram' age={26} salary={1500} />
      <Alldata name='ghanshyaam' age={34} salary={2000} /> */}
<button onClick={()=> handleClick(300)} className='border-amber-700 border-2 hover:bg-amber-700 p-4 rounded px-7 cursor-pointer mt-10'>Click me</button>
    </>
  )
}

export default Nav