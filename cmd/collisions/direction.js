import { ballPosition } from "../drawing/draw.js"
import { difficulty } from "../states/states.js"

export { changeDirection, wallBounce, floorBounce, yDirection, xDirection, resetDirections, changeSpeed, speed }

let speed = 6
let yDirection = speed / 2
let xDirection = speed / 2

function changeSpeed() {
  if (difficulty == "easy") {
    speed = 6
    yDirection = speed / 2
    xDirection = speed / 2
  }

  if (difficulty == "medium") {
    speed = 10
    yDirection = speed / 2
    xDirection = speed / 2
  }

  if (difficulty == "hard") {
    speed = 15
    yDirection = speed / 2
    xDirection = speed / 2
  }
}

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
  if (dir) {
    // console.log(dir)
    if (dir == "left") {
      xDirection -= (speed / 2 / 4)
    } else if (dir == "right") {
      xDirection += (speed / 2 / 4)
    }

    if (xDirection < 0) {
      if (xDirection == -1 * speed) {
        xDirection = (speed - speed / 2 / 4) * -1
      }
      yDirection = (speed + xDirection) * -1
    } else {
      if (xDirection == speed) {
        xDirection = speed - speed / 2 / 4
      }
      yDirection = (speed - xDirection) * -1
    }



  }

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