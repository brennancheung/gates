<script>
  import { tick } from 'svelte'
  import PartBin from './PartBin.svelte'
  import Transistor from './Transistor.svelte'
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
  <h1>Logic Gate Game</h1>
  <svg class="main-canvas" width="1000" height="600">
    <PartBin />
    <Transistor />
  </svg>
</div>
