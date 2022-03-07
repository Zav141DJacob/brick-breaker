//EXPORTS
export { grid, game, levelSelector, ball, paddle,
    paddlePosition, BOARD_WIDTH, PADDLE_WIDTH, BALL_DIAMETER,
    BOARD_HEIGHT, PADDLE_HEIGHT, TIMER_STATUS, SCORE_DISPLAY, HIGH_SCORE_DISPLAY,
    LIVES_STATUS,
}

//IMPORTS
import { menu, removeMenu } from "./states/states.js"
import { createBall, drawBlock, createPaddle } from "./drawing/draw.js"
import { level1 } from './levels/levels.js';
import { createEventListeners } from "./listeners/listeners.js"


///GLOBAL VARIABLES
//BOARD INFO
const BOARD_WIDTH = 300
const grid = document.querySelector(".grid")
const BOARD_HEIGHT = 350

//GAME INFO
const SCORE_DISPLAY = document.querySelector("#score")
const GAME_STATUS = document.querySelector("#gameStatus")
const LIVES_STATUS = document.querySelector("#lives")
const TIMER_STATUS = document.querySelector("#timer")
const HIGH_SCORE_DISPLAY = document.querySelector("#highScore")
let levelSelector
//BALL INFO

const BALL_DIAMETER = 20
const ball = document.createElement("div")

//PADDLE INFO
const paddle = document.createElement("div")
const PADDE_START = [125, 10]
const PADDLE_WIDTH = 50
const PADDLE_HEIGHT = 10
let paddlePosition = PADDE_START


levelSelector = level1

//MAIN MENU FUNCTION AT PAGE LOAD
function intro() {
    menu()
    return
}
intro()

//MAIN GAME FUNCTION
function game() {
    removeMenu()
    drawBlock()
    createBall()
    createPaddle()
    createEventListeners()
}

