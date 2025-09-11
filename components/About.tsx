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
            I'm a Full-Stack Developer with 2+ years of experience, based in Tampa, Florida. After spending four years in tech sales, I followed my passion for computer science and made the leap into software development three years ago, which is one of the best decisions I've made. Currently, I work at Bulkitrade building user-friendly web applications with Angular, React, and TypeScript. My sales background gives me a unique perspective on creating solutions that not only work well technically, but actually solve real business problems for users. I love the challenge of turning complex requirements into clean, intuitive digital experiences. Whether it's optimizing performance, improving user interfaces, or collaborating with cross-functional teams, I'm driven by the opportunity to build software that makes a meaningful impact.
            </p>
        </div>
    </motion.div>
  )
}

export default About
