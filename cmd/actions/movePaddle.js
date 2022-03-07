export { movePaddleLeft, movePaddleRight }
import { drawPaddle } from "../drawing/draw.js"
import { paddlePosition, BOARD_WIDTH, PADDLE_WIDTH } from "../game.js"

// FUNCTION TO MOVE PADDLE
function movePaddleLeft() {
  if (paddlePosition[0] > 0) {
    paddlePosition[0] -= 5
    drawPaddle()
  }

}

function movePaddleRight() {
  if (paddlePosition[0] < BOARD_WIDTH - PADDLE_WIDTH) {
    paddlePosition[0] += 5
    drawPaddle()
  }
}