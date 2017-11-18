/**
 * Data
 */
const data = [
  {
    language: 'javascript',
    code: javascriptCode
  },
  {
    language: 'r',
    code: rCode
  },
  {
    language: 'python',
    code: pythonCode
  },
  {
    language: 'react',
    code: reactCode
  }
]

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

const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}


/**
 * Declare our variables
 */

let state = {
  activeLanguage: 'javascript'
}

// Find our Tabs
const jsTab = document.querySelector('.js-tab-js'),
  rTab = document.querySelector('.js-tab-r'),
  pythonTab = document.querySelector('.js-tab-python'),
  reactTab = document.querySelector('.js-tab-react')

// Set them to an array
const tabs = [jsTab, rTab, pythonTab, reactTab];

// Find our codeblock
const codeArea = document.querySelector('.js-code-area')


/**
 * Find our plot
 */
const myPlot = document.getElementById('myPlot');


const setCodeBlock = () => {

  const plotData = data.find(plotData => plotData.language === state.activeLanguage)

  codeArea.innerHTML = plotData.code;
  codeArea.classList.add(state.activeLanguage)

  hljs.initHighlighting.called = false;
  hljs.initHighlighting();
}



/**
 * Iterate through our tabs and change the state based off of clicks
 */

tabs.forEach((tab) => {
  /**
   * Init
   * Check and see what the default tab is and do the following:
   *
   * Add a class 'active' to the tab
   * Find an item in the plotData array that has a key with the value of state.activeLanguage
   * Create a new plot with the data from the plotData array item
   */
  if (state.activeLanguage === tab.dataset.language) {

    // add an active class to our tab
    tab.classList.add('active');

    // set codeblock
    setCodeBlock()
  } else {
    tab.classList.remove('active')
  }

  /**
   * On tab click
   */
  tab.addEventListener('click', () => {
    if (tab.dataset.language) {

      // set the state to the clicked tab
      state.activeLanguage = tab.dataset.language

      // set codeblock
      setCodeBlock()

    }

    /**
     * Go through them again on each click to check if active
     */
    tabs.forEach((tabB) => {

      if (state.activeLanguage === tabB.dataset.language) {
        tabB.classList.add('active')
      } else {
        tabB.classList.remove('active')
      }
    })
  }, false);
})

hljs.initHighlightingOnLoad();



