import { ballPosition } from "../drawing/draw.js"

export { changeDirection, yDirection, xDirection }

let yDirection = 2
let xDirection = 2

function changeDirection() {
  if (ballPosition[1] <= 0) {
    yDirection = 2
    xDirection = 2
    return
  }

  if (xDirection == 2 && yDirection == 2) {
    yDirection = -2
    return
  }

  if (xDirection == 2 && yDirection == -2) {
    xDirection = -2
    /* console.log("LOL2")
    console.log(`LOL2, xDirection:${xDirection}`)
    console.log(`LOL2, yDirection:${yDirection}`) */
    return
  }

  if (xDirection == -2 && yDirection == -2) {
    yDirection = 2
    /* console.log("LOL3")
    console.log(`LOL3, xDirection:${xDirection}`)
    console.log(`LOL3, yDirection:${yDirection}`) */
    return
  }

  if (xDirection == -2 && yDirection == 2) {
    xDirection = 2
    return
  }


}