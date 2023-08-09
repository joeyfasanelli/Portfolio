import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.5 }}
     className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>


        <div className="grid grid-cols-4 gap-5 m-2">
                <img
                  className="h-20 w-20"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-20 w-20"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-20 w-20"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-20 w-20"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-20 w-20"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
                  alt=""
                  />
                <img
                className="h-20 w-20"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt=""
                />
                <img
                className="h-20 w-20 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                />
        </div>
    </motion.div>
  )
}

export default Skills