//EXPORTS
export { ballMover, moveBall, changePauseEnabler, ballFrame }

//IMPORTS
import { drawBall, removeBall, ballPosition, middleStoryTold, drawMiddleStory } from "../drawing/draw.js"
import { cPaddle, cWalls, cBricks } from "../collisions/collisions.js"
import { events } from "../listeners/listeners.js"
import { speed, xDirection, yDirection } from "../collisions/direction.js"
import { death, finished, pause, pauseStatus } from "../states/states.js"
import { lives, livesCount } from "./lives.js"
import { levelSelector } from "../levels/levels.js"
import { savePreviousTimer } from "./timer.js"
import { scoreDefault, scoreCount } from "./score.js"

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

let ballFrame;

function moveBall() {
  
  delete events[38]
  ballPosition[0] += xDirection
  ballPosition[1] += yDirection

  cPaddle()
  drawBall()
  cWalls()
  cBricks()

  ballFrame = requestAnimationFrame(moveBall)
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

  // CHECKS FOR STORY
  if (scoreCount >= 1000*scoreDefault && middleStoryTold == false) {
    drawMiddleStory();

    if (levelSelector.length <= 0) {
      cancelAnimationFrame(ballFrame)
      removeBall()
      savePreviousTimer()
    }
}
  //CHECK FOR FINISHED
  else if (levelSelector.length <= 0) {
    cancelAnimationFrame(ballFrame)
    removeBall()
    savePreviousTimer()
    finished()
  }
}

