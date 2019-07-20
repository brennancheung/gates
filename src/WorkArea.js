import Konva from 'konva'

const WorkArea = (params = {}) => {
  const rect = new Konva.Rect({
    name: 'WorkArea',
    x: 0,
    y: 0, 
    width: 125,
    height: 600,
    fill: '#eee',
    stroke: 'black',
    strokeWidth: 1,
    ...params,
  })

  return rect
}

export default WorkArea
