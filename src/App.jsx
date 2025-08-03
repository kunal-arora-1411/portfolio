
import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="scroll-smooth">
      <header className="fixed w-full z-50 backdrop-blur bg-black/50 p-4">
        <nav className="container mx-auto flex justify-between">
          <a href="#home" className="text-xl font-bold">Kunal Arora</a>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#timeline" className="hover:text-blue-400">Experience</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </nav>
      </header>
      <main className="pt-20">
        <section id="home" className="relative h-screen">
          <Hero />
        </section>
        <motion.div id="about" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="container mx-auto py-20">
          <About />
        </motion.div>
        <motion.div id="projects" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-gray-800 py-20">
          <Projects />
        </motion.div>
        <motion.div id="timeline" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="container mx-auto py-20">
          <Timeline />
        </motion.div>
        <motion.div id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-gray-800 py-20">
          <Contact />
        </motion.div>
      </main>
      <footer className="text-center py-4 bg-black">
        © {new Date().getFullYear()} Kunal Arora
      </footer>
    </div>
  )
}

export default App
