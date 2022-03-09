export { cBricks, cWalls, cPaddle }
import { BOARD_HEIGHT, BOARD_WIDTH,  } from "../game.js"
import { changeDirection, wallBounce, floorBounce } from "./direction.js"
import { score } from "../actions/score.js"
import { ballPosition, paddlePosition, PADDLE_WIDTH, PADDLE_HEIGHT, BALL_DIAMETER } from "../drawing/draw.js"
import { levelSelector } from "../levels/levels.js"


function cBricks() {
    for (let i = 0; i < levelSelector.length; i++) {    //maybe struct instead of array
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
    let bPosX = ballPosition[0]
    let pPosX = paddlePosition[0]
    // console.log("ballPos: ----- ", ballPosition)
    // console.log("paddlePos: --- ", paddlePosition)
    if ((bPosX + (BALL_DIAMETER/2) >= pPosX && bPosX < pPosX + PADDLE_WIDTH + (BALL_DIAMETER/2)) && 
    ballPosition[1] < paddlePosition[1] + PADDLE_HEIGHT) {
        // console.log(paddlePosition)
        // console.log(pPosX + (PADDLE_WIDTH / 2) -3)
        // console.log(pPosX + (PADDLE_WIDTH / 2) + 3)
        //  buggy line of code
        //  ballPosition[1] > paddlePosition[1] && ballPosition[1] < paddlePosition[1] + PADDLE_HEIGHT) 
        if (bPosX < pPosX + (PADDLE_WIDTH / 2) - PADDLE_WIDTH / 10) {
            
            floorBounce("left")
        } else if (bPosX > pPosX + (PADDLE_WIDTH / 2) + PADDLE_WIDTH / 10) {
            floorBounce("right")
        } else {
            // console.log("middle")
            floorBounce()
        }

        



        ballPosition[1] = paddlePosition[1] + PADDLE_HEIGHT
    }
}

function cWalls() {
    if (ballPosition[1] >= (BOARD_HEIGHT - BALL_DIAMETER)) {
        floorBounce()
        ballPosition[1] = BOARD_HEIGHT - BALL_DIAMETER - 1
    }
    if (ballPosition[0] >= (BOARD_WIDTH - BALL_DIAMETER) ||
        ballPosition[0] <= (0)) {
        wallBounce()
    }
}