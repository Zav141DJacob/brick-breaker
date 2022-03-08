export { level1 }

//BLOCK INFO
const BLOCK_WIDTH = 50
const BLOCK_HEIGHT = 10

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + BLOCK_WIDTH, yAxis]
    this.topRight = [xAxis + BLOCK_WIDTH, yAxis + BLOCK_HEIGHT]
    this.topLeft = [xAxis, yAxis + BLOCK_HEIGHT]
  }
}

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