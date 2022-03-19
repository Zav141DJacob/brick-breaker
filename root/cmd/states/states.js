//EXPORTS
export { pause, unPause, mainMenu, removeMainMenu, pauseStatus, finished, death, difficulty }

//IMPORTS
import {
  drawPause, drawMainMenu, startButton, drawFinishMenu, drawDeathMenu,
  menuButton, replayButton, drawGame, gameField, resetBall, resetPaddle, continueButton,
  drawGameMenu, drawHowToMenu, easyButton, mediumButton, hardButton, changeBallDiameter, changePaddleStats, highScores,
  drawLeaderBoardMenu, leaderboardEasy, leaderboardMedium, leaderboardHard, highScoreSubmit, drawFinalModal, highScoreSubmitCancel,
  highScoreSubmitModal,
} from "../drawing/draw.js"

import { events, multyFunction } from "../listeners/listeners.js"
import { resetTimer, setPreviousTimer, timer, timerID, miniRestartTimer, timeSaver } from "../actions/timer.js"
import { grid, game, LEVEL_STATUS, DIFFICULTY_STATUS, SCORE_DISPLAY } from "../game.js"
import { ballMover, changePauseEnabler } from "../actions/moveBall.js"
import { keyDown, keyUp } from "../actions/movePaddle.js"
import { changeScoreDefault, resetScore, savePreviousScore, scoreCount, setPreviousScore } from "../actions/score.js"
import { nextLevel, resetBricks, resetBricksLevel, levelNr } from "../levels/levels.js"
import { changeSpeed, resetDirections } from "../collisions/direction.js"
import { changeLives, resetLives } from "../actions/lives.js"
import { soundBallBounce, soundBallDeath, soundButtonClick, soundFinalFinish, soundPlayerDeath, soundRoundEnd, soundRoundStart } from "../sounds/sounds.js"
import { getFormValue, resetFormValue, newPostScores, newGetEasy, newGetMedium, newGetHard } from "../requests/requests.js"

//DIFFICULTY STATE
let difficulty = "easy"

//OVERALL GAME FIELD
function removeGame() {
  const game = document.querySelector(".gameField")
  grid.removeChild(game)
}

function fullResetter() {
  events[37] = keyDown
  events[39] = keyDown
  delete events[32]
  events[38] = multyFunction
  resetBall()
  resetPaddle()
  resetScore()
  resetTimer()
  resetBricks()
  resetDirections()
  resetLives()
  changePauseEnabler()
}

function gameRestarter() {
  events[37] = keyDown
  events[39] = keyDown
  delete events[32]
  events[38] = multyFunction
  resetBall()
  resetPaddle()
  /* resetTimer() */
  resetBricksLevel()
  resetDirections()
  resetLives()
  changePauseEnabler()
  miniRestartTimer()
}

//STATE MAINMENU
function mainMenu() {
  drawMainMenu()
  startButton.onclick = function () {
    soundButtonClick()
    gameMenu()
    removeMainMenu()
  }
  highScores.onclick = function () {
    soundButtonClick()
    leaderBoardMenu()
    removeMainMenu()
  }
  continueButton.onclick = function () {
    soundButtonClick()
    howToMenu()
    removeMainMenu()
  }
}

function removeMainMenu() {
  const menu = document.querySelector(".mainMenu")
  grid.removeChild(menu)
}

//STATE LEADERBOARD
function leaderBoardMenu() {
  drawLeaderBoardMenu()
  leaderboardEasy.onclick = function () {
    soundButtonClick()
    newGetEasy()
    leaderboardMedium.classList.remove("activeButton")
    leaderboardHard.classList.remove("activeButton")
    leaderboardEasy.classList.add("activeButton")
  }
  leaderboardMedium.onclick = function () {
    soundButtonClick()
    newGetMedium()
    leaderboardHard.classList.remove("activeButton")
    leaderboardEasy.classList.remove("activeButton")
    leaderboardMedium.classList.add("activeButton")
  }
  leaderboardHard.onclick = function () {
    soundButtonClick()
    newGetHard()
    leaderboardMedium.classList.remove("activeButton")
    leaderboardEasy.classList.remove("activeButton")
    leaderboardHard.classList.add("activeButton")

  }
  continueButton.onclick = function () {
    soundButtonClick()
    removeLeaderBoardMenu()
    mainMenu()
  }

}

function removeLeaderBoardMenu() {
  const menu = document.querySelector(".leaderBoardMenu")
  grid.removeChild(menu)
}

