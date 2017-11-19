/**
 * Grab our plot
 */

const myPlot = document.getElementById('myPlot');

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
    y,
  } = element.getBoundingClientRect()
  return {top, right, bottom, left, width, height, x, y}
}

/**
 * Get the size of our container
 */
const container = document.querySelector('html');

let containerSize = getSize(container);

/**
 * and update the layout on resize
 */
window.onresize = () => {
  containerSize = getSize(container);
  Plotly.relayout(myPlot, {
      width: containerSize.width,
      height: containerSize.height
    }
  );
}


/**
 * Define some Variables
 */


const url = 'https://cdn.rawgit.com/plotly/datasets/aba35d71/mpg.csv';

/**
 * CSV data from ajax call
 * https://plot.ly/javascript/ajax-call/
 */

Plotly.d3.csv(url, (err, csv) => {

  console.log(csv);

  const mpg = csv.map(r => {
    return +r.mpg;
  });

  const hp = csv.map(r => {
    return +r.horsepower;
  });

  const text = csv.map(r => {
    return r.weight + ' lbs, year 19' + r['model-year'];
  });


  Plotly.newPlot(myPlot, [{
    x: hp,
    y: mpg,
    type: 'scatter',
    mode: 'markers',
    marker: {size: 11, color: 'light-blue'},
    text: text
  }], {
    xaxis: {title: 'Horsepower'},
    yaxis: {title: 'MPG'},
    width: containerSize.width,
    height: containerSize.height,
    hovermode: 'closest'
  });


  /**
   * Plotly Click Event
   */
  myPlot.on('plotly_click', data => {
    // goal: add an annotation to the point that was clicked
    // then use plotly_clickannotation to remove it

  });

});
