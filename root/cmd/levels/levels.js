//EXPORTS
export { levelSelector, resetBricks, resetBricksLevel, nextLevel, levelNr }

//IMPORTS
import { LEVEL_STATUS } from "../game.js"

//BLOCK INFO
const BLOCK_WIDTH = 55
const BLOCK_HEIGHT = 13

//TO GET EVERY BLOCKS CORNER LOCATION
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + BLOCK_WIDTH, yAxis]
    this.topRight = [xAxis + BLOCK_WIDTH, yAxis + BLOCK_HEIGHT]
    this.topLeft = [xAxis, yAxis + BLOCK_HEIGHT]
  }
}

//TO RESET LEVELSELECTOR
function resetBricks() {
  levelNr = 1
  levelSelector = [...level[0]]
}


//TO RESET CURRENT LEVEL
function resetBricksLevel() {

  switch (levelNr) {
    case 1:
      levelSelector = [...level[0]]
      break;
    case 2:
      levelSelector = [...level[1]]
      break
    case 3:
      levelSelector = [...level[2]]
      break
    case 4:
      levelSelector = [...level[3]]
      break
    case 5:
      levelSelector = [...level[4]]
      break
  } 


  // if (levelNr == 1) {
  //   levelSelector = [...level[0]]
  // }
  // if (levelNr == 2) {
  //   levelSelector = [...level[1]]
  // }

  // if (levelNr == 3) {
  //   levelSelector = [...level3]
  // }

  // if (levelNr == 4) {
  //   levelSelector = [...level4]
  // }

  // if (levelNr == 5) {
  //   levelSelector = [...level5]
  // }
}

