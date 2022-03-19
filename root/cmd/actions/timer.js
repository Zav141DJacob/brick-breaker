//EXPORTS
export {
  timer, timerID, time, resetTimer, timeSaver, savePreviousTimer, setPreviousTimer,
  miniRestartTimer,
}

//IMPORTS
import { TIMER_STATUS } from "../game.js"

let time = 0
let timeSaver = 0
let previousRoundTime = 0
let timerID
let minutes 
let seconds

//FULL RESET TIMER
function resetTimer() {
  time = 0
  timeSaver = 0
  previousRoundTime = 0
  minutes = Math.floor(time / 60)
  seconds = time - minutes * 60
  TIMER_STATUS.innerHTML = `${minutes}:0${seconds}`
}

//TO RESTART LEVEL TIMER
function miniRestartTimer() {
  time = 0
  minutes = Math.floor(time / 60)
  seconds = time - minutes * 60
  TIMER_STATUS.innerHTML = `${minutes}:0${seconds}`
}

//SAVE LEVEL TIME TO MEMORYDB
function savePreviousTimer() {
  timeSaver += time
  previousRoundTime = time
}

//LEVEL RESTART SETS MEMORYDB VALUES
function setPreviousTimer() {
  timeSaver -= previousRoundTime
}

//TIMER
function timer() {
  timerID = setInterval(myTimer, 1000);
}

//TIMER++
function myTimer() {
  time++
  minutes = Math.floor(time / 60)
  seconds = time - minutes * 60
  if (time < 10) {
    TIMER_STATUS.innerHTML = `${minutes}:0${seconds}`
  } else {
    TIMER_STATUS.innerHTML = `${minutes}:${seconds}`
  }
}