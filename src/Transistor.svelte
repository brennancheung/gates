<script>
  import draggable from './draggable'
  export let x = 50
  export let y = 50
  export let r = 30
  export let backgroundColor = '#88f'
  export let stroke = '#000'

  let dragging = false
  let delta = { x: 0, y: 0 }

  const handlePan = e => {
    delta = e.detail.delta
    dragging = e.detail.dragging
  }
</script>

<circle
  use:draggable
  on:pan={handlePan}
  cx={x + delta.x}
  cy={y + delta.y}
  r={r}
  fill={dragging ? '#f00' : backgroundColor}
  {stroke}
/>
