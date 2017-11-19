const chart = document.getElementById('myPlot');


/**
 * Data
 */
const data = [
  {
    type: 'bar',
    x: [
      'Apppppppppppp<br />pppplllleee',
      'banananannnanannnananaa',
      'grapessssssssssss',
      'watermellllllllllllon'
    ],
    y: [
      1, 3, 1, 6
    ],
    marker: {
      color: 'light-blue',
      line: {
        width: 0
      }
    }
  }
]

/**
 * Annotations
 */

const annotations = [{
  x: 1,
  y: 3,
  text: '<span style="color: red;">Important!!</span>',
  ay: -60
}]

/**
 * Layout
 */
const layout = {
  font: {
    size: 18,
  },
  xaxis: {
    range: [-1, 4]
  },
  annotations,
  width: window.innerWidth,
  height: window.innerHeight,
  showLegend: true,
  margin: {
    b: 200
  }
}


Plotly.newPlot(chart, data, layout);


/**
 * Listen for updates to window size
 */

window.onresize = () => {

  let w = window.innerWidth;

  let h = window.innerHeight;

  let layoutUpdate = {
  }
  let traceUpdate = {}

  if (w < 500) {
    layoutUpdate['font.size'] = 12

    traceUpdate['x'] = [['A', 'B', 'G', 'W']]

    Plotly.relayout(chart, layoutUpdate)
    Plotly.restyle(chart, traceUpdate)
  }

  if (w > 500) {
    layoutUpdate['font.size'] = 18
    traceUpdate['x'] = [
      ['Apppppppppppp<br />pppplllleee',
      'banananannnanannnananaa',
      'grapessssssssssss',
      'watermellllllllllllon']
    ]

    Plotly.relayout(chart, layoutUpdate)
    Plotly.restyle(chart, traceUpdate)
  }


  Plotly.relayout(chart, {
    width: w,
    height: h
  })
}
