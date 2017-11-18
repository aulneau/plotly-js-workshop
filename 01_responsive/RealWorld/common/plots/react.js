const reactData = [
  {
    'x': [1, 2, 3, 4],
    'y': [1, 3, 2, 5]
  }
]

const reactLayout = {}


const reactCode =`$ npm install plotly.js-react

const createPlotlyComponent = require('plotly.js-react');
const PlotlyComponent = createPlotlyComponent(Plotly);

figure = {
  "data": [
    {
      "x": [ 1, 2, 3, 4 ],
      "y": [ 1, 3, 2, 5 ]
    }
  ],
  "layout": {
    "title": "a plotly.js react component"
  }
}

render () {
  <PlotlyComponent
    data=figure.data
    layout=figure.layout
  />
}`
