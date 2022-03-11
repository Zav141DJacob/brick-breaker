export {
    createBall, drawBall, drawBlock, createPaddle, drawPaddle, drawMainMenu,
    drawPause, startButton, removeBall, BALL_START, ballPosition, drawFinishMenu,
    drawDeathMenu, menuButton, replayButton, drawGame, gameField,
    paddlePosition, PADDLE_WIDTH, PADDLE_HEIGHT, BALL_DIAMETER, resetBall, resetPaddle, continueButton,
    drawGameMenu, drawHowToMenu, easyButton, mediumButton, hardButton, changeBallDiameter, changePaddleStats
}
import { livesCount } from "../actions/lives.js"
import { ballMover } from "../actions/moveBall.js"
import { changeDirection } from "../collisions/direction.js"
import { grid } from "../game.js"
import { levelNr, levelSelector } from "../levels/levels.js"
import { soundBallDeath } from "../sounds/sounds.js"
import { difficulty } from "../states/states.js"


const replayButton = document.createElement("button")
const continueButton = document.createElement("button")
const easyButton = document.createElement("button")
const mediumButton = document.createElement("button")
const hardButton = document.createElement("button")
const startButton = document.createElement("button")

//BALL FUNCTIONS
let BALL_DIAMETER = 25
function changeBallDiameter() {
    if (difficulty == "easy") {
        BALL_DIAMETER = 25
    } 

    if (difficulty == "medium") {
        BALL_DIAMETER = 20
    } 

    if (difficulty == "hard") {
        BALL_DIAMETER = 15
    }
}


let ball = document.createElement("div")
let BALL_START = [191, 45]
let ballPosition = BALL_START
let gameField

function resetBall() {
    ballPosition = [191, 45]
}

function createBall() {
    if (difficulty == "easy") {
        ball.classList.add("ballEasy")
        ball.classList.remove("ballMedium")
        ball.classList.remove("ballHard")
    }

    if (difficulty == "medium") {
        ball.classList.add("ballMedium")
        ball.classList.remove("ballEasy")
        ball.classList.remove("ballHard")
    } 

    if (difficulty == "hard") {
        ball.classList.add("ballHard")
        ball.classList.remove("ballEasy")
        ball.classList.remove("ballMedium")
    }
    gameField.appendChild(ball)
    drawBall()
}

function drawBall() {
    ball.style.left = ballPosition[0] + "px"
    ball.style.bottom = ballPosition[1] + "px"
}

function removeBall() {
    soundBallDeath()
    let ball
    if (difficulty == "easy") {
        ball = document.querySelector(".ballEasy")
    } else if (difficulty == "medium") {
        ball = document.querySelector(".ballMedium")
    } else if (difficulty == "hard") {
        ball = document.querySelector(".ballHard")
    }
    changeDirection()
    gameField.removeChild(ball)
    if (livesCount > 0 && levelSelector.length > 0) {
        ballPosition = [191, 45]
        setTimeout(createBall, 2000)
        setTimeout(ballMover, 3000)
    }
}


//BLOCK FUNCTIONS
function drawBlock() {
    for (let i = 0; i < levelSelector.length; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.left = levelSelector[i].bottomLeft[0] + "px"
        block.style.bottom = levelSelector[i].bottomLeft[1] + "px"
        gameField.appendChild(block)
    }
}


//PADDLE FUNCTIONS
const paddle = document.createElement("div")
let PADDLE_START = [165, 20]
let PADDLE_WIDTH = 80
let PADDLE_HEIGHT = 13

function changePaddleStats() {
    if (difficulty == "easy") {
        PADDLE_WIDTH = 80
        paddlePosition = [165, 20]
    } 

    if (difficulty == "medium") {
        PADDLE_WIDTH = 55
        paddlePosition = [175, 20]
    } 

    if (difficulty == "hard") {
        PADDLE_WIDTH = 35
        paddlePosition = [181, 20]
    }
}
let paddlePosition = [165, 20]

