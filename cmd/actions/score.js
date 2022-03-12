//EXPORTS
export {
    score, resetScore, changeScoreDefault, scoreCount,
    setPreviousScore, savePreviousScore
}

//IMPORTS
import { SCORE_DISPLAY } from "../game.js"
import { difficulty } from "../states/states.js"
import { time } from "./timer.js"

let scoreDefault = 1

function changeScoreDefault() {
    if (difficulty == "easy") {
        scoreDefault = 1
    } else if (difficulty == "medium") {
        scoreDefault = 2
    } else if (difficulty == "hard") {
        scoreDefault = 3
    }
}

let scoreCount = 0
let scoreSaver = 0

//RESET SCORE
function resetScore() {
    scoreCount = 0
    SCORE_DISPLAY.innerHTML = scoreCount
}

function setPreviousScore() {
    scoreCount = scoreSaver
    console.log(scoreCount)
}

function savePreviousScore() {
    scoreSaver = scoreCount
    console.log(scoreSaver)
}

//SCORE
function score() {
    scoreCount += (10 * scoreDefault / (time / 100 + 0.1))
    SCORE_DISPLAY.innerHTML = `${scoreCount.toFixed(2)}`
}