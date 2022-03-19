//EXPORTS
export {
  changeDirection, wallBounce, floorBounce, paddleBounce,
  yDirection, xDirection, resetDirections, changeSpeed, speed
}

//IMPORTS
import { ballPosition } from "../drawing/draw.js"
import { difficulty } from "../states/states.js"

//DIRECTION ANGLE CHANGE WHEN THE BALL HITS THE PADDLE
const paddleMult = 2.8 

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

//CHANGE BALL DIRECTION 
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

//FUNCTION TO CHANGE THE BALLS X DIRECTION
function wallBounce(x) { //x is for testing values

  // if (x) {
  //   //add argument x when calling out this function
  //   //and add console logs here for testing
  // }

  xDirection *= -1
}

//FUNCTION TO CHANGE THE BALLS Y DIRECTION
function floorBounce(x) { //x is for testing values

  // if (x) {
  //   //add argument x when calling out this function
  //   //and add console logs here for testing
  // }

  yDirection *= -1
}

//FUNCTION TO CHANGE THE BALLS ANGLE WHEN BOUNCING OFF THE PADDLE
function paddleBounce(dir, x) { //x is for testing values

  // if (x) {
  //   //add argument x when calling out this function
  //   //and add console logs here for testing
  // }

  if (dir == "left") {
    xDirection -= (speed / 2 / paddleMult)
  } else if (dir == "right") {
    xDirection += (speed / 2 / paddleMult)
  }

  if (xDirection > 0) {
    if (xDirection == speed) {
      xDirection = speed - speed / 2 / paddleMult
    }
    yDirection = (speed - xDirection)
  } else {
    if (xDirection == -1 * speed) {
      xDirection = (speed - speed / 2 / paddleMult) * -1
    }
    yDirection = (speed + xDirection)
  }
}