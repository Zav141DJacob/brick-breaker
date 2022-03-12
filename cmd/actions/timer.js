//EXPORTS
export { timer, timerID, time, resetTimer }

//IMPORTS
import { TIMER_STATUS } from "../game.js"

let time = 0
let timerID

//RESET TIMER
function resetTimer() {
  time = 0
  TIMER_STATUS.innerHTML = `${time}`
}

//TIMER
function timer() {
  timerID = setInterval(myTimer, 1000);
}

//TIMER++
function myTimer() {
  time++
  TIMER_STATUS.innerHTML = `${time}`
}