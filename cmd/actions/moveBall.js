export { ballMover, moveBall }
import { levelSelector, TIMER_STATUS} from "../game.js"
import { drawBall, removeBall, ballPosition, createBall } from "../drawing/draw.js"
import { cPaddle, cWalls, cBricks } from "../collisions/collisions.js"
import { events } from "../listeners/listeners.js"
import { xDirection, yDirection } from "../collisions/direction.js"
import { death, finished, pauseStatus } from "../states/states.js"
import { lives, livesCount } from "./lives.js"

let time

function ballMover() {
  requestAnimationFrame(moveBall)
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
     lives()
   }

  //CHECK FOR DEATH
  if (ballPosition[1] <= 0 && livesCount <= 0) {
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
    finished()
  }
}

