import React from "react";
import {NavLink} from 'react-router-dom'
import {motion} from "framer-motion"

function Project() {
  return (
    <>
      <motion.div
      animate={{
        x:0,

        opacity: 1,
      }}
      initial={{
        x: -100,
        opacity: 0.1,
      }}
      transition={{
        type: "spring",
        stiffness: 60,
      }}
      
      className="flex flex-col">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="bg-yellow-200 font-semibold p-1 mt-28 text-lg">Projects</h1>
          <h1 className="text-5xl font-bold">
            Some of my most recent projects
          </h1>
        </div>
        <div className="p-6 flex flex-wrap justify-start items-center gap-7 my-10">
          <div class="group w-96 h-96 rounded overflow-hidden shadow-lg bg-black relative">
            <img
              className="w-fit h-96 "
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
            />

            <div class="opacity-0 group-hover:opacity-100 transition duration-300  bg-black  bg-opacity-60  text-white text-center py-2 absolute inset-0 flex items-center justify-center">
              <div>
                <p className="text-lg  font-semibold">Demo of gym Website</p>
                <button class="mt-2 px-4 py-2 bg-yellow-200 text-black font-semibold hover:bg-yellow-400 rounded">
                  <a href="https://swippya.github.io/gym/">More Info</a>
                </button>
              </div>
            </div>
          </div>
          <div class="group w-96 h-96 rounded overflow-hidden shadow-lg bg-white relative">
            <img
              class="w-full h-96 object-cover"
              src="https://images.unsplash.com/photo-1510511336377-1a9caa095849?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
            />

            <div class=" opacity-0 group-hover:opacity-100 transition duration-300  bg-black bg-opacity-60 text-white text-center py-2 absolute inset-0 flex items-center justify-center">
              <div>
                <p className="text-lg  font-semibold">
                  Rock-paper-scissors-game
                </p>
                <button class="mt-2 px-4 py-2 bg-yellow-200 text-black font-semibold hover:bg-yellow-400 rounded">
                <a href="https://swippya.github.io/Rock-paper-scissors-game/">More Info</a>
                </button>
              </div>
            </div>
          </div>
          <div class="group  w-96 h-96 rounded overflow-hidden shadow-lg bg-white relative">
            <img
              class="w-full h-96 object-cover"
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
            />

            <div class="opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-60 text-white text-center py-2 absolute inset-0 flex items-center justify-center">
              <div>
                <p className="text-lg  font-semibold">Todo-list-project</p>
                <button class="mt-2 px-4 py-2 bg-yellow-200 text-black font-semibold hover:bg-yellow-400 rounded">
                <a href="https://swippya.github.io/Todo-list-project/">More Info</a>
                </button>
              </div>
            </div>
          </div>
          <div class="group  w-96 h-96 rounded overflow-hidden shadow-lg bg-white relative">
            <img
              class="w-full h-96 object-cover"
              src="https://plus.unsplash.com/premium_photo-1677109899683-9d449c66d9e8?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
            />

            <div class="opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-60 text-white text-center py-2 absolute inset-0 flex items-center justify-center">
              <div>
                <p className="text-lg  font-semibold">calculator-Project</p>
                <button class="mt-2 px-4 py-2 bg-yellow-200 text-black font-semibold hover:bg-yellow-400 rounded">
                <a href="https://swippya.github.io/calculator-Project/">More Info</a>
                </button>
              </div>
            </div>
          </div>
          <div class="group  w-96 h-96 rounded overflow-hidden shadow-lg bg-white relative">
            <img
              class="w-full h-96 object-cover"
              src="https://images.unsplash.com/photo-1522780550166-284a0288c8df?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
            />

            <div class="opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-60 text-white text-center py-2 absolute inset-0 flex items-center justify-center">
              <div>
                <p className="text-lg  font-semibold">amazon-clone-website(Detail)</p>
                <button class="mt-2 px-4 py-2 bg-yellow-200 text-black font-semibold hover:bg-yellow-400 rounded">
                <a href="https://github.com/SwippyA/amazon-clone-website">More Info</a>
                </button>
              </div>
            </div>
          </div>
          <div class="group  w-96 h-96 rounded overflow-hidden shadow-lg bg-white relative">
            <img
              class="w-full h-96 object-cover"
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
            />

            <div class="opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-60 text-white text-center py-2 absolute inset-0 flex items-center justify-center">
              <div>
                <p className="text-lg  font-semibold">
                  Data Structure and Algorithm
                </p>
                <button class="mt-2 px-4 py-2 bg-yellow-200 text-black font-semibold hover:bg-yellow-400 rounded">
                <a href="https://leetcode.com/swippyA/">More Info</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  ">
            <h1 className="text-6xl m-32 text-white">Interested in working with me?</h1>
            <motion.button 
              whileInView={{
                scale: 1,
        
                opacity: 1,
              }}
              initial={{
                scale: 0.1,
                opacity: 0.1,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
              }} 
              whileTap={{
                scale: 0.8,
        
                opacity: 1,
              }}
              whileHover={{
                scale:1.3
              }}

             
            
            className=" hover:bg-yellow-300 font-semibold text-xl bg-yellow-200 px-4  py-2 border-2 m-4 border-black">
                <NavLink to="/contact">
                    Hire Me 
                </NavLink>
            </motion.button>
        </div>
      </motion.div>
    </>
  );
}

export default Project;
