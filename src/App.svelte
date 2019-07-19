<script>
  import { tick } from 'svelte'
  import PartBin from './PartBin.svelte'
  import WorkArea from './WorkArea.svelte'
  import Transistor from './Transistor.svelte'
  let canvasWidth = 1000
  let binWidth = 125
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
  <h1>Drag Drog</h1>
  <svg class="main-canvas" width={canvasWidth} height="600">
    <PartBin width={binWidth} />
    <WorkArea
      width={canvasWidth - binWidth}
      x={binWidth + 1}
    />
    <Transistor />
  </svg>
</div>
