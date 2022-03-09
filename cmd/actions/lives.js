export { lives, livesCount, resetLives }
import { LIVES_STATUS } from "../game.js"

let livesCount = 1

//RESET LIVES COUNT
function resetLives() {
    livesCount = 3
    LIVES_STATUS.innerHTML = `Lives: ${livesCount}`
}

//LIVES
function lives() {
    livesCount--
    LIVES_STATUS.innerHTML = `Lives: ${livesCount}`
} 