const myPlot = document.getElementById('myPlot');

/**
 * Data
 */
const trace1 = {
  x: [0, 1, 2, 3, 4],
  y: [1, 5, 3, 7, 5],
  mode: 'lines+markers',
  type: 'scatter'
};

const trace2 = {
  x: [1, 2, 3, 4, 5],
  y: [4, 0, 4, 6, 8],
  mode: 'lines+markers',
  type: 'scatter'
};

const data = [trace1, trace2];

/**
 * Layout
 */
const layout = {
  title: 'Click Here to Edit Chart Title',
  width: 500,
  height: 500
}

const original = Object.assign({}, {
  data: JSON.stringify(data),
  layout: JSON.stringify(layout)
});

Plotly.newPlot(myPlot, data, layout)

const editable = (bool) => {
  return {
    editable: bool
  }
}

const makePlotEditable = (plot) => {
  Plotly.newPlot(plot, plot.data, plot.layout, editable(true))
}

const resetPlot = (plot) => {
  Plotly.newPlot(plot, JSON.parse(original.data), JSON.parse(original.layout), editable(false))
}

const savePlot = (plot) => {
  Plotly.newPlot(plot, plot.data, plot.layout, editable(false))
}
