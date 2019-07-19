import { assocPath } from 'ramda'
import { writable } from 'svelte/store'

const mousePos = writable({ x: 0, y: 0, hovered: {} })

const handleMouseMove = e => mousePos.update(state => ({
  ...state,
  x: e.clientX,
  y: e.clientY
}))

window.addEventListener('mousemove', handleMouseMove)

const setHovered = (key, value) =>
  // We don't want to update unnecessarily because it will
  // trigger other listeners and potentially cause infinite loops.
  if (mousePos.hovered[key] === value) { return }
  mousePos.update(assocPath(['hovered', key], value))

export default {
  ...mousePos,
  setHovered,
}
