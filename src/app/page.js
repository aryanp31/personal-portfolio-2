"use client"

import Head from "next/head"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiOutlineTablet, AiOutlineRise } from 'react-icons/ai'
import { FaReact, FaNode, FaHtml5, FaPython, FaCalculator } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiJavascript, SiCss3, SiCloudera } from 'react-icons/si'
import { MdMemory, MdOutlineWebAsset } from "react-icons/md"
import { GiArtificialIntelligence } from "react-icons/gi"
import { PiFolderSimpleUser } from "react-icons/pi";
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="px-8 md:px-20 lg:px-40 py-8 flex justify-between sticky top-0 bg-white dark:bg-gray-700 drop-shadow-md min-w-screen">
        <ul className="flex items-center">
          <li className="text-xl bg-gradient-to-r bg-clip-text hover:from-cyan-500 hover:to-teal-500 hover:text-transparent transition duration-250 dark:text-white dark:hover:to-teal-400 dark:hover:text-transparent"><a href="#home">Home</a></li>
          <li className="text-xl bg-gradient-to-r bg-clip-text hover:from-cyan-500 hover:to-teal-500 hover:text-transparent transition duration-250 dark:text-white dark:hover:to-teal-400 dark:hover:text-transparent ml-6"><a href="#projects">Projects</a></li>
        </ul>
        <ul className="flex items-center">
          <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-xl dark:fill-white"/></li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-6" href="Aryan_Patel_Resume.pdf" target="_blank">Resume</a></li>
        </ul>
      </nav>
      <main className="bg-white px-2 md:px-20 lg:px-40 dark:bg-gray-700 pt-20 lg:pt-0" id="home">
        <section className="min-h-screen">
          <div className="text-center p-10 lg:flex lg:py-52">
            <div className="mx-auto p-4">
              <h2 className="text-5xl py-2 font-md md:text-6xl text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-teal-500 dark:to-teal-400">Aryan Patel</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer and designer.</h3>
              <p className="text-md py-5 leading-8 text-gray-800 mx-auto max-w-xl md:text-lg dark:text-white">
              Hey! 👋 My name is Aryan Patel and I am a Junior at the University of Illinois at Urbana-Champaign where I am pursuing a B.S. in Statistics and Computer Science.</p>
              <div className="text-4xl flex justify-center gap-16 py-3  dark:text-white">
                <a href="https://linkedin.com/in/aryanpatel10" target="_blank"><AiFillLinkedin className="hover:scale-125 transition ease-in-out "/></a>
                <a href="https://github.com/aryanp31" target="_blank"><AiFillGithub className="hover:scale-125 transition ease-in-out"/></a>
                <a href="mailto:aryanpatel31@yahoo.com" target="_blank"><AiFillMail className="hover:scale-125 transition ease-in-out"/></a>
              </div>
            </div>
            <div className="relative mx-auto mt-10 overflow-hidden rounded-full w-72 h-72 md:h-96 md:w-96 md:mt-0">
              <Image src="/aryanPortrait1.jpg" alt="Portrait of Aryan" fill style={{objectFit: "cover"}} />
            </div>
          </div>
        </section>
        
        <section id="projects" className="pt-28">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-100">
            Some languages I am able to utilize include, JavaScript, Python, C, C++, Java, HTML, and CSS. Additionally, some frameworks and technologies I am proficient in include, React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, Git, Docker, VS Code, and Android Studio.
            </p>
          </div>
          <div className="lg:flex lg:flex-wrap gap-6 justify-center">

            <div className="text-center bg-gray-50 dark:bg-gray-800 shadow-lg p-6 rounded-xl my-10">
              <div className="flex justify-center items-center">
                <PiFolderSimpleUser className="text-5xl dark:fill-white"/>
                <a href="https://github.com/aryanp31/personal-portfolio-2" target="_blank" className="flex items-center">
                  <h3 className="text-2xl ml-4 bg-gradient-to-r bg-clip-text hover:from-cyan-500 hover:to-teal-500 hover:text-transparent transition duration-250 dark:text-white dark:hover:to-teal-400 dark:hover:text-transparent">Personal Portfolio</h3>
                  <AiOutlineRise className="text-xl ml-2  dark:fill-white"/>
                </a>
              </div>
              <p className="py-8 max-w-sm dark:text-white">
              Created a personal portfolio to display projects and showcase web development skills
              </p>
              <h4 className="text-xl py-2 text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-teal-500 dark:to-teal-400">Languages & Technologies</h4>
              <div className="flex items-center justify-center py-4 space-x-4">
                <FaReact className="text-3xl dark:fill-white"/>
                <SiNextdotjs className="text-3xl dark:fill-white"/>
                <SiTailwindcss className="text-3xl dark:fill-white"/>
              </div>
            </div>

            <div className="text-center bg-gray-50 dark:bg-gray-800 shadow-lg p-6 rounded-xl my-10">
              <div className="flex justify-center items-center">
                <AiOutlineTablet className="text-5xl dark:fill-white"/>
                <a href="https://github.com/aryanp31/social-app" target="_blank" className="flex items-center">
                  <h3 className="text-2xl ml-4 bg-gradient-to-r bg-clip-text hover:from-cyan-500 hover:to-teal-500 hover:text-transparent transition duration-250 dark:text-white dark:hover:to-teal-400 dark:hover:text-transparent">Social Media App</h3>
                  <AiOutlineRise className="text-xl ml-2  dark:fill-white"/>
                </a>
              </div>
              <p className="py-8 max-w-sm dark:text-white">
              Full-stack implementation of a social media app allowing users to create accounts, post pictures, and interact with one another
              </p>
              <h4 className="text-xl py-2 text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-teal-500 dark:to-teal-400">Languages & Technologies</h4>
              <div className="flex items-center justify-center py-4 space-x-4">
                <FaReact className="text-3xl dark:fill-white"/>
                <FaNode className="text-3xl dark:fill-white"/>
                <SiExpress className="text-3xl dark:fill-white"/>
                <SiMongodb className="text-3xlm dark:fill-white"/>
              </div>
            </div>

            <div className="text-center bg-gray-50 dark:bg-gray-800 shadow-lg p-6 rounded-xl my-10">
              <div className="flex justify-center items-center">
                <MdMemory className="text-5xl dark:fill-white"/>
                <h3 className="text-2xl ml-4 bg-gradient-to-r bg-clip-text hover:from-cyan-500 hover:to-teal-500 hover:text-transparent transition duration-250 dark:text-white dark:hover:to-teal-400 dark:hover:text-transparent">Memory Allocator</h3>
              </div>
              <p className="py-8 max-w-sm dark:text-white">
              Created a Memory Allocator mimicking the functionality of malloc using first-fit model and immediate coalescing
              </p>
              <h4 className="text-xl py-2 text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-teal-500 dark:to-teal-400">Languages & Technologies</h4>
              <div className="flex items-center justify-center py-4 space-x-4">
                <SiCloudera className="text-3xl dark:fill-white"/>
              </div>
            </div>

            <div className="text-center bg-gray-50 dark:bg-gray-800 shadow-lg p-6 rounded-xl my-10">
              <div className="flex justify-center items-center">
                <MdOutlineWebAsset className="text-5xl dark:fill-white"/>
                <a href="https://github.com/aryanp31/msa-website" target="_blank" className="flex items-center">
                  <h3 className="text-2xl ml-4 bg-gradient-to-r bg-clip-text hover:from-cyan-500 hover:to-teal-500 hover:text-transparent transition duration-250 dark:text-white dark:hover:to-teal-400 dark:hover:text-transparent">UIUC MSA Website</h3>
                  <AiOutlineRise className="text-xl ml-2  dark:fill-white"/>
                </a>
              </div>
              <p className="py-8 max-w-sm dark:text-white">
              Created the official UIUC Muslim Student Association Website to be used by over 1000 members for updates and news
              </p>
              <h4 className="text-xl py-2 text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-teal-500 dark:to-teal-400">Languages & Technologies</h4>
              <div className="flex items-center justify-center py-4 space-x-4">
                <SiJavascript className="text-3xl dark:fill-white"/>
                <FaHtml5 className="text-3xl dark:fill-white"/>
                <SiCss3 className="text-3xl dark:fill-white"/>
              </div>
            </div>

            <div className="text-center bg-gray-50 dark:bg-gray-800 shadow-lg p-6 rounded-xl my-10">
              <div className="flex justify-center items-center">
                <GiArtificialIntelligence className="text-5xl dark:fill-white"/>
                <h3 className="text-2xl ml-4 bg-gradient-to-r bg-clip-text hover:from-cyan-500 hover:to-teal-500 hover:text-transparent transition duration-250 dark:text-white dark:hover:to-teal-400 dark:hover:text-transparent">K-means Clustering Model</h3>
              </div>
              <p className="py-8 max-w-sm dark:text-white">
              Created a k-means clustering model highlighting areas of increased violence within the Chicago area
              </p>
              <h4 className="text-xl py-2 text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-teal-500 dark:to-teal-400">Languages & Technologies</h4>
              <div className="flex items-center justify-center py-4 space-x-4">
                <FaPython className="text-3xl dark:fill-white"/>
              </div>
            </div>

            <div className="text-center bg-gray-50 dark:bg-gray-800 shadow-lg p-6 rounded-xl my-10">
              <div className="flex justify-center items-center">
                <FaCalculator className="text-5xl dark:fill-white"/>
                <a href="https://github.com/aryanp31/Calculator" target="_blank" className="flex items-center">
                  <h3 className="text-2xl ml-4 bg-gradient-to-r bg-clip-text hover:from-cyan-500 hover:to-teal-500 hover:text-transparent transition duration-250 dark:text-white dark:hover:to-teal-400 dark:hover:text-transparent">Calculator</h3>
                  <AiOutlineRise className="text-xl ml-4 dark:fill-white"/>
                </a>
              </div>
              <p className="py-8 max-w-sm dark:text-white">
              Created a responsive web calculator app to learn the basics of JavaScript and user-friendly web development
              </p>
              <h4 className="text-xl py-2 text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-teal-500 dark:to-teal-400">Languages & Technologies</h4>
              <div className="flex items-center justify-center py-4 space-x-4">
              <SiJavascript className="text-3xl dark:fill-white"/>
              <FaHtml5 className="text-3xl dark:fill-white"/>
              <SiCss3 className="text-3xl dark:fill-white"/>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
