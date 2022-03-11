export { lives, livesCount, resetLives, changeLives }
import { LIVES_STATUS } from "../game.js"
import { difficulty } from "../states/states.js"

let livesCount = 3
function changeLives() {
    if (difficulty == "easy") {
        livesCount = 3
        LIVES_STATUS.innerHTML = `Extra lives: ${livesCount}`
    } else if (difficulty == "medium") {
        livesCount = 2
        LIVES_STATUS.innerHTML = `Extra lives: ${livesCount}`
    } else if (difficulty == "hard") {
        livesCount = 1
        LIVES_STATUS.innerHTML = `Extra lives: ${livesCount}`
    }
}

//RESET LIVES COUNT
function resetLives() {
    if (difficulty == "easy") {
        livesCount = 3
    } else if (difficulty == "medium") {
        livesCount = 2
    } else if (difficulty == "hard") {
        livesCount = 1
    }
    LIVES_STATUS.innerHTML = `Extra lives: ${livesCount}`
}

//LIVES
function lives() {
    livesCount--
    LIVES_STATUS.innerHTML = `Extra lives: ${livesCount}`
} 