const chart = document.getElementById('myPlot');


/**
 * Data
 */
const data = [{
  type: 'bar',
  x: [
    'apppppppppp<br>ppppppppppple',
    'bannnnnnnnnnnnaana',
    'oraaaaaaaaaaaaaaaange',
    'watermellllllllllllllllllllllon'
  ],
  y: [1, 2, 1, 3],
  marker: {
    color: 'blue',
    line: {
      width: 2
    }
  }
}]

/**
 * Annotations
 */
const annotations = [{
  x: 1,
  y: 2,
  text: '<span style="color:red;">IMPORTANT</span> look',
  ay: -50
}]

/**
 * Layout
 */
const layout = {
  font: {
    size: 18
  },
  xaxis: {
    range: [-1, 4]
  },
  annotations: [annotation],
  width: window.innerWidth,
  height: window.innerHeight,
  showlegend: true,
  margin: {
    b: 200
  }
}


/**
 * Listen for updates to window size
 */

window.onresize = () => {
  console.log('Resizing!')
}


window.onresize = function () {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var layoutUpdate = {};
  var traceUpdate = {}

  layoutUpdate.width = w;
  layoutUpdate.height = h;

  if (w < 500) {
    layoutUpdate['font.size'] = 14;
    layoutUpdate['annotations[0].visible'] = false;
    layoutUpdate['showlegend'] = false;
    layoutUpdate['margin'] = {
      t: 10,
      l: 10,
      r: 10,
      b: 50
    };
    traceUpdate['x'] = [['A', 'B', 'O', 'W']]
  } else {
    layoutUpdate['font.size'] = 18;
    layoutUpdate['annotations[0].visible'] = true;
    layoutUpdate['showlegend'] = true;
    layoutUpdate['margin'] = {
      t: null,
      l: null,
      r: null,
      b: 200
    }
  }

  Plotly.update(graphDiv, traceUpdate, layoutUpdate);
};
