/**
 * getSize
 * ---
 * The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
 * This function will return a cleaner object for you than the original function.
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
 * Window Resize Watcher
 */
export const watchResize = () => {
  window.onresize = () => {

    // Put things you want to do
    // on resize in here

  }
}
