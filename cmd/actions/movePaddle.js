export { keyDown, keyUp }
import { drawPaddle } from "../drawing/draw.js"
import { paddlePosition, BOARD_WIDTH, PADDLE_WIDTH } from "../game.js"
import { events2 } from "../listeners/listeners.js"

let keydown = " "
function keyDown(event) {
  keydown = event
}

function keyUp() {
    keydown = '';
}

const update = () => {
  switch (keydown) {
    case 37:
      if (paddlePosition[0] > 0) {
        paddlePosition[0] -= 5
        drawPaddle()
        break;
      }
    case 39:
      if (paddlePosition[0] < BOARD_WIDTH - PADDLE_WIDTH) {
        paddlePosition[0] += 5
        drawPaddle()
        break;
      }
  }
  requestAnimationFrame(update);
}
requestAnimationFrame(update);



