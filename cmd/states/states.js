export { pause, unPause, menu, removeMenu, pauseStatus, finished, death }
import { drawPause, drawMenu, startButton, drawFinishMenu, drawDeathMenu } from "../drawing/draw.js"
import { events } from "../listeners/listeners.js"
import { timer, timerID } from "../actions/timer.js"
import { grid, game } from "../game.js"
import { ballMover } from "../actions/moveBall.js"
import { keyDown, keyUp} from "../actions/movePaddle.js"


let pauseStatus = false
function pause() {
  drawPause()
  delete events[37]
  delete events[39]
  delete events[32]
  events[32] = unPause
  pauseStatus = true
  clearInterval(timerID)
}

function unPause() {
  events[37] = keyDown
  events[39] = keyDown
  delete events.Space
  events[32] = pause
  const menu = document.querySelector(".pause")
  grid.removeChild(menu)
  pauseStatus = false
  ballMover()
  timer()
}

function menu() {
  drawMenu()
  startButton.onclick = function () {
    game()
  }
}

function removeMenu() {
  const menu = document.querySelector(".menu")
  grid.removeChild(menu)
}

function finished() {
  clearInterval(timerID)
  drawFinishMenu()
  delete events[37]
  delete events[39]
}

function death() {
  clearInterval(timerID)
  drawDeathMenu()
  delete events[37]
  delete events[39]
  delete events[32]
}
