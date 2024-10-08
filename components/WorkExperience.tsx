import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import ExperienceCardTwo from './ExperienceCardTwo'
import ExperienceCardThree from './ExperienceCardThree'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
        </h3>
    
        <div className="absolute w-full flex justify-center space-x-5 p-10 mt-2 snap-x snap-mandatory">
            {/* <ExperienceCard/> */}
            <ExperienceCardTwo/>
            <ExperienceCardThree/>
             
        </div>
    </motion.div>
  )
}

export default WorkExperience
