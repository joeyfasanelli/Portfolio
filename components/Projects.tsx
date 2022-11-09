import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    // const projects=[1, 2, 3, 4, 5];
  return (
    <motion.div 
    initial={{ 
        opacity: 0}}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {/* {projects.map((project, i) =>( */}
                <div className="w-[600px] p-20 flex-shrink-0 snap-center flex flex-col items-center justify-center">
                    <img
                    className="rounded-md"
                    src="https://i.imgur.com/owHCRC2.png"
                    alt=""
                    />

                <div>
                    <br></br>
                    <h4 className="text-2xl font-semi-bold text-center">
                        <span className="underline decoration-[#FFBF00]/50">Case Study 1 of 3:
                        </span>{" "}
                        YourDailyZen
                    </h4>
                    <br></br>
                    <p className="text-lg text-center">
                    A quote generator for mindfulness and inspiration.                    
                    </p>
                    <br></br>
                    <a href="https://github.com/joeyfasanelli/YourDailyZen" className="text-[#F7AB0A] flex justify-center">GitHub</a>

                </div>

                </div>
                <div className="w-[600px] p-20 flex-shrink-0 snap-center flex flex-col items-center justify-center mt-6">
                    <img
                    className="rounded-md"
                    src="https://i.imgur.com/UI8JBpT.png"
                    alt=""
                    />

                <div>
                    <br></br>
                    <h4 className="text-2xl font-semi-bold text-center">
                        <span className="underline decoration-[#FFBF00]/50">Case Study 2 of 3:
                        </span>{" "}
                        SynthSense
                    </h4>
                    <br></br>
                    <p className="text-lg text-center">
                        SynthSense is a synthwave-themed digital journal for adding and tracking synthwave and retrowave music.
                    </p>
                    <br></br>
                    <a href="https://github.com/joeyfasanelli/SynthSense" className="text-[#F7AB0A] flex justify-center">GitHub</a>

                </div>

                </div>
                <div className="w-[600px] p-20 flex-shrink-0 snap-center flex flex-col items-center justify-center mt-5">
                    <img
                    className="rounded-md"
                    src="https://i.imgur.com/C7n8GsQ.png"
                    alt=""
                    />

                <div>
                    <br></br>
                    <h4 className="text-2xl font-semi-bold text-center">
                        <span className="underline decoration-[#FFBF00]/50">Case Study 3 of 3:
                        </span>{" "}
                        FilmSlate
                    </h4>
                    <br></br>
                    <p className="text-lg text-center">
                        An app that allows you to search through thousands of movies and tv-shows, and also add reviews!
                    </p>
                    <br></br>
                    <a href="https://github.com/joeyfasanelli/FilmSlate" className="text-[#F7AB0A] flex justify-center">GitHub</a>
                </div>

                </div>
            {/* ))} */}

        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12">

        </div>
    </motion.div>

    
  )
}

export default Projects