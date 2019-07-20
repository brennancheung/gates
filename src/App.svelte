<script>
  import Konva from 'konva'
  import PartsBin from './PartsBin'
  import WorkArea from './WorkArea'
  import Transistor from './Transistor'
  import { tick } from 'svelte'

  const width = 1000
  const height = 600 
  let binWidth = 125

  tick().then(() => {
    const stage = new Konva.Stage({ container: 'stage', width, height })

    const backgroundLayer = new Konva.Layer()
    const partsLayer = new Konva.Layer()
    const tempLayer = new Konva.Layer()

    const partsBin = PartsBin({ width: binWidth, height })
    const workArea = WorkArea({
      x: binWidth + 1,
      width: width - binWidth,
      height,
      fill: '#ccc',
    })

    const transistor = Transistor()

    const handleDragEnd = e => {
      const pos = stage.getPointerPosition()
      const shape = backgroundLayer.getIntersection(pos)
      if (!shape) { return }
      const name = shape.name()
      if (name === 'WorkArea') {
        const newShape = Transistor({ x: 50, y: 500 })
        newShape.on('dragend', handleDragEnd)
        partsLayer.add(newShape)
        stage.draw()
      }
      if (name === 'PartsBin') {
        e.target.fire('reset-to-bin')
      }
    }

    transistor.on('dragend', handleDragEnd)

    stage.on('dragmove', e => {
    })

    backgroundLayer.add(partsBin)
    backgroundLayer.add(workArea)
    partsLayer.add(transistor)
    stage.add(backgroundLayer)
    stage.add(partsLayer)
    stage.draw()
  })
</script>

<style>
  h1 {
    font-size: 24px;
    margin: 10px 0;
  }
  .main-canvas {
    background-color: #f0f0f0;
    border: 1px solid #000;
  }
</style>

<div id="app">
  <h1>Drag Drop</h1>
  <div id="stage" />
  <div id="container" />
</div>
