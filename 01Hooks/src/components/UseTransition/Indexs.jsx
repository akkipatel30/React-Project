import React, { useState,useTransition } from 'react'


const Indexs = () => {
const [Search, setSearch] = useState('');
const [isPending, startTransition] = useTransition('');

const handleSearch = (e) => {
  startTransition(() => setSearch(e.target.value))
}


  return (
    <div>
      <h1>Tish is Use Transition hook
        </h1> 
        <input type='text' value={Search}  onChange={handleSearch}  className='mt-2.5 bg-amber-100 rounded w-50 h-10 text-black'/>
        
        
        </div>

  )
}

export default Indexs