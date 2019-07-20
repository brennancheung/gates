import Konva from 'konva'

const PartsBin = (params = {}) => {
  const partsBin = new Konva.Rect({
    name: 'PartsBin',
    x: 0,
    y: 0, 
    width: 125,
    height: 600,
    fill: '#eee',
    stroke: 'black',
    strokeWidth: 1,
    ...params,
  })

  return partsBin
}

export default PartsBin
