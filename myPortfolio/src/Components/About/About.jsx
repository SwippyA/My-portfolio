import React from 'react'


function About() {
  return (
    <>
       <div className="flex flex-col justify-center items-center h-full  mx-10 mb-10 gap-9 ">
            <div className='flex flex-col items-center mt-24'>
                <div className=' bg-yellow-200 font-semibold p-1'>
                    About Me 
                </div>
                <div className='font-bold text-4xl m-3'>
                    KNOW   ME   MORE
                </div>
            </div>

            <div className='flex '>
                <div className=' w-2/3 '>
                    <h1 className='text-4xl font-semibold '>Hi ,I'm <span className='font-bold border-b-4 border-yellow-200'>Shubhankar Swain</span> </h1>
                    <p className='text-2xl mt-2'>
                    As MIT WPU's Computer Science student, Shubhankar Swain, my experience as a web developer, Head of Data, and Research Executive influences my dynamic academic approach. I've executed projects like an Amazon clone, showcasing practical expertise. Explore my portfolio at <span className='font-bold ' >[https://github.com/SwippyA]</span>  for insights into my commitment to innovation in computer science.
                    </p>
                </div>
                <div className='flex justify-center items-center flex-col relative -top-6 ml-14'>
                    <div className='w-32 home'>
                        <img src="https://img.freepik.com/premium-photo/number-2-alphabet-golden-3d-number-isolated-white-background-with-clipping-path-3d-illustration_161844-513.jpg?w=740" alt="" />
                    </div>
                    
                    <div className='text-4xl relative top-8 font-semibold '>Years of <span className='font-bold' > Experience </span></div>
                </div>
            </div>

             <div className='flex  w-full  justify-between mt-5 '>
                <div>
                    <h1 className=' text-gray-400 text-xl '>Name:</h1>
                    <h1 className='text-2xl font-bold'>Shubhankar Swain</h1>
                </div>
                <div>
                    <h1 className=' text-gray-400 text-xl '>Email:</h1>
                    <a className='text-2xl font-bold cursor-pointer' >shubhankarswain16@gmail.com</a>
                </div>
                <div>
                    <h1 className=' text-gray-400 text-xl ' >Date of Birth:</h1>
                    <h1  className='text-2xl font-bold' >18 June 2004</h1>
                </div>
                <div>
                    <h1 className=' text-gray-400 text-xl ' >from:</h1>
                    <h1 className='text-2xl font-bold' >Pune,India.</h1>
                </div>
                
             </div>
       </div>
    </>
  )
}

export default About