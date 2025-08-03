import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <motion.h1 className="text-5xl font-extrabold mb-4" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        Kunal Arora
      </motion.h1>
      <motion.p className="text-xl mb-6 max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        AI & Computer Vision Enthusiast
      </motion.p>
      <motion.a href="#projects" className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        View My Work
      </motion.a>
    </div>
  )
}