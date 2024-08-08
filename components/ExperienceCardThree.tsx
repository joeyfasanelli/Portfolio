import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCardThree({}: Props) {
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
          src="https://i.imgur.com/wHskhzd.png"
          alt=""
          />
  
          <div className="p-5 h-[100%]">
              <h4 className="text-4xl font-light">
                  Software Engineer
              </h4>
              <p className="font-bold text-2xl mt-1">
                  Bulkitrade
              </p>
              <div className="flex space-x-2 my-2">
                  
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  alt=""
                  />
                  <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt=""
                  />
              </div>
              <p className="uppercase py-5 text-gray-300">
                  Jan. 2024 - Present
              </p>
              <ul className="list-disc space-y-4 ml-5 text-lg">
                  <li>Design and develop new front-end features for customer-facing webpages utilizing HTML/CSS, Angular 16, JavaScript and Node.</li>
                  <li>Maintain existing frontend/backend code base and conduct debugging sessions with the team.</li> 
                  <li>Develop and maintain backend server applications using Express, ensuring robust and efficient performance for web services.</li>
                  <li>Setup CI/CD pipeline to avoid user-error & streamline deployment, reducing deployment time by ~50% and minimizing user-error instances.</li>
              </ul>
          </div>
      </article>
  
      
    )
  }
  
  export default ExperienceCardThree
