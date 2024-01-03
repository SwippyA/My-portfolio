import React from "react";

function Resume() {
  return (
    <>
      <div className="flex flex-col mx-9  mb-16 justify-center items-center ">
        <div className="flex flex-col items-center">
          <div className="bg-yellow-200 font-semibold p-1 mt-24 text-xl mb-2">
            Resume
          </div>
          <div className="text-5xl font-bold mt-3">A Summary Of My Resume</div>
        </div>

        <div className="flex mt-16 ">
          <div className="flex flex-col w-1/2 gap-9">
            <h1 className=" font-bold text-3xl">My Education</h1>
            <div className="ml-3 p-3 border-l-4 border-yellow-200">
              <div className="flex flex-col gap-2  border-b-2 p-3 ">
                <h1 className="font-bold text-xl ">
                  -Bachelor in Computer Science
                </h1>
                <h1 className=" font-semibold ">MIT WPU /2022-2026</h1>
                <p className=" text-gray-500">
                  <span className="text-black  font-bold block">
                    {" "}
                    Grade: 8.8
                  </span>
                  Skills: DSA in c programming · C (Programming Language),OPPS
                  in C++,Web Designing.
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4 border-b-2 p-3">
                <h1 className="font-bold text-xl ">-HSC High School</h1>
                <h1 className=" font-semibold ">
                  Keraleeya Samajam Dombivlis Model College /2020-2022
                </h1>
                <p className=" text-gray-500">
                  <span className="text-black  font-bold block">
                    {" "}
                    Grade: 8.0
                  </span>
                  Activities and societies: Win ! PUGB tournament,Social
                  Plantations
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4 border-b-2 p-3">
                <h1 className="font-bold text-xl ">-SSC Junior High School</h1>
                <h1 className=" font-semibold ">
                  Divine Paradice High School/2019-2020
                </h1>
                <p className=" text-gray-500">
                  <span className="text-black  font-bold block">
                    {" "}
                    Grade: 8.9
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex  flex-col w-1/2 gap-8">
            <h1 className=" font-bold text-3xl">My Experience</h1>
            <div className="ml-3 p-3 border-l-4 border-yellow-200">
              <div className="flex flex-col gap-2 border-b-2 p-3 ">
                <h1 className="font-bold text-2xl ">-Head of Data</h1>
                <h1 className=" font-semibold ">Innovation Hub /2022-2023</h1>
                <p className=" text-gray-500">
                  <span className="text-black  font-bold block">
                    :Directs comprehensive management and strategic utilization
                    of organizational data.
                  </span>
                  :Possesses expertise in data architecture, machine learning,
                  and emerging technologies.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-5 border-b-2 p-3 ">
                <h1 className="font-bold text-2xl ">-Research Executive </h1>
                <h1 className=" font-semibold ">
                  FTGS (Future Tech Global Solution)/2022
                </h1>
                <p className=" text-gray-500">
                  <span className="text-black  font-bold block">
                    :Plans and executes research projects in line with
                    organizational objectives.
                  </span>
                  :Conducts thorough analysis of research findings and provides
                  meaningful interpretations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full m-4 ">
          <h1 className="text-4xl  font-bold my-8  text-center  hover:underline">My Skills</h1>
          <div className=" flex flex-wrap  ">
          
            <div className="w-1/2  p-2 ">
              <h1 className="font-bold text-xl">
                C++
                <span className=" float-right">80%</span>
              </h1>
              <div className=" w-4/5 bg-yellow-200">""</div>
            </div>
            <div className="w-1/2  p-2 ">
              <h1 className="font-bold text-xl">
                Data Structure
                <span className=" float-right">75%</span>
              </h1>
              <div className="w-3/4 bg-yellow-200">""</div>
            </div>
            <div className="w-1/2  p-2 ">
              <h1 className="font-bold text-xl">
                React JS
                <span className=" float-right">80%</span>
              </h1>
              <div className="w-4/5 bg-yellow-200">""</div>
            </div>
            <div className="w-1/2  p-2 ">
              <h1 className="font-bold text-xl">
               JavaScript
                <span className=" float-right">90%</span>
              </h1>
              <div className=" w-11/12 bg-yellow-200">""</div>
            </div>
            <div className="w-1/2  p-2 ">
              <h1 className="font-bold text-xl">
                Html/Css/Tailwind
                <span className=" float-right">100%</span>
              </h1>
              <div className="bg-yellow-200">""</div>
            </div>           
            <div className="w-1/2  p-2 ">
              <h1 className="font-bold text-xl">
                Web Design
                <span className=" float-right">65%</span>
              </h1>
              <div className="w-3/5 bg-yellow-200">""</div>
            </div>
          </div>
        </div>
        <div className="my-16">
            <a className="border-2 border-black font-semibold  hover:bg-yellow-200 duration-500 px-5 py-4 " href="../../../resume.pdf" download="shubhankar.swain.pdf">Download CV</a>
        </div>
      </div>
    </>
  );
}

export default Resume;
