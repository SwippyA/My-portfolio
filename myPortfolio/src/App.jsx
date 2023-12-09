import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Type_Animation from './Components/animation/type_Animation'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div>
    <Type_Animation/>
  </div>
  
  </>

  )
}

export default App
