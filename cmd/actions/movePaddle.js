export { keyDown, keyUp }
import { drawPaddle, paddlePosition, PADDLE_WIDTH } from "../drawing/draw.js"
import { BOARD_WIDTH,} from "../game.js"

let keydown = " "
function keyDown(event) {
  keydown = event
}

function keyUp() {
    keydown = '';
}

//UPDATE FUNC FOR PADDLE MOVEMENT WITH REQUESTANIMATIONFRAME, toggle: /keydown = event
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



