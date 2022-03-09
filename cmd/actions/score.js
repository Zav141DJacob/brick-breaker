export { score, resetScore }
import { SCORE_DISPLAY, HIGH_SCORE_DISPLAY } from "../game.js"
import { levelSelector } from "../levels/levels.js"

let scoreCount = 0
let highScoreCount = 0

//RESET SCORE
function resetScore() {
    scoreCount = 0
    SCORE_DISPLAY.innerHTML = `Score: ${scoreCount}`
}


//SCORE
function score() {
    scoreCount += 10
    if (levelSelector.length <= 0) {
        highScore()
    }
    SCORE_DISPLAY.innerHTML = `Score: ${scoreCount}`
}

function highScore() {
    if (scoreCount >= highScoreCount) {
        highScoreCount = scoreCount
        HIGH_SCORE_DISPLAY.innerHTML = `High Score: ${highScoreCount}`
    }
}