
import React from 'react'
export default function Projects() {
  const projects = [
    {
      title: 'Underwater Image Enhancement',
      desc: 'Transformer-based pipeline for enhancing underwater images.(in progress)',
      link: 'https://github.com/kunal-arora-1411/underwater-enhancement.git'
    },
    {
      title: 'Traffic Sign Detection',
      desc: 'Real-time DCNN system for recognizing traffic signs.(in progress)',
      link: 'https://github.com/kunal-arora-1411/traffic-sign-detection.git'
    },
    {
      title: 'Plant Guard Net: Smart Plant Disease Detection',
      desc: 'Engineered a custom CNN model to classify 15 plant leaf diseases across tomato, potato, and bell pepper crops, achieving 86.48% test accuracy on the Plant Village dataset.',
      link: 'https://github.com/kunal-arora-1411/PlantGuardNet.git'
    },
    {
      title: 'Handwriting Generation (GAN)',
      desc: 'TO BE ADDED',
      link: ''
    }
  ]
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map(p => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="p-6 bg-gray-700 rounded hover:bg-gray-600 transition">
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </div>)
}