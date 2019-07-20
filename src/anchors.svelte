<script>
  import { tick } from 'svelte'
  var width = window.innerWidth;
  var height = window.innerHeight;

  // globals
  var curveLayer, lineLayer, anchorLayer, bezier;

  function updateLine() {
    var b = bezier;

    var bezierLine = lineLayer.findOne('#bezierLine');

    bezierLine.points([
      b.start.attrs.x,
      b.start.attrs.y,
      b.end.attrs.x,
      b.end.attrs.y
    ]);
    lineLayer.draw();
  }
  function buildAnchor(x, y) {
    var anchor = new Konva.Circle({
      x: x,
      y: y,
      radius: 10,
      stroke: '#666',
      fill: '#ddd',
      strokeWidth: 2,
      draggable: true
    });

    // add hover styling
    anchor.on('mouseover', e => {
      document.body.style.cursor = 'pointer';
      e.target.strokeWidth(4);
      anchorLayer.draw();
    });
    anchor.on('mouseout', e => {
      document.body.style.cursor = 'default';
      e.target.strokeWidth(2);
      anchorLayer.draw();
    });

    anchorLayer.add(anchor);
    return anchor;
  }
  console.log('render')

  tick().then(() => {
    var stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height
    });

    anchorLayer = new Konva.Layer();
    lineLayer = new Konva.Layer();

    // curveLayer just contains a canvas which is drawn
    // onto with the existing canvas API
    curveLayer = new Konva.Layer();

    var bezierLine = new Konva.Line({
      strokeWidth: 3,
      stroke: 'black',
      lineCap: 'round',
      id: 'bezierLine',
      opacity: 0.3,
      points: [0, 0]
    });

    // add dotted line connectors
    lineLayer.add(bezierLine);

    bezier = {
      start: buildAnchor(280, 20),
      end: buildAnchor(300, 150)
    };

    // keep curves insync with the lines
    anchorLayer.on('beforeDraw', function() {
      updateLine();
    });

    stage.add(curveLayer);
    stage.add(lineLayer);
    stage.add(anchorLayer);

    updateLine();
  })
</script>

<div id="bars"></div>
