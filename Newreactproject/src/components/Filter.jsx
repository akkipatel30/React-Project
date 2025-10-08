import React from 'react'

const Filter = () => {

const user = [
    {id : 1, name : 'suman', active:true},
    {id : 2, name : 'supermane', active:false},
    {id : 3, name : 'spiderman', active:true},
    {id : 4, name : 'batman', active:false},
]

const activeUser = user.filter((user)=>user.active)
  return (
    <div>
<ul>

    {activeUser.map((data)=><li key={data.id}>{data.name}</li>)}
</ul>

    </div>
  )
}

export default Filter