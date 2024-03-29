import React, { useState } from "react";
import {Link,NavLink} from 'react-router-dom'
import {motion} from "framer-motion"

import Menu from "../Menu/Menu";
function Head() {
  const [navbar, setnavbar] = useState(false);

  const change_bg = () => {
    if (window.scrollY >= 10) {
      setnavbar(true);
    }
    if (window.scrollY <= 10) {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", change_bg);

  return (
    <>
      <motion.div
        className={
          navbar
            ? "bg-white flex fixed w-full z-10  "
            : "bg-yellow-200 flex fixed w-full z-10  "
        }
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -30,
          opacity: 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
      >
        <div className="text-black text-3xl p-2 ml-16 font-bold">
          <NavLink to="/">
          Shubhankar
          </NavLink>
          
        </div>
        <div className="text-black flex gap-6 p-3 ml-auto mr-24">
          <div className="pt-1">
            <NavLink to="/contact">
            
              <svg
                class="w-6 h-6 text-gray-800 dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
              </svg>
            
            </NavLink>
            
          </div>
          <div className="font-bold text-xl">(+91) 9004987482</div>
          <div className="pt-1">
            <NavLink to="/menu">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Head;
