import Head from 'next/head'
import Image from 'next/image'
import { readBuilderProgram } from 'typescript'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Joey's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center"> 
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      
      {/* Experience */}
      
      {/* Skills */}
      
      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}
