//EXPORTS
export { cBricks, cWalls, cPaddle }

//IMPORTS
import { BOARD_HEIGHT, BOARD_WIDTH, } from "../game.js"
import { changeDirection, wallBounce, floorBounce, paddleBounce } from "./direction.js"
import { score, scoreCount } from "../actions/score.js"
import { ballPosition, paddlePosition, PADDLE_WIDTH, PADDLE_HEIGHT, BALL_DIAMETER } from "../drawing/draw.js"
import { levelSelector } from "../levels/levels.js"
import { time } from "../actions/timer.js"
import { soundBallBounce, soundBrickKill } from "../sounds/sounds.js"

//BRICKS COLLISION
function cBricks() {
    for (let i = 0; i < levelSelector.length; i++) {    //maybe struct instead of array
        if ((ballPosition[0] + BALL_DIAMETER > levelSelector[i].bottomLeft[0] &&
            ballPosition[0] < levelSelector[i].bottomRight[0])
        ) {
            if (((ballPosition[1] + BALL_DIAMETER) > levelSelector[i].bottomLeft[1] &&
                ballPosition[1] < levelSelector[i].topLeft[1])) {

                const allBlocks = Array.from(document.querySelectorAll('.block'))
                allBlocks[i].classList.remove('block')

                levelSelector.splice(i, 1)
                soundBrickKill()
                floorBounce()
                score()
            }
        }
    }
}

//PADDLE COLLISION
function cPaddle() {
    let bPosX = ballPosition[0]
    let pPosX = paddlePosition[0]
    if ((bPosX + (BALL_DIAMETER / 2) >= pPosX && bPosX < pPosX + PADDLE_WIDTH + (BALL_DIAMETER / 2)) &&
        ballPosition[1] < paddlePosition[1] + PADDLE_HEIGHT) {
        if (bPosX < pPosX + (PADDLE_WIDTH / 2) - PADDLE_WIDTH / 10) {
            soundBallBounce()
            paddleBounce("left")
        } else if (bPosX > pPosX + (PADDLE_WIDTH / 2) + PADDLE_WIDTH / 10) {
            soundBallBounce()
            paddleBounce("right")
        } else {
            soundBallBounce()
            paddleBounce("middle")
        }
        ballPosition[1] = paddlePosition[1] + PADDLE_HEIGHT
    }
}

//WALLS COLLISION
function cWalls() {
    if (ballPosition[1] >= (BOARD_HEIGHT - BALL_DIAMETER)) {
        soundBallBounce()
        floorBounce()
        ballPosition[1] = BOARD_HEIGHT - BALL_DIAMETER - 1
    }
    if (ballPosition[0] >= (BOARD_WIDTH - BALL_DIAMETER) ||
        ballPosition[0] <= (0)) {
        soundBallBounce()
        wallBounce()
    }
}