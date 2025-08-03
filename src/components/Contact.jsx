
import React, { useState } from 'react'
export default function Contact() {
  const [status, setStatus] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    // Integrate EmailJS or another service here
    setStatus('Thank you! I will reply soon.')
  }
  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded bg-gray-700" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded bg-gray-700" />
        <textarea name="message" rows="4" placeholder="Your Message" required className="w-full p-3 rounded bg-gray-700"></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600">Send</button>
      </form>
      {status && <p className="mt-4 text-green-400">{status}</p>}
      <div className="mt-6 flex justify-center space-x-4">
        <a href="https://github.com/kunal-arora-1411" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kunal-arora-597a4827b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>)
}