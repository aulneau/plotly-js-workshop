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
        width: 5
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

