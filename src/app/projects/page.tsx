'use client'
import Image from "next/image";
// import myImage from "../../images/img.jpg"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


// Images of Projects
import Quiz_SS from "/public/images/Quiz_SS.png"
import Meme_ss from "/public/images/Meme_SS.png"
import eCommerce from "/public/images/E-commerce_ss.png"
import weather_ss from "/public/images/weather-app-ss.png"
import github_Search_SS from "/public/images/Github_search_SS.png" 
import calculaotor_SS from "/public/images/calculaotor_SS.png"
import Todo_SS from "/public/images/Todo-SS.png"
import passGen_SS from "/public/images/passGen_ss.png"

import { motion } from "framer-motion"


function page() {

  const [projectIndex, setProjectIndex] = useState(0)


  let projects = [{
    name: "E-commerce",
    description: "I've crafted an e-commerce kind of web app using React and Firebase, featuring robust login/signup functionality for secure authentication. Users can seamlessly buy and sell items of their choice, leveraging a streamlined interface and Firebase's real-time database for smooth transactions. This platform ensures a user-friendly experience tailored for efficient online shopping and selling.",
    image: eCommerce,
    link:"https://e-commerce-6hh2twy3d-shahrukhs-projects-540648f7.vercel.app/"
  },
  {
    name: "Todo-App",
    description: "I've created a To-Do app using React, Redux Toolkit, and Tailwind CSS. The app features efficient state management with Redux Toolkit, a sleek, responsive design with Tailwind CSS, and seamless task management including adding, editing, and deleting tasks. It combines modern design and robust functionality for an optimal user experience.",
    image: Todo_SS,
    link:"https://todo-ikxr77w32-shahrukhs-projects-540648f7.vercel.app/"
  },
  {
    name: "Meme-Generator",
    description: "I've developed a meme generator app utilizing an API, enabling users to effortlessly create and share humorous content. This app empowers users with a vast library of templates and allows customization with text and images, fostering a seamless and enjoyable meme creation experience. Perfect for sharing laughs across social media platforms!",
    image: Meme_ss,
    link:"https://meme-generator-lac-nine.vercel.app/"
  },
  {
    name: "Quiz-app",
    description: "Dive into our dynamic React quiz web app, where I leverage APIs to fetch an array of questions and answers across various categories. Engage in an interactive experience spanning science, history, and more, all tailored to challenge and entertain. Test your knowledge with seamless integration and discover something new in every session ",
    image: Quiz_SS,
    link:"https://shahrukh-butt804.github.io/React-Quiz-App/"
  },
  {
    name: "Weather-app",
    description: "I've crafted a weather application using React.js, integrating an API to fetch real-time weather data. This project showcases my proficiency in frontend development with React, including state management, component architecture, and API integration. The app offers users current weather details and forecasts for multiple locations, enhancing usability through responsive design and intuitive UI interactions. It highlights my ability to deliver practical, data-driven solutions in web development, demonstrating both technical skill and a user-focused approach.",
    image: weather_ss,
    link:"https://weather-ezmbmo2ee-shahrukhs-projects-540648f7.vercel.app/"

  },
  {
    name: "Github-Search",
    description: "I've created a GitHub Profile Search web app using HTML, CSS, and JavaScript, leveraging the GitHub API. This app allows users to search for GitHub profiles by username, displaying essential information such as profile picture, bio, and repositories. The clean, intuitive design and interactive features provide a seamless experience for exploring GitHub users.",
    image: github_Search_SS,
    link:"https://shahrukh-butt804.github.io/Github-Profile-Search/"

  },
  {
    name: "Password-generator",
    description: "I created a React-based Password Generator that produces random passwords. Users can customize their passwords by selecting whether to include numbers and special characters, providing both security and flexibility in password creation.",
    image: passGen_SS,
    link:"https://password-generator-94jgjy3yh-shahrukhs-projects-540648f7.vercel.app/"

  },
  {
    name: "Calculator",
    description: "I've created a simple calculator that follows the BODMAS rule, ensuring accurate calculations. It correctly handles Division, Multiplication, Addition, and Subtraction in the proper sequence. By adhering to this order of operations, the calculator provides reliable results for arithmetic expressions, making complex calculations straightforward and precise.",
    image: calculaotor_SS,
    link:"https://calculator-4hk.vercel.app/"

  },


  ]




  return (
    <div className='bg-black mb-20'>
      <div className="container flex justify-center items-center
      flex-col-reverse lg:flex-row
      ">


        <div className="md:container  mt-2 flex flex-col gap-3">
            <h1 className="md:text-8xl text-3xl font-bold text-white">0{projectIndex + 1}/0{projects.length} </h1>
            <h1 className="text-4xl font-bold text-green-400">{projects[projectIndex].name}</h1>
            <p className="text-lg text-white">{projects[projectIndex].description}</p>


            <div className="flex gap-2 items-center">
              <h2 className="text-green-400 text-sm md:text-base">deployed Link &nbsp;:</h2>
              <Link className="text-white hover:text-white/50 text-sm md:text-base" target="_blank" href={projects[projectIndex].link}>{projects[projectIndex].link}</Link>
            </div>
        </div>



        <div className=" h-full mt-10 md:ps-10
        mb-10 ">
          {/* image container */}
          <div className=" bg-white rounded-lg   justify-center items-center">
            <Image src={projects[projectIndex].image} alt="project image" className="w-full  h-full rounded-lg" />
          </div>
          <div className="container flex  justify-between ">
            <Button
            variant={"ghost"}
             onClick={() => {
                setProjectIndex(projectIndex - 1)
            }
            } className="text-white mt-10 outline outline-green-400 
            hover:outline-none rounded-xl" disabled={projectIndex == 0}>privious</Button>



          {!(projectIndex == projects.length-1)?
            <motion.div
            initial={{x:'8vw'}}
            animate={{x:0}}
            transition={{type:"spring", stiffness:2000}}
            >


            <Button 
            variant={"ghost"}
            onClick={() => {
              setProjectIndex(projectIndex + 1)
            }
          } className="text-white mt-10 outline outline-green-400 
          hover:outline-none rounded-xl" >Next</Button>

          </motion.div>
          :
          <></>

}


          </div>
        </div>





      </div>




    </div>
  )
}

export default page
