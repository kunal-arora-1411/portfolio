import React from 'react'

export default function Disc() {
  return (
    <div
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 -z-10 pointer-events-none overflow-hidden"
      style={{
        /* Semi-circle: top half of 256px circle */
        borderTopLeftRadius: '128px',
        borderTopRightRadius: '128px',
        background: 'linear-gradient(to top right, #2563EB, #3B82F6)',
        transform: `translateX(-50%) rotate(var(--disc-rotate))`,
        transformOrigin: 'center bottom',
        transition: 'transform 0.5s ease-out'
      }}
    />
  )
}