//TO GO TO NEXT LEVEL
function nextLevel() {
  if (levelNr == 1) {
    levelNr = 2
    LEVEL_STATUS.innerHTML = `2`
  } else if (levelNr == 2) {
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

let levels = [
  //level 1
  {
    columns: 6,
    rows: 3,
    tiles: [
      1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1,
      0, 0, 1, 1, 0, 0
    ],
    getTile: (col, row) => levels[0].tiles[row * levels[0].columns + col]
  },
  //level 2
  {
    columns: 12,
    rows: 5,
    tiles: [
      0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
      1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
      0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
      0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0,
      0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
      
    ],
    getTile: (col, row) => levels[1].tiles[row * levels[1].columns + col]
  },
  //level 3
  {
    columns: 5,
    rows: 6,
    tiles: [
      0, 1, 0, 1, 0, 
      1, 1, 1, 1, 1, 
      1, 0, 0, 0, 1, 
      1, 0, 1, 0, 1,
      1, 0, 0, 0, 1,
      1, 1, 1, 1, 1,
      
    ],
    getTile: (col, row) => levels[2].tiles[row * levels[2].columns + col]
  },
  //level 4
  {
    columns: 6,
    rows: 7,
    tiles: [
      1, 1, 1, 1, 1, 1,
      0, 1, 1, 1, 1, 0,
      0, 0, 1, 1, 0, 0, 
      0, 0, 1, 1, 0, 0,
      1, 0, 0, 0, 0, 1,
      1, 1, 0, 0, 1, 1,
      1, 0, 0, 0, 0, 1
      
    ],
    getTile: (col, row) => levels[3].tiles[row * levels[3].columns + col]
  },
  //level 5
  {
    columns: 6,
    rows: 7,
    tiles: [
      1, 0, 1, 1, 0, 1,
      1, 0, 1, 1, 0, 1,
      1, 1, 1, 1, 1, 1, 
      1, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1
      
    ],
    getTile: (col, row) => levels[4].tiles[row * levels[4].columns + col]
  },
]

let level = []  //all of the levels bricks
let nrOfLevels = levels.length
for (let i = 0; i < nrOfLevels; ++i)
{
  let levelTemp = [levels[i].columns, levels[i].rows] 
  console.log(levelTemp)
  let levelI = []
  for (let x = 0; x < levelTemp[0]; ++x) 
  {
    for (let y = 0; y < levelTemp[1]; ++y)
    {
      console.log("X: " + x + "; Y: " + y)
      if(levels[i].getTile(x, y)) 
      {
        levelI.push(new Block( ((x+1) * (345 / levels[i].columns) - (345 / levels[i].columns / 2)), 420 - ((y) * (180 / levels[i].rows))))
        
      }
    }
  }
  level.push(levelI)
  console.log(level[1])
}

{
//level1
// const level1 = [
//   new Block(9, 420),
//   new Block(74, 420),
//   new Block(139, 420),
//   new Block(204, 420),
//   new Block(269, 420),
//   new Block(334, 420),
//   new Block(9, 360),
//   new Block(74, 360),
//   new Block(139, 360),
//   new Block(204, 360),
//   new Block(269, 360),
//   new Block(334, 360),
//   new Block(108, 300),
//   new Block(172, 300),
//   new Block(237, 300),
// ]

// // level2
// const level2 = [
//   new Block(9, 420),
//   new Block(9, 290),
//   new Block(74, 325),
//   new Block(139, 360),
//   new Block(204, 390),
//   new Block(269, 420),
//   new Block(9, 170),
//   new Block(74, 205),
//   new Block(139, 240),
//   new Block(204, 275),
//   new Block(269, 310),
//   new Block(334, 345),
//   new Block(204, 170),
//   new Block(269, 205),
//   new Block(334, 240),
// ]

// //level3
// const level3 = [
//   new Block(100, 420),
//   new Block(240, 420),
//   new Block(30, 375),
//   new Block(100, 375),
//   new Block(170, 375),
//   new Block(240, 375),
//   new Block(310, 375),
//   new Block(30, 320),
//   new Block(30, 265),
//   new Block(170, 265),
//   new Block(30, 210),
//   new Block(30, 155),
//   new Block(310, 320),
//   new Block(310, 265),
//   new Block(310, 210),
//   new Block(310, 155),
//   new Block(240, 155),
//   new Block(170, 155),
//   new Block(100, 155),
// ]

// //level4
// const level4 = [
//   new Block(9, 420),
//   new Block(74, 420),
//   new Block(139, 420),
//   new Block(204, 420),
//   new Block(269, 420),
//   new Block(334, 420),
//   new Block(74, 360),
//   new Block(139, 360),
//   new Block(204, 360),
//   new Block(269, 360),
//   new Block(139, 300),
//   new Block(204, 300),
//   new Block(175, 240),
//   new Block(9, 240),
//   new Block(9, 180),
//   new Block(9, 120),
//   new Block(334, 240),
//   new Block(334, 180),
//   new Block(334, 120),
//   new Block(74, 180),
//   new Block(269, 180),
// ]

// //level5
// const level5 = [
//   new Block(9, 180),
//   new Block(74, 180),
//   new Block(139, 180),
//   new Block(204, 180),
//   new Block(269, 180),
//   new Block(334, 180),
//   new Block(9, 220),
//   new Block(74, 220),
//   new Block(139, 220),
//   new Block(204, 220),
//   new Block(269, 220),
//   new Block(334, 220),
//   new Block(9, 260),
//   new Block(9, 300),
//   new Block(9, 340),
//   new Block(9, 380),
//   new Block(9, 420),
//   new Block(334, 260),
//   new Block(334, 300),
//   new Block(334, 340),
//   new Block(334, 380),
//   new Block(334, 420),
//   new Block(74, 320),
//   new Block(172, 320),
//   new Block(270, 320),
//   new Block(172, 360),
//   new Block(172, 400),
// ]
}

let levelNr = 1
let levelSelector

//LEVEL SELECT
switch(levelNr) {
  case 1:
    
    levelSelector = [...level[0]]
    // levelSelector = [...level[0]]
    break
  case 2:
    levelSelector = [...level[1]]
    break
  case 3:
    levelSelector = [...level[2]]
    break
  case 4:
    levelSelector = [...level[3]]
    break
  case 5:
    levelSelector = [...level[4]]
    break
}