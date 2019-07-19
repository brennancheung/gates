<script>
  import { onMount } from 'svelte'
  import mousePos from './mousePos'
  export let x = 0
  export let y = 0
  export let width = 875
  export let height = 600
  export let backgroundColor = '#ccc'
  let element
  let bounds
  onMount(() => {
    bounds = element.getBoundingClientRect()
  })

  $: {
    if (bounds) {
      const withinBounds =
        $mousePos.x >= bounds.x &&
        $mousePos.x <= bounds.x + width &&
        $mousePos.y >= bounds.y &&
        $mousePos.y <= bounds.y + height

      mousePos.setHovered('workAround', withinBounds)

      backgroundColor = withinBounds ? '#fcc' : '#888'
    }
  }
</script>

<rect bind:this={element} {x} {y} {width} {height} fill={backgroundColor} stroke="#000" />