function resetPaddle() {
    if (difficulty == "easy") {
        paddlePosition = [165, 20]
    } else if (difficulty == "medium") {
        paddlePosition = [175, 20]  
    } else if (difficulty == "hard") {
        paddlePosition = [175, 20] 
    }
}

function createPaddle() {
    if (difficulty == "easy") {
        paddle.classList.add('paddleEasy')
        paddle.classList.remove("paddleHard")
        paddle.classList.remove("paddleMedium")
    } else if (difficulty == "medium") {
        paddle.classList.add('paddleMedium')
        paddle.classList.remove("paddleEasy")
        paddle.classList.remove("paddleHard")
    } else if (difficulty == "hard") {
        paddle.classList.add('paddleHard')
        paddle.classList.remove("paddleEasy")
        paddle.classList.remove("paddleMedium")
    }
    gameField.appendChild(paddle)
    drawPaddle()
}


function drawPaddle() {
    paddle.style.left = paddlePosition[0] + "px"
    paddle.style.bottom = paddlePosition[1] + "px"
}


//MENU
function drawMainMenu() {
    const menu = document.createElement("div")
    menu.classList.add("mainMenu")
    grid.appendChild(menu)
    startButton.id = "start"
    startButton.innerHTML = "Continue"
    menu.appendChild(startButton)
    continueButton.id = "HowToPlay"
    continueButton.innerHTML = "Controls"
    menu.appendChild(continueButton)
}


//GAMEMENU
function drawGameMenu() {
    const menu = document.createElement("div")
    menu.classList.add("gameMenu")
    grid.appendChild(menu)
    startButton.id = "start"
    startButton.innerHTML = "Start game"
    menu.appendChild(startButton)
    easyButton.id = "easy"
    easyButton.innerHTML = "Easy"
    menu.appendChild(easyButton)
    mediumButton.id = "medium"
    mediumButton.innerHTML = "Medium"
    menu.appendChild(mediumButton)
    hardButton.id = "hard"
    hardButton.innerHTML = "Hard"
    menu.appendChild(hardButton)
    continueButton.id = "back"
    continueButton.innerHTML = "Back"
    menu.appendChild(continueButton)
}

//HOWTOPLAYMENU

function drawHowToMenu() {
    const menu = document.createElement("div")
    menu.classList.add("howToMenu")
    grid.appendChild(menu)
    startButton.id = "back"
    startButton.innerHTML = "Back"
    menu.appendChild(startButton)
}


//GENERAL GAMEFIELD
function drawGame() {
    const game = document.createElement("div")
    game.classList.add("gameField")
    grid.appendChild(game)
    gameField = document.querySelector(".gameField")
}


//PAUSE
const menuButton = document.createElement("button")
function drawPause() {
    const menu = document.createElement("div")
    menu.classList.add("pause")
    gameField.appendChild(menu)
    menuButton.id = "start"
    menuButton.innerHTML = "Menu"
    menu.appendChild(menuButton)
    replayButton.id = "Restart"
    replayButton.innerHTML = "Restart"
    menu.appendChild(replayButton)
}


//FINISH
function drawFinishMenu() {
    const menu = document.createElement("div")
    menu.classList.add("finish")
    grid.appendChild(menu)
    menuButton.id = "Menu"
    menuButton.innerHTML = "Menu"
    menu.appendChild(menuButton)
    if (levelNr < 5) {
        continueButton.id = "Continue"
        continueButton.innerHTML = "Continue"
        menu.appendChild(continueButton)
    }
    replayButton.id = "Replay"
    replayButton.innerHTML = "Replay"
    menu.appendChild(replayButton)
}


//DEATH
function drawDeathMenu() {
    const menu = document.createElement("div")
    menu.classList.add("death")
    grid.appendChild(menu)
    menuButton.id = "Menu"
    menuButton.innerHTML = "Menu"
    menu.appendChild(menuButton)
    replayButton.id = "Restart"
    replayButton.innerHTML = "Restart"
    menu.appendChild(replayButton)
    const death = document.createElement("div")
    death.innerHTML = "YOU ARE DEAD"
    menu.appendChild(death)
}
