//EXPORTS
export { createEventListeners, events, events2, multyFunction }

//IMPORTS
import { ballMover, changePauseEnabler} from "../actions/moveBall.js";
import { keyDown, keyUp } from "../actions/movePaddle.js";
import { timer } from "../actions/timer.js";
import { pause, unPause } from "../states/states.js";

//event dictionaries
let events = {
  37: keyDown,
  39: keyDown,
  38: multyFunction,
};

let events2 = {
  37: keyUp,
  39: keyUp,
}

//MAIN EVENTLISTENER FUNC
function createEventListeners() {
  document.addEventListener('keydown', onEventFired);
  document.addEventListener('keyup', onEventFired2);
}

//TO CHECK FROM DICTIONARIES IF IT EVENT EXISTS FOR PRESSED BUTTON
function onEventFired(event) {
  if (events[event.which]) {
    events[event.which](event.which);
  }
}

function onEventFired2(event) {
  if (events2[event.which]) {
    events2[event.which](event.which);
  }
}


//MULTY FUNCTION FOR SAME KEY
function multyFunction() {
  changePauseEnabler()
  events[32] = pause
  ballMover()
  timer()
}
