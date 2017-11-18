const javascriptData = [
  {
    'x': [
      'giraffes',
      'orangutans',
      'monkeys'
    ],
    'y': [
      20,
      14,
      23
    ],
    'name': 'SF Zoo',
    'type': 'bar',
    'marker': {
      'color': '#19d3f3'
    }
  },
  {
    'x': [
      'giraffes',
      'orangutans',
      'monkeys'
    ],
    'y': [
      12,
      18,
      29
    ],
    'name': 'LA Zoo',
    'type': 'bar',
    'marker': {
      'color': '#ab63fa'
    }
  }
]

const javascriptLayout = {}

const javascriptCode =`
var data = [{
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [20, 14, 23], 
name: 'SF Zoo’,
type: 'bar',
  marker: {color: '#19d3f3'}
}, {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [12, 18, 29], 
name: 'LA Zoo', 
type: 'bar',
  marker: {color: '#ab63fa'} 
}];

var layout = {
  plot_bgcolor: '#F5F7FA',
  paper_bgcolor: '#F5F7FA',
  width: 500
};

Plotly.newPlot('myDiv', data, layout);`
