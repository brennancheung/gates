import mousePos from './mousePos'

const draggable = node => {
  let original = { x: 0, y: 0 }
  let delta = { x: 0, y: 0 }
  let startDragPos = { x: 0, y: 0 }
  let dragging = false

  let xPos = 0
  let yPos = 0

  function dispatchPanEvent () {
    node.dispatchEvent(new CustomEvent('pan', { detail: { dragging, delta: { x: xPos, y: yPos } } }))
  }

  const unsubscribe = mousePos.subscribe(mouse => {
    delta = {
      x: mouse.x - startDragPos.x,
      y: mouse.y - startDragPos.y,
    }

    if (dragging) {
      xPos = original.x + delta.x
      yPos = original.y + delta.y
      dispatchPanEvent()
    }
  })

  function handleMouseDown (e) {
    dragging = true
    startDragPos = { x: e.clientX, y: e.clientY }
    node.addEventListener('mouseup', handleMouseUp)
    dispatchPanEvent()
  }

  function handleMouseUp (e) {
    dragging = false
    original = { x: xPos, y: yPos  }
    dispatchPanEvent()
  }

  node.addEventListener('mousedown', handleMouseDown)
  node.addEventListener('mouseup', handleMouseUp)

  const canvas = document.querySelector('.main-canvas')
  canvas.addEventListener('mouseleave', handleMouseUp)

  return {
    destroy () {
      node.removeEventListener('mousedown', handleMouseDown)
      node.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('mouseleave', handleMouseUp)
      unsubscribe()
    }
  }
}

export default draggable
