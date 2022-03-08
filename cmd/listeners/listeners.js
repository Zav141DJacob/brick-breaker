import { ballMover } from "../actions/moveBall.js";
import { keyDown, keyUp } from "../actions/movePaddle.js";
import { timer } from "../actions/timer.js";
import { pause, unPause } from "../states/states.js";
export { createEventListeners, events, events2, lol }



let events = {
  37: keyDown,
  39: keyDown,
  38: lol,
  32: pause,
};

let events2 = {
  37: keyUp,
  39: keyUp,
}


function createEventListeners() {
  document.addEventListener('keydown', onEventFired);
  document.addEventListener('keyup', onEventFired2);
}

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

function lol() {
  ballMover()
  timer()

}
