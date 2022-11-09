import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects=[1, 2, 3, 4, 5];
  return (
    <motion.div 
    initial={{ 
        opacity: 0}}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {projects.map((project, i) =>(
                <div className="w-[600px] p-20 flex-shrink-0 snap-center flex flex-col spac-y-5 items-center justify-center">
                    <img
                    src="https://i.imgur.com/jzIEzlo.jpg"
                    alt=""
                    />

                <div>
                    <br></br>
                    <h4 className="text-2xl font-semi-bold text-center">
                        <span className="underline decoration-[#FFBF00]/50">Case Study {i + 1} of {projects.length}:
                        </span>{" "}
                        SynthSense
                    </h4>
                    <br></br>
                    <p className="text-lg text-center">
                        SynthSense is a synthwave-themed digital journal for adding and tracking synthwave and retrowave music.
                    </p>
                </div>

                </div>
            ))}

        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12">

        </div>
    </motion.div>

    
  )
}

export default Projects