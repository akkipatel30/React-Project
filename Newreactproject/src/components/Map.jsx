import React from 'react'

const Map = () => {

const  items = ['Apple', 'Bnana','chaerry','Mongo' ]

  return (
    <div>
        <h1>We are learning map right now....</h1>
{items.map((items,index) => <div key={index}> 
    <li>{items}</li>
</div>)}

    </div>
  )
}

export default Map