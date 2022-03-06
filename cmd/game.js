//GLOBAL VARIABLES

//BOARD INFO
const BOARD_WIDTH = 300
const grid = document.querySelector(".grid")
const BOARD_HEIGHT = 350

//GAME INFO
const SCORE_DISPLAY = document.querySelector("#score")
const GAME_STATUS = document.querySelector("#gameStatus")
const LIVES_STATUS = document.querySelector("#lives")
const TIMER_STATUS = document.querySelector("#timer")
let levelSelector
let gameStatus = "Not playing"
let score = 0
let level = 0 // not used atm
let difficulty // not used atm
let timer = 0
let highScore // not used atm
let lives = 3 // not used atm

//BALL INFO
const BALL_START = [125, 20]
const BALL_DIAMETER = 20
let ballPosition = BALL_START
let xDirection = 2
let yDirection = 2
let speed // not used atm

//PADDLE INFO
const PADDE_START = [125, 10]
const PADDLE_WIDTH = 50
const PADDLE_HEIGHT = 10
let paddlePosition = PADDE_START

// LEVELS
import { level1 } from './levels.js';
levelSelector = level1

//MAIN GAME FUNCTION
function game() {

  // FUNCTION FOR INGAME TIMER
  //UNFINISHED
  /* document.addEventListener("keydown", timerClock)
  function timerClock(event) {
    if (event.key == "ArrowLeft" && gameStatus == "Not playing" || event.which == 32 && gameStatus == "Paused") {
      setInterval(myTimer, 1000);
      GAME_STATUS.innerHTML = "Playing"
      gameStatus = "Playing"
    }

    if (event.key == "ArrowRight" && gameStatus == "Not playing")
    setInterval(myTimer, 1000);
    GAME_STATUS.innerHTML = "Playing"
    gameStatus = "Playing"
  }
  timerClock() */
/* 
  function myTimer() {
    timer++
    TIMER_STATUS.innerHTML = timer
  } */

  LIVES_STATUS.innerHTML = lives

  //FUNCTION TO PAUSE THE GAME
  document.addEventListener("keydown", pauseGame)
  function pauseGame(event) {
    if (event.which === 32 && gameStatus === "Playing") {
      gameStatus = "Paused"
      GAME_STATUS.innerHTML = "Paused"
    } else if (event.which === 32 && gameStatus === "Paused") {
      gameStatus = "Playing"
      GAME_STATUS.innerHTML = "Playing"
      ballMover()
    }
  }

  //EVENT LISTERNERS
  document.addEventListener("keydown", movePaddle)
  document.addEventListener("keydown", ballMover)

  //FUNCTION TO DRAW BLOCKS
  function drawBlock() {
    for (let i = 0; i < levelSelector.length; i++) {
      const block = document.createElement("div")
      block.classList.add("block")
      block.style.left = levelSelector[i].bottomLeft[0] + "px"
      block.style.bottom = levelSelector[i].bottomLeft[1] + "px"
      grid.appendChild(block)
    }
  }
  drawBlock()

  //FUNCTION TO CREATE PADDLE
  const paddle = document.createElement("div")
  paddle.classList.add('paddle')
  drawPaddle()
  grid.appendChild(paddle)

  //FUNCTION TO DRAW THE PADDLE
  function drawPaddle() {
    paddle.style.left = paddlePosition[0] + "px"
    paddle.style.bottom = paddlePosition[1] + "px"
  }

  // FUNCTION TO MOVE PADDLE
  function movePaddle(event) {
    switch (event.key) {
      case "ArrowLeft":
        if (paddlePosition[0] > 0) {
          paddlePosition[0] -= 8
          drawPaddle()
        }
        break
      case "ArrowRight":
        if (paddlePosition[0] < BOARD_WIDTH - PADDLE_WIDTH) {
          paddlePosition[0] += 8
          drawPaddle()
          requestAnimationFrame(movePaddle)
        }
        break
    }
  }

  //FUNCTION TO CREATE BALL
  const ball = document.createElement("div")
  ball.classList.add("ball")
  drawBall()
  grid.appendChild(ball)


  //FUNCTION TO DRAW THE BALL
  function drawBall() {
    ball.style.left = ballPosition[0] + "px"
    ball.style.bottom = ballPosition[1] + "px"
  }

  //FUNCTION TO MOVE THE BALL
  function ballMover(event) {
    function moveBall(event) {
      document.removeEventListener("keydown", ballMover)
      ballPosition[0] += xDirection
      ballPosition[1] += yDirection
      drawBall()
      collision()
      let ballFrame = requestAnimationFrame(moveBall)

      //CHECK FOR LOSS  
      if (gameStatus == "Dead") {
        cancelAnimationFrame(ballFrame)
        document.removeEventListener("keydown", movePaddle)
        SCORE_DISPLAY.innerHTML = "GAME OVER"
      }
      if (gameStatus === "Finished") {
        cancelAnimationFrame(ballFrame)
        document.removeEventListener("keydown", movePaddle)
        SCORE_DISPLAY.innerHTML = "YOU WIN"
      }

      if (gameStatus === "Paused") {
        cancelAnimationFrame(ballFrame)
      }
      if (gameStatus === "Respawn") {
        cancelAnimationFrame(ballFrame)
      }
    }
    if (gameStatus === "Paused") {
      cancelAnimationFrame(moveBall)
    }
    if (gameStatus === "Respawn") {
      cancelAnimationFrame(moveBall)
    }
    requestAnimationFrame(moveBall)
  }

  //FUNCTION TO CHECK FOR COLLISIONS - BALL/PADDLE/WALLS
  function collision() {

    //CHECK FOR GAME OVER
    if (ballPosition[1] <= 0) {
      if (lives > 0) {
        gameStatus = "Respawn"
        GAME_STATUS.innerHTML = "Respawned"
        lives = lives - 1
        LIVES_STATUS.innerHTML = lives
      } else {
        gameStatus = "Dead"
        GAME_STATUS.innerHTML = "Dead"
        return
      }
    }

    //CHECK FOR GAME FINISHED
    if (levelSelector.length === 0) {
      gameStatus = "Finished"
      GAME_STATUS.innerHTML = "Finished"
      return
    }

    //CHECK FOR WALL COLLISIONS
    function changeDirection() {
      if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
      }

      if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
      }

      if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
      }

      if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
      }

    }

    //CHECK FOR WALL COLLISIONS 2
    if (ballPosition[0] >= (BOARD_WIDTH - BALL_DIAMETER) ||
      ballPosition[1] >= (BOARD_HEIGHT - BALL_DIAMETER) ||
      ballPosition[0] <= (0)) {
      changeDirection()
    }

    //CHECK FOR BRICK COLLISIONS
    for (let i = 0; i < levelSelector.length; i++) {
      if ((ballPosition[0] > levelSelector[i].bottomLeft[0] && ballPosition[0] < levelSelector[i].bottomRight[0]) &&
        ((ballPosition[1] + BALL_DIAMETER) > levelSelector[i].bottomLeft[1] && ballPosition[1] < levelSelector[i].topLeft[1])
      ) {
        const allBlocks = Array.from(document.querySelectorAll('.block'))
        allBlocks[i].classList.remove('block')
        levelSelector.splice(i, 1)
        changeDirection()
        score++
        SCORE_DISPLAY.innerHTML = score
      }
    }

    //CHECK FOR PADDLE COLLISIONS
    if ((ballPosition[0] > paddlePosition[0] && ballPosition[0] < ballPosition[0] + PADDLE_WIDTH)
      && ballPosition[1] > paddlePosition[1] && ballPosition[1] < paddlePosition[1] + PADDLE_HEIGHT) {
      changeDirection()
    }
  }
}

//BUTTON TO START THE GAME 
const startButton = document.querySelector("#start")
startButton.onclick = function () {
  game()
}