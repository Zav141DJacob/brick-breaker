export { createBall, drawBall, drawBlock, createPaddle, drawPaddle, drawMenu, drawPause, startButton, removeBall, BALL_START, ballPosition, drawFinishMenu, drawDeathMenu }
import { livesCount } from "../actions/lives.js"
import { ballMover } from "../actions/moveBall.js"
import { changeDirection } from "../collisions/direction.js"
import { grid, ball, levelSelector, paddle, paddlePosition } from "../game.js"


const BALL_START = [125, 20]
let ballPosition = BALL_START

function createBall() {
    ball.classList.add("ball")
    grid.appendChild(ball)
    drawBall()
}

//FUNCTION TO DRAW THE BALL
function drawBall() {
    ball.style.left = ballPosition[0] + "px"
    ball.style.bottom = ballPosition[1] + "px"
}

function removeBall() {
    const ball = document.querySelector(".ball")
    changeDirection()
    grid.removeChild(ball)
    if (livesCount > 0  && levelSelector.length > 0) {
        ballPosition = [125, 20]
        setTimeout(createBall, 2000)
        setTimeout(ballMover, 3000)
    }
}

function drawBlock() {
    for (let i = 0; i < levelSelector.length; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.left = levelSelector[i].bottomLeft[0] + "px"
        block.style.bottom = levelSelector[i].bottomLeft[1] + "px"
        grid.appendChild(block)
    }
}

function createPaddle() {
    paddle.classList.add('paddle')
    grid.appendChild(paddle)
    drawPaddle()
}

function drawPaddle() {
    paddle.style.left = paddlePosition[0] + "px"
    paddle.style.bottom = paddlePosition[1] + "px"
}

function removePaddle() {

}

const startButton = document.createElement("button")
function drawMenu() {
    const menu = document.createElement("div")
    menu.classList.add("menu")
    grid.appendChild(menu)
    startButton.id = "start"
    startButton.innerHTML = "Start game"
    menu.appendChild(startButton)
}

const menuButton = document.createElement("button")

function drawPause() {
    const menu = document.createElement("div")
    menu.classList.add("pause")
    grid.appendChild(menu)
    menuButton.id = "start"
    menuButton.innerHTML = "Menu"
    menu.appendChild(menuButton)
}

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
    removeBall()
}
