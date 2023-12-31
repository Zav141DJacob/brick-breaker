//EXPORTS
export {
    grid, game, BOARD_WIDTH, BOARD_HEIGHT,
    TIMER_STATUS, SCORE_DISPLAY, LIVES_STATUS,
    LEVEL_STATUS, DIFFICULTY_STATUS
}

//IMPORTS
import { mainMenu } from "./states/states.js"
import { createBall, drawBlock, createPaddle } from "./drawing/draw.js"
import { createEventListeners } from "./listeners/listeners.js"

///GLOBAL VARIABLES
//BOARD INFO
const BOARD_WIDTH = 400
const BOARD_HEIGHT = 450
const grid = document.querySelector(".grid")

//STATS INFO
const SCORE_DISPLAY = document.querySelector("#score")
const LEVEL_STATUS = document.querySelector("#level")
const LIVES_STATUS = document.querySelector("#lives")
const TIMER_STATUS = document.querySelector("#timer")
const DIFFICULTY_STATUS = document.querySelector("#difficulty")


//MAIN MENU FUNCTION AT PAGE LOAD
function intro() {
    mainMenu()
}
intro()

//MAIN GAME FUNCTION
function game() {
    createBall()
    drawBlock()
    createPaddle()
    createEventListeners()
}

