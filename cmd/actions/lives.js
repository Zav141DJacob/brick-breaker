export { lives, livesCount }
import { LIVES_STATUS } from "../game.js"

let livesCount = 3
function lives() {
    livesCount--
    LIVES_STATUS.innerHTML = `Lives: ${livesCount}`

}