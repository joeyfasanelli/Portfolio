import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        
        <motion.img
        initial={{
            x:-200,
            opacity: 0
        }}
        transition={{
            duration: 0.8,
        }}
        whileInView={{opacity:1, x:0}}
        viewport={{ once:true }}
        src="https://i.imgur.com/IKxONya.jpg?1"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px]"/>
        <br></br>
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a{" "} <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background about me:</h4>
            <p className="text-sm">
            I have spent 4 years in the field of tech sales learning everything I can about working on a team, leading a team, and collaboration in general. I have always found the products we sell very interesting and spent a lot of time talking with the dev teams about different coding languages; I realized I was equally if not much more excited about the building process as I was about selling these products.  I knew it was time for me to switch career paths when I started learning coding on my own, and my pursuit has been nothing less than incredible. I'm currently working as a Web Applications Engineer for a college here in Florida and utilizing tools such as Docker, Kubernetes, PHP and Laravel. 
            </p>
        </div>
    </motion.div>
  )
}

export default About