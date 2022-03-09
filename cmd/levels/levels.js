import { LEVEL_STATUS } from "../game.js"

export { levelSelector, resetBricks, resetBricksLevel, nextLevel }

//BLOCK INFO
const BLOCK_WIDTH = 50
const BLOCK_HEIGHT = 10

//TO GET EVERY BLOCK CORNER LOCATION
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + BLOCK_WIDTH, yAxis]
    this.topRight = [xAxis + BLOCK_WIDTH, yAxis + BLOCK_HEIGHT]
    this.topLeft = [xAxis, yAxis + BLOCK_HEIGHT]
  }
}

//FUNCTION TO RESET LEVELSELECTOR
function resetBricks() {
  levelNr = 1
  levelSelector = [...level1]
}

function resetBricksLevel() {
  if (levelNr == 1) {
    levelSelector = [...level1]
  }
  if (levelNr == 2) {
    levelSelector = [...level2]
  }

  if (levelNr == 3) {
    levelSelector = [...level3]
  }
}

function nextLevel() {
  if (levelNr == 1) {
    levelNr = 2
    LEVEL_STATUS.innerHTML = 2
  }

  if (levelNr == 2) {
    levelNr = 3
    LEVEL_STATUS.innerHTML = 3
  }

}

//level1
const level1 = [
  new Block(10, 330),
 /*  new Block(61, 330),
  new Block(112, 330),
  new Block(163, 330),
  new Block(214, 330),
  new Block(10, 300),
  new Block(61, 300),
  new Block(112, 300),
  new Block(163, 300),
  new Block(214, 300) */
]

const level2 = [
  new Block(10, 330),
  new Block(61, 330),
  /* new Block(112, 330),
  new Block(163, 330),
  new Block(214, 330),
  new Block(10, 300),
  new Block(61, 300),
  new Block(112, 300),
  new Block(163, 300),
  new Block(214, 300) */
]

const level3 = [
  new Block(10, 330),
  new Block(61, 330),
  new Block(112, 330),
]

let levelNr = 1
let levelSelector

if (levelNr == 1) {
  levelSelector = [...level1]
}
if (levelNr == 2) {
  levelSelector = [...level2]
}

if (levelNr == 3) {
  levelSelector = [...level3]
}