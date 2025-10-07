import React, { useState, useMemo } from 'react'

const Usememo = () => {

const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: 50000 },
{ id: 2, name: "Phone", price: 30000 },
{ id: 3, name: "Headphones", price: 2000 },
])
 
const [discount, setDiscount] = useState(0);



const totalPrice = useMemo(()=> {
    console.log('Calculating total price...');
   return cart.reduce((total,item)=> total + item.price,0)
},[cart])

  return (
    <div className='justify-start text-left gap-3'>
<h3 className='font-semibold text-3xl text-orange-600 mb-5'>Shopping Catr</h3>
{cart.map((item)=> (
    <p key={item.id}>{item.name} : {item.price}</p>
)
)}

<h2 className='text-xl font-semibold mt-1'>Total Price :  <span className='text-orange-800 font-bold'>{totalPrice}</span></h2>
{/* <button onClick={()=>{ console.log('discount button click')
    setDiscount(discount + 10)}} className='mt-5'>Increase Discount</button> */}


    <button onClick={()=>
    setDiscount(discount + 10)} className='mt-5'>Increase Discount</button>
    </div>
  )
}

export default Usememo