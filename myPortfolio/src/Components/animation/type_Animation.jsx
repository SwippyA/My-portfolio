import React from 'react'
import {TypeAnimation} from 'react-type-animation'
function Type_Animation() {
  return (
    <div className='text-black w-1/2  h-full  ease-in-out transition-all  '>
    <TypeAnimation 
     sequence={[
       // Same substring at the start will only be typed out once, initially
       'Shubhankar',
       3000, // wait 1s before replacing "Mice" with "Hamsters"
       'Developer',
       3000,
       'Designer',
       3000,
       'Tester',
       2000
     ]}
     wrapper="span"
     speed={50}
     style={{ 
         
         fontSize: '5em',
         display: 'inline-block', 
         fontWeight:'bold',
         text:"yellow",
         
         
     }}
     repeat={Infinity}
   />
  </div>
  )
}

export default Type_Animation;