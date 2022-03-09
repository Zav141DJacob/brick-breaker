export { levelSelector, resetBricks }

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
  levelSelector = [...level1]
}

//level1
const level1 = [
  new Block(10, 330),
  new Block(61, 330),
  new Block(112, 330),
  new Block(163, 330),
  new Block(214, 330),
  new Block(10, 300),
  new Block(61, 300),
  new Block(112, 300),
  new Block(163, 300),
  new Block(214, 300)
]

let levelSelector
levelSelector = [...level1]