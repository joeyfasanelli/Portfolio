import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article id="shrink" className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[530px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden mt-20">
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.imgur.com/kJfaEqI.png"
        alt=""
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">
                Software Engineering Student
            </h4>
            <p className="font-bold text-2xl mt-1">
                General Assembly
            </p>
            <div className="flex space-x-2 my-2">
                
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                alt=""
                />
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                alt=""
                />
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                alt=""
                />
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt=""
                />
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                alt=""
                />
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                alt=""
                />
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt=""
                />
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
                alt=""
                />
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt=""
                />
                <img
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt=""
                />
            </div>
            <p className="uppercase py-5 text-gray-300">
                8/8/2022 - 10/31/2022
            </p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Full-stack software engineering 420+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.</li>

            </ul>
        </div>
        

    </article>

    

    
  )
}

export default ExperienceCard