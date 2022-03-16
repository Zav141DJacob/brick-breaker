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

//RESET TIMER
function resetTimer() {
  time = 0
  timeSaver = 0
  previousRoundTime = 0
  minutes = Math.floor(time / 60)
  seconds = time - minutes * 60
  TIMER_STATUS.innerHTML = `${minutes}:0${seconds}`
}

function miniRestartTimer() {
  time = 0
  minutes = Math.floor(time / 60)
  seconds = time - minutes * 60
  TIMER_STATUS.innerHTML = `${minutes}:0${seconds}`
}

function savePreviousTimer() {
  timeSaver += time
  previousRoundTime = time
}

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