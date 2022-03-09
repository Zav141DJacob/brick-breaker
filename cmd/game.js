//EXPORTS
export {
    grid, game, BOARD_WIDTH, BOARD_HEIGHT,
    TIMER_STATUS, SCORE_DISPLAY, HIGH_SCORE_DISPLAY, LIVES_STATUS, LEVEL_STATUS
}

//IMPORTS
import { menu } from "./states/states.js"
import { createBall, drawBlock, createPaddle, gameField, drawGame } from "./drawing/draw.js"
import { createEventListeners } from "./listeners/listeners.js"


///GLOBAL VARIABLES
//BOARD INFO
const BOARD_WIDTH = 300
const BOARD_HEIGHT = 350
const grid = document.querySelector(".grid")

//GAME INFO
const SCORE_DISPLAY = document.querySelector("#score")
const LEVEL_STATUS = document.querySelector("#level")
const LIVES_STATUS = document.querySelector("#lives")
const TIMER_STATUS = document.querySelector("#timer")
const HIGH_SCORE_DISPLAY = document.querySelector("#highScore")

//MAIN MENU FUNCTION AT PAGE LOAD
function intro() {
    menu()
}
intro()

//MAIN GAME FUNCTION
function game() {    
    createBall()
    drawBlock()
    createPaddle()
    createEventListeners()
}

