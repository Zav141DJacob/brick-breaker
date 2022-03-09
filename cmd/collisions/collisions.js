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
    if ((ballPosition[0] > paddlePosition[0] && ballPosition[0] < paddlePosition[0] + PADDLE_WIDTH) && 
    ballPosition[1] == 18) {
        console.log("made it")
        //  buggy line of code
        //  ballPosition[1] > paddlePosition[1] && ballPosition[1] < paddlePosition[1] + PADDLE_HEIGHT) 
            console.log(ballPosition)
            floorBounce()
    }
}

function cWalls() {
    if (ballPosition[1] >= (BOARD_HEIGHT - BALL_DIAMETER)) {
        floorBounce()
    } else if (ballPosition[0] >= (BOARD_WIDTH - BALL_DIAMETER) ||
        ballPosition[0] <= (0)) {
        wallBounce()
    }
}