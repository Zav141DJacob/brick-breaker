export {
    createBall, drawBall, drawBlock, createPaddle, drawPaddle, drawMenu,
    drawPause, startButton, removeBall, BALL_START, ballPosition, drawFinishMenu,
    drawDeathMenu, menuButton, replayButton, drawGame, gameField,
    paddlePosition, PADDLE_WIDTH, PADDLE_HEIGHT, BALL_DIAMETER, resetBall, resetPaddle,
}
import { livesCount } from "../actions/lives.js"
import { ballMover } from "../actions/moveBall.js"
import { changeDirection } from "../collisions/direction.js"
import { grid } from "../game.js"
import { levelSelector } from "../levels/levels.js"

//BALL FUNCTIONS
const BALL_DIAMETER = 20
const ball = document.createElement("div")
let BALL_START = [125, 20]
let ballPosition = BALL_START
let gameField

function resetBall() {
    ballPosition = [125, 20]
}

function createBall() {
    ball.classList.add("ball")
    gameField.appendChild(ball)
    drawBall()
}

function drawBall() {
    ball.style.left = ballPosition[0] + "px"
    ball.style.bottom = ballPosition[1] + "px"
}

function removeBall() {
    const ball = document.querySelector(".ball")
    changeDirection()
    gameField.removeChild(ball)
    if (livesCount > 0 && levelSelector.length > 0) {
        ballPosition = [125, 20]
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
const PADDE_START = [125, 10]
const PADDLE_WIDTH = 50
const PADDLE_HEIGHT = 10
let paddlePosition = PADDE_START

function resetPaddle() {
    paddlePosition = [125, 10]
}

function createPaddle() {
    paddle.classList.add('paddle')
    gameField.appendChild(paddle)
    drawPaddle()
}


function drawPaddle() {
    paddle.style.left = paddlePosition[0] + "px"
    paddle.style.bottom = paddlePosition[1] + "px"
}


//MENU
const startButton = document.createElement("button")
function drawMenu() {
    const menu = document.createElement("div")
    menu.classList.add("menu")
    grid.appendChild(menu)
    startButton.id = "start"
    startButton.innerHTML = "Start game"
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
const replayButton = document.createElement("button")
const continueButton = document.createElement("button")
function drawFinishMenu() {
    const menu = document.createElement("div")
    menu.classList.add("finish")
    grid.appendChild(menu)
    menuButton.id = "Menu"
    menuButton.innerHTML = "Menu"
    menu.appendChild(menuButton)
    continueButton.id = "Continue"
    continueButton.innerHTML = "Continue"
    menu.appendChild(continueButton)
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
