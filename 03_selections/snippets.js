const randomArray = () => {
  let out = new Array(N)
  for (let i = 0; i < N; i++) {
    out[i] = Math.random()
  }
  return out
}

let x = randomArray()
let y = randomArray()

/**
 * Data
 */
const data = [
  {
    type: 'scatter',
    mode: 'markers',
    x: x.slice(),
    y: y.slice(),
    xaxis: 'x',
    yaxis: 'y',
    name: 'random data',
    marker: {
      color: colors.purple,
      size: 10
    }
  },
  {
    type: 'histogram',
    x: x.slice(),
    xaxis: 'x2',
    yaxis: 'y2',
    name: 'x coord dist.',
    marker: {
      color: colors.salmon
    }
  },
  {
    type: 'histogram',
    x: y.slice(),
    xaxis: 'x3',
    yaxis: 'y3',
    name: 'y coord dist.',
    marker: {
      color: colors.orange
    }
  }
]
/**
 * Layout
 */
const layout = {
  title: 'Lasso around the scatter points to see sub-distributions',
  dragmode: 'lasso',
  hovermode: 'closest',
  width: containerSize.width,
  height: containerSize.height,
  xaxis: {
    zeroline: true,
  },
  yaxis: {
    domain: [0.55, 1],
  },
  xaxis2: {
    domain: [0, 0.45],
    anchor: 'y2',
  },
  yaxis2: {
    domain: [0, 0.45],
    anchor: 'x2'
  },
  xaxis3: {
    domain: [0.55, 1],
    anchor: 'y3'
  },
  yaxis3: {
    domain: [0, 0.45],
    anchor: 'x3'
  }
}
