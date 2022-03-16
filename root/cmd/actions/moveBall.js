//EXPORTS
export { ballMover, moveBall, changePauseEnabler }

//IMPORTS
import { drawBall, removeBall, ballPosition } from "../drawing/draw.js"
import { cPaddle, cWalls, cBricks } from "../collisions/collisions.js"
import { events } from "../listeners/listeners.js"
import { speed, xDirection, yDirection } from "../collisions/direction.js"
import { death, finished, pause, pauseStatus } from "../states/states.js"
import { lives, livesCount } from "./lives.js"
import { levelSelector } from "../levels/levels.js"
import { savePreviousTimer } from "./timer.js"

let pauseEnabler
function changePauseEnabler() {
  pauseEnabler = false
}

//BALLMOVER WITH REQUESTANIMATIONFRAME, toggles moveBall
function ballMover() {
  requestAnimationFrame(moveBall)
  if (pauseEnabler == true) {
    events[32] = pause
  }
}

function moveBall() {
  
  delete events[38]
  ballPosition[0] += xDirection
  ballPosition[1] += yDirection

  cPaddle()
  drawBall()
  cWalls()
  cBricks()

  let ballFrame = requestAnimationFrame(moveBall)
  //CHECK FOR LIVES/RESPAWN
  if (ballPosition[1] <= 0 && livesCount > 0) {
    cancelAnimationFrame(ballFrame)
    removeBall()
    delete events[32]
    lives()
    pauseEnabler = true
    /* setTimeout(events[32] = pause, 5) */
  }

  //CHECK FOR DEATH
  if (ballPosition[1] <= 0 && livesCount == 0) {
    cancelAnimationFrame(ballFrame)
    death()

  }

  //CHECK FOR PAUSE
  if (pauseStatus == true) {
    cancelAnimationFrame(ballFrame)
  }

  //CHECK FOR FINISHED
  if (levelSelector.length <= 0) {
    cancelAnimationFrame(ballFrame)
    removeBall()
    savePreviousTimer()
    finished()
  }
}

