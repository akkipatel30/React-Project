import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Alldata from './components/df/Alldata'
import Map from './components/Map'
import Filter from './components/Filter'
import UseEffaect from './components/UseEffaect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Nav /> */}
      {/* <Alldata /> */}
      {/* <Map /> */}
      {/* <Filter /> */}
      <UseEffaect />
    </>
  )
}

export default App
