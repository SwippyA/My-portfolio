import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-black p-6 ">
        <div className="flex text-white p-7 items-center justify-between ">
          <div>
            Copyright @ 2023{" "}
            <span className="text-yellow-200  font-bold  text-lg underline hover:text-yellow-300 duration-100  hover:cursor-pointer">
            <a href="https://www.linkedin.com/in/shubhankar-swain-82697924b/">Shubhankar.</a>
            </span>{" "}
            All Rights Reserved.
          </div>
          <div>
            Designed by{" "}
            <span className="text-yellow-200 underline font-bold  text-lg  hover:text-yellow-300  duration-100 hover:cursor-pointer">
              <a href="https://www.linkedin.com/in/shubhankar-swain-82697924b/">Shubhankar Swain.</a>
            </span>
          </div>
        </div>
        <div className="flex justify-end text-white">
          <a href="#">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
