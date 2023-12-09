import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TypeAnimation} from 'react-type-animation'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Wed Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Software engg',
        1000,
        'data minning',
        1000,
        'App developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
   </div>
  )
}

export default App
