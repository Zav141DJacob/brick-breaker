export { pause, unPause, menu, removeMenu, pauseStatus, finished, death }
import {
  drawPause, drawMenu, startButton, drawFinishMenu, drawDeathMenu,
  menuButton, replayButton, drawGame, gameField, resetBall, resetPaddle,

} from "../drawing/draw.js"

import { events, multyFunction } from "../listeners/listeners.js"
import { resetTimer, timer, timerID } from "../actions/timer.js"
import { grid, game } from "../game.js"
import { ballMover } from "../actions/moveBall.js"
import { keyDown, keyUp } from "../actions/movePaddle.js"
import { resetScore } from "../actions/score.js"
import { resetBricks } from "../levels/levels.js"
import { resetDirections } from "../collisions/direction.js"
import { resetLives } from "../actions/lives.js"


//OVERALL GAME FIELD
function removeGame() {
  const game = document.querySelector(".gameField")
  grid.removeChild(game)
}

function fullResetter() {
  events[37] = keyDown
  events[39] = keyDown
  events[32] = pause
  events[38] = multyFunction
  resetBall()
  resetPaddle()
  resetScore()
  resetTimer()
  resetBricks()
  resetDirections()
  resetLives()
}

function gameRestarter() {
  events[37] = keyDown
  events[39] = keyDown
  events[32] = pause
  events[38] = multyFunction
  resetBall()
  resetPaddle()
  resetTimer()
  resetScore()
  resetBricks()
  resetDirections()
  resetLives()
}


//STATE MENU
function menu() {
  drawMenu()
  startButton.onclick = function () {
    drawGame()
    removeMenu()
    game()
  }
}

function removeMenu() {
  const menu = document.querySelector(".menu")
  grid.removeChild(menu)
}


//STATE PAUSED
let pauseStatus = false
function pause() {
  drawPause()
  delete events[37]
  delete events[39]
  delete events[32]
  events[32] = unPause
  pauseStatus = true
  clearInterval(timerID)
  menuButton.onclick = function () {
    pauseStatus = false
    delete events.Space
    events[32] = pause
    removeGame()
    fullResetter()
    menu()
  }

  replayButton.onclick = function () {
    pauseStatus = false
    delete events.Space
    events[32] = pause
    removeGame()
    drawGame()
    gameRestarter()
    game()
  }
}

function unPause() {
  events[37] = keyDown
  events[39] = keyDown
  delete events.Space
  events[32] = pause
  const menu = document.querySelector(".pause")
  gameField.removeChild(menu)
  pauseStatus = false
  ballMover()
  timer()
}

//STATE FINISHED
function finished() {
  clearInterval(timerID)
  removeGame()
  drawFinishMenu()
  delete events[37]
  delete events[39]
  menuButton.onclick = function () {
    removeFinished()
    fullResetter()
    menu()
  }
  replayButton.onclick = function () {
    drawGame()
    removeFinished()
    gameRestarter()
    game()
  }
}

function removeFinished() {
  const menu = document.querySelector(".finish")
  grid.removeChild(menu)
}

//STATE DEATH
function death() {
  clearInterval(timerID)
  removeGame()
  drawDeathMenu()
  delete events[37]
  delete events[39]
  delete events[32]
  menuButton.onclick = function () {
    removeDeathMenu()
    fullResetter()
    menu()
  }
  replayButton.onclick = function () {
    drawGame()
    gameRestarter()
    removeDeathMenu()
    game()
  }
}

function removeDeathMenu() {
  const menu = document.querySelector(".death")
  grid.removeChild(menu)
}
