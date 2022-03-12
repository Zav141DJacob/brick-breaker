import { LEVEL_STATUS } from "../game.js"

export { levelSelector, resetBricks, resetBricksLevel, nextLevel, levelNr }

//BLOCK INFO
const BLOCK_WIDTH = 55
const BLOCK_HEIGHT = 13

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

  if (levelNr == 4) {
    levelSelector = [...level4]
  }

  if (levelNr == 5) {
    levelSelector = [...level5]
  }
}

function nextLevel() {
if (levelNr == 1) {
    levelNr = 2
    LEVEL_STATUS.innerHTML = `2`
  } else if (levelNr == 2){
    levelNr = 3
    LEVEL_STATUS.innerHTML = `3`
  } else if (levelNr == 3) {
    levelNr = 4
    LEVEL_STATUS.innerHTML = `4`
  } else if (levelNr == 4) {
    levelNr = 5
    LEVEL_STATUS.innerHTML = `5`
  }
}

//testing struct
// const testLevel = {
//   9: {
//     '360': Block(9, 360),
//     '420': Block(9, 420)
//   },
//   74: {
//     '360': Block(74, 360),
//     '420': Block(74, 420)
//   },
//   139: {
//     '360': Block(139, 360),
//     '420': Block(139, 420)
//   },
//   204: {
//     '360': Block(204, 360),
//     '420': Block(204, 420)
//   },
//   269: {
//     '360': Block(269, 360),
//     '420': Block(269, 420)
//   },
//   334: {
//     '360': Block(334, 360),
//     '420': Block(334, 420)
//   },
//   108: {
//     '300': Block(108, 300),
//   },
//   172: {
//     '300': Block(172, 300),
//   },
//   237: {
//     '300': Block(237, 300),
//   },
// }


//level1
const level1 = [
  new Block(9, 420),
  new Block(74, 420),
  new Block(139, 420),
  new Block(204, 420),
  new Block(269, 420),
  new Block(334, 420),
  new Block(9, 360),
  new Block(74, 360),
  new Block(139, 360),
  new Block(204, 360),
  new Block(269, 360),
  new Block(334, 360),
  new Block(108, 300),
  new Block(172, 300),
  new Block(237, 300),
]

const level2 = [
  new Block(9, 420),
  new Block(9, 290),
  new Block(74, 325),
  new Block(139, 360),
  new Block(204, 390),
  new Block(269, 420),
  new Block(9, 170),
  new Block(74, 205),
  new Block(139, 240),
  new Block(204, 275),
  new Block(269, 310),
  new Block(334, 345),
  new Block(204, 170),
  new Block(269, 205),
  new Block(334, 240),
]

const level3 = [
  new Block(100, 420),
  new Block(240, 420),
  new Block(30, 375),
  new Block(100, 375),
  new Block(170, 375),
  new Block(240, 375),
  new Block(310, 375),
  new Block(30, 320),
  new Block(30, 265),
  new Block(170, 265),
  new Block(30, 210),
  new Block(30, 155),
  new Block(310, 320),
  new Block(310, 265),
  new Block(310, 210),
  new Block(310, 155),
  new Block(240, 155),
  new Block(170, 155),
  new Block(100, 155),
]

const level4 = [
  new Block(9, 420),
  new Block(74, 420),
  new Block(139, 420),
  new Block(204, 420),
  new Block(269, 420),
  new Block(334, 420),
  new Block(74, 360),
  new Block(139, 360),
  new Block(204, 360),
  new Block(269, 360),
  new Block(139, 300),
  new Block(204, 300),
  new Block(175, 240),
  new Block(9, 240),
  new Block(9, 180),
  new Block(9, 120),
  new Block(334, 240),
  new Block(334, 180),
  new Block(334, 120),
  new Block(74,180),
  new Block(269, 180),
]

const level5 = [
  new Block(9, 180),
  new Block(74, 180),
  new Block(139, 180),
  new Block(204, 180),
  new Block(269, 180),
  new Block(334, 180),
  new Block(9, 220),
  new Block(74, 220),
  new Block(139, 220),
  new Block(204, 220),
  new Block(269, 220),
  new Block(334, 220),
  new Block(9, 260),
  new Block(9, 300),
  new Block(9, 340),
  new Block(9, 380),
  new Block(9, 420),
  new Block(334, 260),
  new Block(334, 300),
  new Block(334, 340),
  new Block(334, 380),
  new Block(334, 420),
  new Block(74, 320),
  new Block(172, 320),
  new Block(270, 320),
  new Block(172, 360),
  new Block(172, 400),
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

if (levelNr == 4) {
  levelSelector = [...level4]
}

if (levelNr == 5) {
  levelSelector = [...level5]
}