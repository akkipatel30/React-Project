import React, { useState } from 'react'
import Context from './context'


const Moneystate = (props) => {

    const money = 1000
const people = {
    name : 'ram',
    age : 45,
    email : 'ram@gmail.com',
    location : 'Ahmedabada'
}
    const [counter, setCounter] = useState(10)

    return (
        <Context.Provider value={{ money, people, counter, setCounter }}>{props.children}</Context.Provider>
    )
}

export default Moneystate