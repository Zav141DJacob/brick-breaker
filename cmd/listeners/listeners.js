import { ballMover } from "../actions/moveBall.js";
import { movePaddleLeft, movePaddleRight } from "../actions/movePaddle.js";
import { timer } from "../actions/timer.js";
import { pause, unPause } from "../states/states.js";
export { createEventListeners, events, lol }



let events = {
  37: movePaddleLeft,
  39: movePaddleRight,
  38: lol,
  32: pause,
};


function createEventListeners() {
  document.addEventListener('keydown', onEventFired);
}

function onEventFired(event) {
  if (events[event.which]) {
    events[event.which]();
  }
}

function lol() {
  ballMover()
  timer()

}
