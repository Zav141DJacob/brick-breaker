export { cBricks, cWalls, cPaddle }
import { levelSelector, BALL_DIAMETER, PADDLE_HEIGHT, PADDLE_WIDTH, BOARD_HEIGHT, BOARD_WIDTH, paddlePosition, paddle } from "../game.js"
import { changeDirection } from "./direction.js"
import { score } from "../actions/score.js"
import { ballPosition } from "../drawing/draw.js"

function cBricks() {
        for (let i = 0; i < levelSelector.length; i++) {
            if ((ballPosition[0] > levelSelector[i].bottomLeft[0] && ballPosition[0] < levelSelector[i].bottomRight[0]) &&
                ((ballPosition[1] + BALL_DIAMETER) > levelSelector[i].bottomLeft[1] && ballPosition[1] < levelSelector[i].topLeft[1])
            ) {
                const allBlocks = Array.from(document.querySelectorAll('.block'))
                allBlocks[i].classList.remove('block')
                levelSelector.splice(i, 1)
                changeDirection()
                score()

            }
        }
    }

function cPaddle() {
    if ((ballPosition[0] > paddlePosition[0] && ballPosition[0] < paddlePosition[0] + PADDLE_WIDTH)
        && ballPosition[1] > paddlePosition[1] && ballPosition[1] < paddlePosition[1] + PADDLE_HEIGHT) {
            changeDirection()
    }
}

function cWalls() {
    if (ballPosition[0] >= (BOARD_WIDTH - BALL_DIAMETER) ||
        ballPosition[1] >= (BOARD_HEIGHT - BALL_DIAMETER) ||
        ballPosition[0] <= (0)) {
        changeDirection()
    }
}