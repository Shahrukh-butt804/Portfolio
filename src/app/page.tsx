'use client'

import { Button } from "@/components/ui/button";
import SpinnerImage from "../components/ui/SpinnerImage"
// import pdf from "../../public/Shahrukh_butt"

// React framer
import { motion } from "framer-motion"

// For Logos
import { FaGithub, FaLinkedin } from "react-icons/fa";


// external libaray for count
import CountUp from 'react-countup';

export default function Home() {

  let status = [
    {
      text: "Post",
      value: 30
    },
    {
      text: "Commits",
      value: 100,

    },
    {
      text: "Porjects",
      value: 10
    }
  ]


  return (
    <div className="bg-black sm:mb-10 lg:mb-0 md:-mt-7">
      {/* Hero section */}
      <div className="container px-3 lg:ms-24 flex justify-self-start items-center flex-col-reverse md:flex-row ">
        <div className="container mb-4 lg:ms-[-60px] lg:h-[80vh] lg:flex-col lg:items-center lg:justify-center lg:flex-shrink-2
    block lg:flex ">
          <motion.h4
            animate={{ y: 80, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white text-5xl opacity-0 mb-20 lg:ms-5 lg:text-7xl font-bold ">
            FRONTEND
          </motion.h4>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.1, delay: 0.6 }}
            animate={{ opacity: 1, x: 0 }} className="text-green-400 mt-1 opacity-0 text-5xl lg:ms-5 lg:text-8xl font-bold ">
            DEVELOPER
          </motion.p>

          <motion.h2 animate={{ opacity: 1, scale: 1, y: 10 }} className="text-lg mt-[-10] w-full opacity-50 text-white lg:ms-12 lg:text-xl " >My name is
            <span className="text-green-300 uppercase font-semibold"> Shahrukh Butt</span>
            . I am a Front-end Developer based in pakistan. I have Developed E-commerce, Todos ,Quiz And Uber App by using well knowing Technologies React ,React-Native, Redux Toolkit , Javascript ,CSS and HTML..</motion.h2>


          {/* buttons for download CV and social media */}
          <div className=" flex items-center gap-5 mt-8">
            <a href="/Shahrukh_butt.pdf" download>
            <Button className="outline outline-green-400 bg-transparent hover:text-green-400">Download Cv</Button>
            </a>
            <a href="https://github.com/Shahrukh-butt804" target="_blank">
              <FaGithub className="text-white text-5xl rounded-full outline outline-green-400 p-2 hover:text-green-400 " />
            </a>
            <a href="https://www.linkedin.com/in/shahrukh-butt-511b622b7" target="_blank">
              <FaLinkedin className="text-white text-5xl rounded-full outline outline-green-400 p-2 hover:text-green-400 " />
            </a>

          </div>


        </div>

        {/* Image Inside The Spinner */}
        <div className="container ">
          <SpinnerImage />
          <div>
          </div>
        </div>

      </div>

      {/* Status With CountUp */}
      <div className="container  flex md:flex-row flex-col justify-evenly items-center flex-wrap md:flex-nowrap  gap-4 lg:gap-20 mt-2 lg:-mt-5">

        {status.map((item,index) => (
          <div key={index} className="flex gap-3 items-center">
          <CountUp className="text-green-400 text-xl md:text-4xl lg:text-6xl font-extrabold" end={item.value} />
            <div>
            <h1 className="text-white font-extrabold text-xl">Total {item.text}</h1>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
