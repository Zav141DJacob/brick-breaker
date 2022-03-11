export { score, resetScore, changeScoreDefault, scoreCount }
import { SCORE_DISPLAY, HIGH_SCORE_DISPLAY } from "../game.js"
import { levelSelector } from "../levels/levels.js"
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

//let highScoreCount = 0

//RESET SCORE
function resetScore() {
    scoreCount = 0
    SCORE_DISPLAY.innerHTML = `Score: ${scoreCount}`
}


//SCORE
function score() {
    scoreCount += (10 * scoreDefault / (time / 100 + 0.1))
    /*     if (levelSelector.length <= 0) {
            highScore()
        } */
    SCORE_DISPLAY.innerHTML = `Score: ${scoreCount.toFixed(2)}`
}

/* function highScore() {
    if (scoreCount >= highScoreCount) {
        highScoreCount = scoreCount
        HIGH_SCORE_DISPLAY.innerHTML = `High Score: ${highScoreCount}`
    }
} */