//STATE GAMEMENU
function gameMenu() {
  drawGameMenu()
  startButton.onclick = function () {
    soundButtonClick()
    LEVEL_STATUS.innerHTML = "1"
    drawGame()
    removeGameMenu()
    changeSpeed()
    game()
  }
  continueButton.onclick = function () {
    soundButtonClick()
    removeGameMenu()
    mainMenu()
  }
  easyButton.onclick = function () {
    soundButtonClick()
    difficulty = "easy"
    DIFFICULTY_STATUS.innerHTML = "Easy"
    changeBallDiameter()
    changeSpeed()
    changePaddleStats()
    changeLives()
    changeScoreDefault()
    mediumButton.classList.remove("activeButton")
    hardButton.classList.remove("activeButton")
    easyButton.classList.add("activeButton")
  }
  mediumButton.onclick = function () {
    soundButtonClick()
    difficulty = "medium"
    DIFFICULTY_STATUS.innerHTML = "Medium"
    changeBallDiameter()
    changeSpeed()
    changePaddleStats()
    changeLives()
    changeScoreDefault()
    hardButton.classList.remove("activeButton")
    easyButton.classList.remove("activeButton")
    mediumButton.classList.add("activeButton")
  }
  hardButton.onclick = function () {
    soundButtonClick()
    difficulty = "hard"
    DIFFICULTY_STATUS.innerHTML = "Hard"
    changeBallDiameter()
    changeSpeed()
    changePaddleStats()
    changeLives()
    changeScoreDefault()
    mediumButton.classList.remove("activeButton")
    easyButton.classList.remove("activeButton")
    hardButton.classList.add("activeButton")
  }
}

function removeGameMenu() {
  const menu = document.querySelector(".gameMenu")
  grid.removeChild(menu)
}

//STATE HOWTOMENU
function howToMenu() {
  drawHowToMenu()
  startButton.onclick = function () {
    soundButtonClick()
    removeHowToMenu()
    mainMenu()
  }
}

function removeHowToMenu() {
  const menu = document.querySelector(".howToMenu")
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
    soundButtonClick()
    pauseStatus = false
    events[32] = pause
    LEVEL_STATUS.innerHTML = "0"
    removeGame()
    fullResetter()
    mainMenu()
  }

  replayButton.onclick = function () {
    setPreviousTimer()
    setPreviousScore()
    SCORE_DISPLAY.innerHTML = Math.round(scoreCount)
    soundButtonClick()
    pauseStatus = false
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
  if (levelNr == 5) {
    soundFinalFinish()
  } else {
    soundRoundEnd()
  }
  changePauseEnabler()
  clearInterval(timerID)
  removeGame()
  drawFinishMenu()
  delete events[37]
  delete events[39]
  delete events[32]
  menuButton.onclick = function () {
    soundButtonClick()
    resetFormValue()
    LEVEL_STATUS.innerHTML = "0"
    removeFinished()
    fullResetter()
    mainMenu()
  }
  replayButton.onclick = function () {
    setPreviousTimer()
    setPreviousScore()
    SCORE_DISPLAY.innerHTML = Math.round(scoreCount)
    soundButtonClick()
    drawGame()
    removeFinished()
    gameRestarter()
    game()
  }

  continueButton.onclick = function () {
    savePreviousScore()
    soundButtonClick()
    drawGame()
    removeFinished()
    nextLevel()
    gameRestarter()
    game()
  }
  highScoreSubmit.onclick = function () {
    modal()
  }
}

function removeFinished() {
  if (levelNr < 5) {
    const menu = document.querySelector(".finish")
    grid.removeChild(menu)
  } else {
    const menu = document.querySelector(".finishFinal")
    grid.removeChild(menu)
  }
}

function modal() {
  drawFinalModal()
  highScoreSubmitCancel.onclick = function () {
    removeModal()
  }

  highScoreSubmitModal.onclick = function () {
    getFormValue("scoreUserName")
    removeSubmitButton()
    newPostScores()
    removeModal()
  }
}

//REMOVE FINAL SUBMIT MODAL
function removeModal() {
  const menu = document.querySelector(".modal")
  grid.removeChild(menu)
  const menu1 = document.querySelector(".modal-js-overlay")
  grid.removeChild(menu1)
}

//REMOVE FINAL SUBMIT BUTTON AFTER SUBMITTING SCORE
function removeSubmitButton() {
  const finalMenu = document.querySelector(".finishFinal")
  const menu = document.querySelector("#submitHigh")
  finalMenu.removeChild(menu)
}

//STATE DEATH
function death() {
  soundPlayerDeath()
  clearInterval(timerID)
  removeGame()
  drawDeathMenu()
  delete events[37]
  delete events[39]
  delete events[32]
  menuButton.onclick = function () {
    soundButtonClick()
    LEVEL_STATUS.innerHTML = "0"
    removeDeathMenu()
    fullResetter()
    mainMenu()
  }
  replayButton.onclick = function () {
    setPreviousScore()
    SCORE_DISPLAY.innerHTML = Math.round(scoreCount)
    soundButtonClick()
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
