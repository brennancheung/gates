import { readable } from 'svelte/store'

const mousePos = readable({ x: 0, y: 0 }, set => {
  const handleMouseMove = e => set({ x: e.clientX, y: e.clientY })
  return window.addEventListener('mousemove', handleMouseMove)
})

export default mousePos
