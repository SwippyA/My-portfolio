import React from "react";
import Type_Animation from "../animation/type_Animation";
import {motion, spring} from "framer-motion"
 import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div>
        <div className=" flex bg-yellow-200 w-full h-full items-center justify-between p-11">
          <div className="flex flex-col p-4 gap-2">
            <motion.div className="text-6xl"
            animate={{
              x:0,
              rotate:0,
              backgroundColor:"rgb(254 240 138)"
              
                    }}
            initial={{
              x:1000,
              rotate:360,
              backgroundColor:"blue"
              

            

            }}
            transition={{
              type:"spring",
              stiffness:30
            }}
            
            
            >HI,I`M A FREELANCER </motion.div>
            <div>
              <Type_Animation />
            </div>
            <div className="text-2xl font-semibold">based on Pune,India.</div>
            <motion.div 
            className="flex gap-7 m-3 justify-start"
            animate={{
              y:0,
              opacity:1
            }}
            initial={{
              y:1000,
              opacity:0
            }}
            transition={{
              type: "spring",
               stiffness: 100
            }}
            
            >
              <NavLink
                to="/project"
                className="px-6 py-4 hover:bg-slate-800 duration-1000 bg-black text-white font-bold"
              >
                View My Works
              </NavLink>
              <a
                className="text-xl flex underline-offset-1  px-6 py-4 underline"
                href="#"
              >
                <h4 className="mr-4 font-bold">
                  <NavLink to="/contact">Contact Me</NavLink>
                </h4>
                <svg
                  to="/contact"
                  class="w-6 h-6 text-gray-800  dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
          <motion.div
           className=" mt-7  h-1/3  z-0"
           animate={{
              scale:1,
              opacity:1
           }}
           initial={{
            scale:0.1,
            opacity:0.1
           }}
           transition={{
            duration:1
            
           }}
           
           
           >
            <div className="w-11/12 h-11/12 z-0 bg-white p-7 box-border overflow-hidden rounded-full ">
              <img
                className="saturate-0 rounded-full transition-transform duration-1000 hover:saturate-100 ease-in-out transform-gpu hover:scale-110   "
                src="https://avatars.githubusercontent.com/u/146545025?v=4"
                alt="Profile Image"
              />
            </div>
          </motion.div>
        </div>
        <div></div>
        <div className="bg-yellow-200 flex justify-center p-1">
          <NavLink to="/contact">
            <a href="">
              <svg
                class="w-6 h-6 text-gray-800 animate-bounce dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                />
              </svg>
            </a>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
