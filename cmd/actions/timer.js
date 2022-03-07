export { timer, timerID, time }
import { TIMER_STATUS } from "../game.js"

let time = 0
let timerID
function timer() {
  timerID = setInterval(myTimer, 1000);
}

function myTimer() {
  time++
  TIMER_STATUS.innerHTML = `Time: ${time}`
}