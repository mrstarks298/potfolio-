'use client'

import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const max = 50
    const mk = () => {
      const el = document.createElement('div')
      el.className = 'particle'
      const size = Math.random() * 6 + 2
      const x = Math.random() * window.innerWidth
      const dur = Math.random() * 10 + 10
      const delay = Math.random() * 5
      el.style.width = `${size}px`
      el.style.height = `${size}px`
      el.style.left = `${x}px`
      el.style.animationDuration = `${dur}s`
      el.style.animationDelay = `${delay}s`
      el.style.opacity = `${Math.random() * 0.3 + 0.1}`
      container.appendChild(el)
      setTimeout(() => el.remove(), (dur + delay) * 1000)
    }

    for (let i = 0; i < max; i++) setTimeout(mk, i * 100)
    const id = setInterval(() => {
      if (container.children.length < max) mk()
    }, 2000)

    return () => clearInterval(id)
  }, [])

  return <div ref={ref} className="particles-container" />
}
