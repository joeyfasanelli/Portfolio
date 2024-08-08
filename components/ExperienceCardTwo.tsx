import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCardTwo({}: Props) {
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
          src="https://i.imgur.com/CM8qN07.jpg"
          alt=""
          />
  
          <div className="p-5 h-[100%]">
              <h4 className="text-4xl font-light">
                  Web Applications Engineer
              </h4>
              <p className="font-bold text-2xl mt-1">
                  Florida SouthWestern State College
              </p>
              <div className="flex space-x-2 my-2">
                  
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                  alt=""
                  />
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
              </div>
              <p className="uppercase py-5 text-gray-300">
                  Dec. 2022 - Jan. 2024
              </p>
              <ul className="list-disc space-y-4 ml-5 text-lg">
                  <li>Maintain web pages on a regular basis, adhering to college specifications, resulting in a 98% satisfaction rate from stakeholders.</li>
                  <li>Migrate and refactor code to adapt with new implementations and processes, resulting in a significant decrease in code maintenance time.</li> 
                  <li>Develop new web pages using MVC architecture and utilize web development best practices.</li>
                  <li>Demonstrate problem-solving skills by effectively utilizing documentation and external resources to resolve complex issues, resulting in a ~70% reduction in turnaround time for issue resolution.</li>
              </ul>
          </div>
      </article>
  
      
    )
  }
  
  export default ExperienceCardTwo
