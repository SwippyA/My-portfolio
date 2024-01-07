import React from "react";
import { motion } from "framer-motion";

function About() {
  const boxvariant = {
    animate: {
      y: 0,
    },
    initial: {
      y: "-100px",
      transition: {
        delay: 0.5,
        stiffness:60,
        
        when: "beforeChildren",
      },
    },
  };
  const variant = {
    animate: {
      y: 0,
      opacity: 1,
    //   rotate: 23,
    },
    initial: {
      y: -700,
      opacity: 0,
      staggerChildren: 0.2,
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center h-full  mx-10 mb-10 gap-9 "
        variants={boxvariant}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col items-center mt-24">
          <div className=" bg-yellow-200 font-semibold p-1">About Me</div>
          <div className="font-bold text-4xl m-3">KNOW ME MORE</div>
        </div>

        <div className="flex ">
          <motion.div
            className=" w-2/3 "
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              x: 1000,
              opacity: 0.2,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              when: "beforeChidren",
            }}
          >
            <h1 className="text-4xl font-semibold ">
              Hi ,I'm{" "}
              <span className="font-bold border-b-4 border-yellow-200">
                Shubhankar Swain
              </span>{" "}
            </h1>
            <motion.p className="text-2xl mt-2">
              As MIT WPU's Computer Science student, Shubhankar Swain, my
              experience as a web developer, Head of Data, and Research
              Executive influences my dynamic academic approach. I've executed
              projects like an Amazon clone, showcasing practical expertise.
              Explore my portfolio at{" "}
              <span className="font-bold ">[https://github.com/SwippyA]</span>{" "}
              for insights into my commitment to innovation in computer science.
            </motion.p>
          </motion.div>
          <div className="flex justify-center items-center flex-col relative -top-6 ml-14">
            <motion.div
              className="w-32 home"
              animate={{
                scale: [1.3,0.6,1.2,1],
               
                opacity: 1,
              }}
              initial={{
                scale: 1,
              
                opacity: 0.1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <img
                src="https://img.freepik.com/premium-photo/number-2-alphabet-golden-3d-number-isolated-white-background-with-clipping-path-3d-illustration_161844-513.jpg?w=740"
                alt=""
              />
            </motion.div>

            <motion.div
              className="text-4xl relative top-8 font-semibold "
              animate={{
                x: 0,
                opacity: 1,
              }}
              initial={{
                x: -1000,
                opacity: 0.2,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
                when: "beforeChidren",
              }}
            >
              Years of <span className="font-bold"> Experience </span>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex  w-full  justify-between mt-5 "
          variants={variant}
          animate="animate"
          initial="initial"
        >
          <div>
            <h1 className=" text-gray-400 text-xl ">Name:</h1>
            <h1 className="text-2xl font-bold">Shubhankar Swain</h1>
          </div>
          <div>
            <h1 className=" text-gray-400 text-xl ">Email:</h1>
            <a className="text-2xl font-bold cursor-pointer">
              shubhankarswain16@gmail.com
            </a>
          </div>
          <div>
            <h1 className=" text-gray-400 text-xl ">Date of Birth:</h1>
            <h1 className="text-2xl font-bold">18 June 2004</h1>
          </div>
          <div>
            <h1 className=" text-gray-400 text-xl ">from:</h1>
            <h1 className="text-2xl font-bold">Pune,India.</h1>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About;
