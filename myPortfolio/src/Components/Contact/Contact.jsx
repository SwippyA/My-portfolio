import React from "react";
import IconButton from "../Icons/Icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div className="flex p-20 bg-yellow-200 ">
        <motion.div
          className="flex flex-col w-1/2 gap-12 mt-4"
          animate={{
            scale: 1,

            opacity: 1,
          }}
          initial={{
            scale: 0.1,

            opacity: 0.1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.h1
            className="text-5xl font-bold "
            animate={{
              x: 0,

              opacity: 1,
            }}
            initial={{
              x: 10000,

              opacity: 0.1,
            }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.1,
            }}
          >
            Let's get in touch
          </motion.h1>
          <p className=" font-semibold w-5/6   text-2xl">
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up.
          </p>
          <div>
            <h1 className="text-2xl font-bold">Living In:</h1>
            <p className="text-xl font-semibold mt-3">
              Gujrat colony,Pune 411038 India
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Call:</h1>
            <p className="text-xl font-semibold mt-3">(+91) 9004987482</p>
          </div>
          <div className=" flex relative -left-4 -top-10">
            <motion.a
              className="p-3 saturate-0 hover:saturate-100"
              href="https://github.com/SwippyA"
              animate={{
                x: 0,

                opacity: 1,
              }}
              initial={{
                x: 1000,

                opacity: 0.1,
              }}
              transition={{
                type: "tween",
                duration: 1,
                delay: 0.2,
              }}
            >
              <IconButton text="Github">
                <FaGithub title="GitHub" size={30} />
              </IconButton>
            </motion.a>
            <motion.a
              className="p-3 saturate-0 hover:saturate-100"
              href=""
              animate={{
                x: 0,

                opacity: 1,
              }}
              initial={{
                x: 1000,

                opacity: 0.1,
              }}
              transition={{
                type: "tween",
                duration: 1,
                delay: 0.4,
              }}
            >
              <IconButton text="Meta" color="bg-blue-500">
                <FaMeta size={30} />
              </IconButton>
            </motion.a>
            <motion.a
              className="p-3 saturate-0 hover:saturate-100"
              href=""
              animate={{
                x: 0,

                opacity: 1,
              }}
              initial={{
                x: 1000,

                opacity: 0.1,
              }}
              transition={{
                type: "tween",
                duration: 1,
                delay: 0.6,
              }}
            >
              <IconButton
                text="/constgenius"
                color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
              >
                <GrInstagram size={30} />
              </IconButton>
            </motion.a>
            <motion.a
              className="p-3 saturate-0 hover:saturate-100"
              href=""
              animate={{
                x: 0,

                opacity: 1,
              }}
              initial={{
                x: 1000,

                opacity: 0.1,
              }}
              transition={{
                type: "tween",
                duration: 1,
                delay: 0.8,
              }}
            >
              <IconButton text="Twitter" color="bg-black">
                <FaXTwitter size={30} />
              </IconButton>
            </motion.a>
            <motion.a
              className="p-3 saturate-0 hover:saturate-100"
              href="https://www.linkedin.com/in/shubhankar-swain-82697924b/"
              animate={{
                x: 0,

                opacity: 1,
              }}
              initial={{
                x: 1000,

                opacity: 0.1,
              }}
              transition={{
                type: "tween",
                duration: 1,
                delay: 1,
              }}
            >
              <IconButton
                text="Linkdin"
                className=" bg-blue-800 flex p-2 items-center rounded-lg text-white"
                color="bg-black"
              >
                <FaLinkedin size={30} />
              </IconButton>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-8 mt-4"
          animate={{
            scale: 1,

            opacity: 1,
          }}
          initial={{
            scale: 0.1,

            opacity: 0.1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.h1 className=" text-5xl font-bold"
           animate={{
            x: 0,

            opacity: 1,
          }}
          initial={{
            x: -10000,

            opacity: 0.1,
          }}
          transition={{
            type: "tween",
            duration: 1,
            delay: 0.1,
          }}
          
          >Estimate your Project?</motion.h1>

          <div className="flex flex-col gap-5 ">
            <label className="block text-xl font-semibold" htmlFor="Name">
              What is Your Name :
            </label>
            <input
              type="text"
              name="Name"
              className="block h-10 border-b-2 border-gray-400 text-xl p-4 font-semibold w-full bg-yellow-200 b  focus:bg-yellow-200 focus:border-none"
            />
            <label className="block  text-xl font-semibold" htmlFor="Eamil">
              What is Your Name :
            </label>
            <input
              type="email"
              name="Email"
              className="block h-10 border-b-2 border-gray-400 text-xl p-4 font-semibold w-full bg-yellow-200 b  focus:bg-yellow-200 focus:border-none"
            />
            <label htmlFor="Write" className="block  text-xl font-semibold">
              How canI help you?:
            </label>
            <textarea
              name="Write"
              className="block h-28 border-b-2 border-gray-400 text-xl p-4 font-semibold w-full bg-yellow-200 b  focus:bg-yellow-200 focus:border-none"
            ></textarea>
            <motion.button
              className=" text-left bg-black text-white w-fit px-8 mt-10 hover:bg-gray-700 duration-200 py-4 text-lg font-bold"
              whileInView={{
                scale: [1.2, 0.6, 1.5, 1],
                rotate:0,
                borderRadius:[70,40,17,0]
              }}
              initial={{
                scale: 1,
                borderRadius:0,
                rotate:270
              }}
              transition={{
                
                type:"spring",
                stiffness:30
    
              }}
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
