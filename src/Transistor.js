import Konva from 'konva'

const Transistor = () => {
  console.log('new transitor')
  const shape = new Konva.Circle({
    x: 100,
    y: 100,
    radius: 40,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 1,
    draggable: true,
  })

  const initialPos = { x: shape.x(), y: shape.y() }

  shape.on('mouseover touchstart', e => {
    // create duplicate
    e.target.strokeWidth(4)
    e.target.draw()
  })

  shape.on('mouseout touchend', e => {
    e.target.strokeWidth(1)
    e.target.draw()
  })

  shape.on('xChange', () => {})

  shape.on('dragend', () => {})

  shape.on('reset-to-bin', e => {
    shape.to({ ...initialPos, duration: 0.1 })
  })

  return shape
}

export default Transistor
