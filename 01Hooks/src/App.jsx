import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Useeffect from './components/Useeffect'
import BMICalculator from './components/BMICalculator'
import Loginpage from './components/loginpage'
// import FetchData from './components/useeffect/FetchData'
import Counter from './components/useeffect/Counter'
import Changcolor from './components/uselayouteffect/Changcolor'
import IndianGov from './components/usecontext/Propsdrilling/IndianGov'
import Reducer from './components/usereducer/Reducer'
// import Buttons from './components/Buttons'


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: 'u',
  //     element: <Usestate />,
  //     children:[
  //       {
  //         path:'/',
  //         element: <Usestate />,
  //       },
  //     ]
  //   }

  // ])

  return (
    <>
   {/* <Usestate /> */}
   {/* <Useeffect /> */}
   {/* <BMICalculator /> */}
 {/* <Loginpage /> */}
{/* <Counter /> */}
{/* <FetchData />  */}
{/* <Changcolor /> */}
{/* <IndianGov /> */}
{/* <Buttons /> */}
<Reducer />
</>
  )

  // return <RouterProvider router={router}/>
}

export default App
