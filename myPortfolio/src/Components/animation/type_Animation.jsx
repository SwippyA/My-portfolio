import React from 'react'
import {TypeAnimation} from 'react-type-animation'
function Type_Animation() {
  return (
    <div className='text-yellow-400  w-1/2 transition-shadow h-full '>
    <TypeAnimation 
     sequence={[
       // Same substring at the start will only be typed out once, initially
       'Wed Developer',
       2000, // wait 1s before replacing "Mice" with "Hamsters"
       'Software engg',
       2000,
       'data minning',
       2000,
       'App developer',
       2000
     ]}
     wrapper="span"
     speed={50}
     style={{ 
         
         fontSize: '5em',
         display: 'inline-block', 
         fontWeight:'bold',
         text:"yellow",
         textShadow:"3px  4px 6px black"
         
     }}
     repeat={Infinity}
   />
  </div>
  )
}

export default Type_Animation;