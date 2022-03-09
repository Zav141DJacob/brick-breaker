import { ballPosition } from "../drawing/draw.js"

export { changeDirection, wallBounce, floorBounce, yDirection, xDirection, resetDirections }

let speed = 6

let yDirection = speed / 2
let xDirection = speed / 2

function resetDirections() {
  yDirection = speed / 2
  xDirection = speed / 2
}

function changeDirection(x) { //x is for testing values

  // if (x) {
  //   //add argument x when calling out this function
  //   //and add console logs here for testing
  // }
  if (ballPosition[1] <= 0) {
    yDirection = speed / 2
    xDirection = speed / 2
    return
  }

  if (xDirection > 0 && yDirection > 0) {
    yDirection *= -1
    return
  }

  if (xDirection > 0 && yDirection < 0) {
    xDirection *= -1
    return
  }

  if (xDirection < 0 && yDirection < 0) {
    yDirection *= -1
    return
  }

  if (xDirection < 0 && yDirection > 0) {
    xDirection *= -1
    return
  }
}

function wallBounce(x) { //x is for testing values

  // if (x) {
  //   //add argument x when calling out this function
  //   //and add console logs here for testing
  // }

  if (xDirection > 0 && yDirection > 0) {
    xDirection *= -1
    return
  }

  if (xDirection > 0 && yDirection < 0) {
    xDirection *= -1
    return
  }

  if (xDirection < 0 && yDirection < 0) {
    xDirection *= -1
    return
  }

  if (xDirection < 0 && yDirection > 0) {
    xDirection *= -1
    return
  }
}

function floorBounce(dir, x) { //x is for testing values
  // if (x) {
  //   //add argument x when calling out this function
  //   //and add console logs here for testing
  // }

  if (xDirection > 0 && yDirection > 0) {
    yDirection *= -1
    return
  }

  if (xDirection > 0 && yDirection < 0) {
    yDirection *= -1
    return
  }

  if (xDirection < 0 && yDirection < 0) {
    yDirection *= -1
    return
  }

  if (xDirection < 0 && yDirection > 0) {
    yDirection *= -1
    return
  }
}