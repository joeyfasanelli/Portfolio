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

        <div className="relative w-full flex justify-evenly z-20 snap-mandatory snap-x">
            <div className="flex snap-mandatory snap-x">
                <div className="w-[500px] p-20 flex-shrink-0 snap-center flex flex-col items-center justify-center">
                    <a href="https://your-daily-zen.vercel.app/" target="_blank">
                    <img
                    className="rounded-md"
                    src="https://i.imgur.com/JfzdTok.png"
                    alt=""
                    />
                    </a>
                        <div>
                            <br></br>
                            <h4 className="text-3xl font-semi-bold text-center">
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

                <div className="w-[500px] p-20 flex-shrink-0 snap-center flex flex-col items-center justify-center">
                    <a href="https://film-slate.vercel.app/" target="_blank">
                    <img
                    className="rounded-md"
                    src="https://i.imgur.com/lXhJhiI.jpg"
                    alt=""
                    />
                    </a>
                        <div>
                            <br></br>
                            <h4 className="text-3xl font-semi-bold text-center">
                                FilmSlate
                            </h4>
                            <br></br>
                            <p className="text-lg text-center">
                            Discover films that inspire.                    
                            </p>
                            <br></br>
                            <a href="https://github.com/joeyfasanelli/Film-Slate" className="text-[#F7AB0A] flex justify-center">GitHub</a>
                        </div>
                </div>

                <div className="w-[500px] p-20 flex-shrink-0 snap-center flex flex-col items-center justify-center">
                    <a href="https://github.com/joeyfasanelli/Angry-Birds-Dupe" target="_blank">
                    <img
                    className="rounded-md"
                    src="https://i.imgur.com/ZnmGcWr.jpg"
                    alt=""
                    />
                    </a>
                        <div>
                            <br></br>
                            <h4 className="text-3xl font-semi-bold text-center">
                                Angry Birds Clone
                            </h4>
                            <br></br>
                            <p className="text-lg text-center">
                            A dive into C#.                    
                            </p>
                            <br></br>
                            <a href="https://github.com/joeyfasanelli/Angry-Birds-Dupe" className="text-[#F7AB0A] flex justify-center">GitHub</a>
                        </div>
                </div>
            </div>
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12">

        </div>
    </motion.div>

    
  )
}

export default Projects
