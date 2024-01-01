import React from "react";
import IconButton from "../Icons/Icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import  {Link,NavLink} from "react-router-dom"
function Menu() {
  return (
    <>
      <div className=" bg-black  h-screen">
        <div className=" w-fit p-4 ">
          <button className="text-white font-bold text-lg ">X</button>
        </div>
        <div className="flex flex-col items-center justify-center p-3 gap-8 my-2 relative  top-10">
          <NavLink 
          to="/home"
            className={({isActive})=>
          
              `text-white text-lg  font-bold hover:text-yellow-200 `
          
            }
            
          >
            Home
          </NavLink>
          <NavLink 
          to="/Portfolio"
            className={({isActive})=>
          
              `text-white text-lg  font-bold hover:text-yellow-200 `
          
            }
            
          >
            Portfolio
          </NavLink>
          <NavLink 
          to="/contact"
            className={({isActive})=>
          
              `text-white text-lg  font-bold hover:text-yellow-200 `
          
            }
            
          >
            Contact us
          </NavLink>
          <NavLink 
          to="/about"
            className={({isActive})=>
          
              `text-white text-lg  font-bold hover:text-yellow-200 `
          
            }
            
          >
            about me
          </NavLink>
          <NavLink 
          to="/resume"
            className={({isActive})=>
          
              `text-white text-lg font-bold hover:text-yellow-200 `
          
            }
            
          >
            Resume
          </NavLink>
        </div>
        <div className=" flex items-center  justify-center p-4 mt-4">
          <a className="p-3 saturate-0 hover:saturate-100" href="">
            <IconButton text="Github">
              <FaGithub size={30} />
            </IconButton>
          </a>
          <a className="p-3 saturate-0 hover:saturate-100" href="">
            <IconButton text="Meta" color="bg-blue-500">
              <FaMeta size={30} />
            </IconButton>
          </a>
          <a className="p-3 saturate-0 hover:saturate-100" href="">
            <IconButton
              text="/constgenius"
              color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
            >
              <GrInstagram size={30} />
            </IconButton>
          </a>
          <a className="p-3 saturate-0 hover:saturate-100" href="">
            <IconButton text="Twitter" color="bg-black">
              <FaXTwitter size={30} />
            </IconButton>
          </a>
          <a className="p-3 saturate-0 hover:saturate-100" href="">
            <IconButton text="Twitter" className=" bg-blue-800 flex p-2 items-center rounded-lg text-white"color="bg-black">
              <FaLinkedin size={30} />
            </IconButton>
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;
