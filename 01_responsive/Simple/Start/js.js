/**
 * Grab our plot
 */

const myPlot = document.getElementById("myPlot");

/**
 * Data
 * https://plot.ly/javascript/line-and-scatter/
 */
const data = [
  {
    mode: "markers",
    type: "scatter",
    x: [1, 3, 5, 2],
    y: [3, 2, 5, 7]
  },
  {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: "lines+markers",
    type: "scatter"
  }
];
/**
 * Layout
 */
const layout = {
  title: "My simple plot",
  width: 500,
  height: 500
};

Plotly.newPlot(myPlot, data, layout);
