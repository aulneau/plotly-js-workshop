/**
 * Grab our plot
 */

const myPlot = document.getElementById("myPlot");

/**
 * Define our function for grabbing element's size
 */
const getSize = element => {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x,
    y
  } = element.getBoundingClientRect();
  return { top, right, bottom, left, width, height, x, y };
};

/**
 * Get the size of our container
 */
const container = document.querySelector("html");

let containerSize = getSize(container);

/**
 * and update the layout on resize
 */
window.onresize = () => {
  containerSize = getSize(container);
  Plotly.relayout(myPlot, {
    width: containerSize.width,
    height: containerSize.height
  });
};

/**
 * Define some variables
 */

const N = 1000;

const colors = {
  purple: "#7b3294",
  purple_light: "#c2a5cf",
  salmon: "#ffa7b5",
  orange: "#fdae61"
};

/**
 * Create a random array with N items
 */

const randomArray = () => {
  let out = new Array(N);
  for (let i = 0; i < N; i++) {
    out[i] = Math.random();
  }
  return out;
};

let x = randomArray();
let y = randomArray();

/**
 * Data
 */
const data = [
  {
    type: "scatter",
    mode: "markers",
    x: x,
    y: y,
    xaxis: "x",
    yaxis: "y",
    name: "random data",
    marker: {
      color: colors.purple,
      size: 10
    }
  },
  {
    type: "histogram",
    x: x,
    xaxis: "x2",
    yaxis: "y2",
    name: "x coord dist.",
    marker: {
      color: colors.salmon
    }
  },
  {
    type: "histogram",
    x: y,
    xaxis: "x3",
    yaxis: "y3",
    name: "y coord dist.",
    marker: {
      color: colors.orange
    }
  }
];
/**
 * Layout
 * https://plot.ly/javascript/reference/#layout-dragmode
 *  dragmode: 'lasso',
 * hovermode: 'closest',
 */
const layout = {
  title: "Lasso around the scatter points to see sub-distributions",
  width: containerSize.width,
  height: containerSize.height,
  xaxis: {
    zeroline: true
  },
  yaxis: {
    domain: [0.55, 1]
  },
  xaxis2: {
    domain: [0, 0.45],
    anchor: "y2"
  },
  yaxis2: {
    domain: [0, 0.45],
    anchor: "x2"
  },
  xaxis3: {
    domain: [0.55, 1],
    anchor: "y3"
  },
  yaxis3: {
    domain: [0, 0.45],
    anchor: "x3"
  }
};

Plotly.newPlot(myPlot, data, layout);

myPlot.on("plotly_selected", eventData => {});
