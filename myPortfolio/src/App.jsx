import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Type_Animation from './Components/animation/type_Animation'
import Home from './Components/Home/home'

import Head from './Components/Head/Head'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div>
    <Head/>
    
    <Home/>
  </div>
  
  </>

  )
}

export default App
