import React from 'react'
export default function About() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto mb-6">
        I am a final-year B.Tech student at UPES, Dehradun, specializing in AI & ML. I have worked at SNeT Labs, where I build real-time deep learning solutions. My passion is creating impactful AI applications that solve real-world problems.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
        {['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Git', 'SQL'].map(skill => (
          <span key={skill} className="px-4 py-2 bg-gray-700 rounded">{skill}</span>
        ))}
      </div>
    </div>)
}