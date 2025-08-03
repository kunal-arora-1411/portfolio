
// src/components/Timeline.jsx
import React from 'react'

export default function Timeline() {
  const items = [
    { date: '2022 – Present', label: 'B.Tech, Computer Science at UPES, Dehradun' },
    { date: 'June 2025 – July 2025', label: 'AI/ML Intern at SNeT Labs Private Limited' }
  ]
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <h2 className="text-3xl font-bold mb-8">Experience & Education</h2>
      <div className="space-y-8 flex flex-col items-center">
        {items.map(i => (
          <div key={i.date} className="flex flex-col md:flex-row items-center md:space-x-4">
            <span className="font-mono text-sm">{i.date}</span>
            <span className="hidden md:inline-block text-lg text-blue-500 mx-2">|</span>
            <p className="mt-2 md:mt-0 text-lg">{i.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
