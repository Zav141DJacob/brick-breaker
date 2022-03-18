//EXPORT
export {
    createBall, drawBall, drawBlock, createPaddle, drawPaddle, drawMainMenu,
    drawPause, startButton, removeBall, BALL_START, ballPosition, drawFinishMenu,
    drawDeathMenu, menuButton, replayButton, drawGame, gameField,
    paddlePosition, PADDLE_WIDTH, PADDLE_HEIGHT, BALL_DIAMETER, resetBall, resetPaddle, continueButton,
    drawGameMenu, drawHowToMenu, easyButton, mediumButton, hardButton, changeBallDiameter, changePaddleStats,
    highScores, drawLeaderBoardMenu, leaderboardEasy, leaderboardMedium, leaderboardHard, highScoreSubmit,drawFinalModal
}

//IMPORTS
import { livesCount } from "../actions/lives.js"
import { ballMover } from "../actions/moveBall.js"
import { scoreCount } from "../actions/score.js"
import { changeDirection } from "../collisions/direction.js"
import { grid } from "../game.js"
import { levelNr, levelSelector } from "../levels/levels.js"
import { soundBallDeath } from "../sounds/sounds.js"
import { difficulty } from "../states/states.js"
import { time, timeSaver } from "../actions/timer.js"

const replayButton = document.createElement("button")
const continueButton = document.createElement("button")
const easyButton = document.createElement("button")
const mediumButton = document.createElement("button")
const hardButton = document.createElement("button")
const leaderboardEasy = document.createElement("button")
const leaderboardMedium = document.createElement("button")
const leaderboardHard = document.createElement("button")
const startButton = document.createElement("button")
const highScores = document.createElement("button")
const highScoreSubmit = document.createElement("button")
const highScoreSubmitModal = document.createElement("button")
const text0 = document.createElement("p1")
const text1 = document.createElement("p1")
const text2 = document.createElement("p1")
const text3 = document.createElement("p1")
const imgDiv1 = document.createElement("div")
const imgDiv2 = document.createElement("div")
const imgDiv3 = document.createElement("div")
const searchDiv = document.createElement("div")
const leaderBoardDiv1 = document.createElement("div")
const leaderBoardDiv2 = document.createElement("div")
const leaderBoardDiv3 = document.createElement("div")
let form = document.createElement('form');
let text_field = document.createElement('input');

//FINAL TIME
let minutes
let seconds

//BALL FUNCTIONS
let BALL_DIAMETER = 25
function changeBallDiameter() {
    if (difficulty == "easy") {
        BALL_DIAMETER = 25
    }

    if (difficulty == "medium") {
        BALL_DIAMETER = 20
    }

    if (difficulty == "hard") {
        BALL_DIAMETER = 15
    }
}


let ball = document.createElement("div")
let BALL_START = [191, 45]
let ballPosition = BALL_START
let gameField

function resetBall() {
    ballPosition = [191, 45]
}

function createBall() {
    if (difficulty == "easy") {
        ball.classList.add("ballEasy")
        ball.classList.remove("ballMedium")
        ball.classList.remove("ballHard")
    }

    if (difficulty == "medium") {
        ball.classList.add("ballMedium")
        ball.classList.remove("ballEasy")
        ball.classList.remove("ballHard")
    }

    if (difficulty == "hard") {
        ball.classList.add("ballHard")
        ball.classList.remove("ballEasy")
        ball.classList.remove("ballMedium")
    }
    gameField.appendChild(ball)
    drawBall()
}

function drawBall() {
    ball.style.left = ballPosition[0] + "px"
    ball.style.bottom = ballPosition[1] + "px"
}

function removeBall() {
    if (levelSelector.length > 0) {
        soundBallDeath()
    }
    let ball
    if (difficulty == "easy") {
        ball = document.querySelector(".ballEasy")
    } else if (difficulty == "medium") {
        ball = document.querySelector(".ballMedium")
    } else if (difficulty == "hard") {
        ball = document.querySelector(".ballHard")
    }
    changeDirection()
    gameField.removeChild(ball)
    if (livesCount > 0 && levelSelector.length > 0) {
        ballPosition = [191, 45]
        setTimeout(createBall, 2000)
        setTimeout(ballMover, 3000)
    }
}


//BLOCK FUNCTIONS
function drawBlock() {
    for (let i = 0; i < levelSelector.length; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.left = levelSelector[i].bottomLeft[0] + "px"
        block.style.bottom = levelSelector[i].bottomLeft[1] + "px"
        gameField.appendChild(block)
    }
}


//PADDLE FUNCTIONS
const paddle = document.createElement("div")
let PADDLE_START = [165, 20]
let PADDLE_WIDTH = 80
let PADDLE_HEIGHT = 13

function changePaddleStats() {
    if (difficulty == "easy") {
        PADDLE_WIDTH = 80
        paddlePosition = [165, 20]
    }

    if (difficulty == "medium") {
        PADDLE_WIDTH = 55
        paddlePosition = [175, 20]
    }

    if (difficulty == "hard") {
        PADDLE_WIDTH = 35
        paddlePosition = [181, 20]
    }
}
let paddlePosition = [165, 20]

function resetPaddle() {
    if (difficulty == "easy") {
        paddlePosition = [165, 20]
    } else if (difficulty == "medium") {
        paddlePosition = [175, 20]
    } else if (difficulty == "hard") {
        paddlePosition = [175, 20]
    }
}

function createPaddle() {
    if (difficulty == "easy") {
        paddle.classList.add('paddleEasy')
        paddle.classList.remove("paddleHard")
        paddle.classList.remove("paddleMedium")
    } else if (difficulty == "medium") {
        paddle.classList.add('paddleMedium')
        paddle.classList.remove("paddleEasy")
        paddle.classList.remove("paddleHard")
    } else if (difficulty == "hard") {
        paddle.classList.add('paddleHard')
        paddle.classList.remove("paddleEasy")
        paddle.classList.remove("paddleMedium")
    }
    gameField.appendChild(paddle)
    drawPaddle()
}


function drawPaddle() {
    paddle.style.left = paddlePosition[0] + "px"
    paddle.style.bottom = paddlePosition[1] + "px"
}


//MENU
function drawMainMenu() {
    const menu = document.createElement("div")
    menu.classList.add("mainMenu")
    grid.appendChild(menu)
    text1.classList.add("text")
    text1.id = "mainMenuTitle"
    text1.innerHTML = "BrickBreaker"
    menu.appendChild(text1)
    startButton.id = "mainMenuContinue"
    startButton.innerHTML = "Continue"
    menu.appendChild(startButton)
    highScores.id = "mainMenuLeaderboard"
    highScores.innerHTML = "Leaderboard"
    menu.appendChild(highScores)
    continueButton.id = "mainMenuControls"
    continueButton.innerHTML = "Controls"
    menu.appendChild(continueButton)
    text2.classList.add("text")
    text2.id = "mainMenuMade"
    text2.innerHTML = "Made by nimi25820, Jacob, KeitiN"
    menu.appendChild(text2)
}


//GAMEMENU
function drawGameMenu() {
    const menu = document.createElement("div")
    menu.classList.add("gameMenu")
    grid.appendChild(menu)
    text1.id = "gameMenuTitle"
    text1.innerHTML = "Please select a difficulty level"
    text1.classList = "text"
    menu.appendChild(text1)
    easyButton.id = "gameMenuEasy"
    easyButton.innerHTML = "Easy"
    menu.appendChild(easyButton)
    mediumButton.id = "gameMenuMedium"
    mediumButton.innerHTML = "Medium"
    menu.appendChild(mediumButton)
    hardButton.id = "gameMenuHard"
    hardButton.innerHTML = "Hard"
    menu.appendChild(hardButton)
    continueButton.id = "gameMenuBack"
    continueButton.innerHTML = "Back to Main menu"
    menu.appendChild(continueButton)
    startButton.id = "gameMenuStart"
    startButton.innerHTML = "Start your adventure"
    menu.appendChild(startButton)
}

//CONTROLS
function drawHowToMenu() {
    const menu = document.createElement("div")
    menu.classList.add("howToMenu")
    grid.appendChild(menu)
    text0.id = "controlsTitle"
    text0.innerHTML = "Controls"
    text0.classList.add("text")
    menu.appendChild(text0)
    text1.id = "controlsLeftRight"
    text1.classList.add("text")
    text1.innerHTML = "Left and Right arrows move the paddle"
    menu.appendChild(text1)
    imgDiv1.id = "controlsImg1"
    menu.appendChild(imgDiv1)
    text2.id = "controlsUp"
    text1.classList.add("text")
    text2.innerHTML = "Up arrow launches the ball"
    menu.appendChild(text2)
    imgDiv2.id = "controlsImg2"
    menu.appendChild(imgDiv2)
    text3.id = "controlsSpace"
    text3.innerHTML = "Space pauses the game"
    text3.classList.add("text")
    menu.appendChild(text3)
    imgDiv3.id = "controlsImg3"
    menu.appendChild(imgDiv3)
    startButton.id = "controlsMenuBack"
    startButton.innerHTML = "Back"
    menu.appendChild(startButton)
}

//LEADERBOARD
function drawLeaderBoardMenu() {
    const menu = document.createElement("div")
    menu.classList.add("leaderBoardMenu")
    grid.appendChild(menu)
    text0.id = "leaderBoardTitle"
    text0.innerHTML = "Leaderboard"
    text0.classList.add("text")
    menu.appendChild(text0)
    leaderBoardDiv1.id = "leaderBoardDiv"
    menu.appendChild(leaderBoardDiv1)
    leaderBoardDiv2.id = "leaderBoardTopBar"
    leaderBoardDiv1.appendChild(leaderBoardDiv2)
    searchDiv.id = "leaderBoardSearch"
    leaderBoardDiv2.appendChild(searchDiv)

    //SEARCH BAR
    form.id = "searchForm"
    form.setAttribute('action', '/some_path');
    form.setAttribute('method', 'post');
    text_field.setAttribute('type', 'text');
    text_field.setAttribute('placeholder', 'Search...');
    text_field.setAttribute('input', '');
    form.appendChild(text_field);
    searchDiv.appendChild(form);
    //SEARCH BAR ^

    leaderboardEasy.id = "leaderBoardEasy"
    leaderboardEasy.innerHTML = "Easy"
    leaderBoardDiv2.appendChild(leaderboardEasy)
    leaderboardMedium.id = "leaderBoardMedium"
    leaderboardMedium.innerHTML = "Medium"
    leaderBoardDiv2.appendChild(leaderboardMedium)
    leaderboardHard.id = "leaderBoardHard"
    leaderboardHard.innerHTML = "Hard"
    leaderBoardDiv2.appendChild(leaderboardHard)
    leaderBoardDiv3.id = "leaderBoardBottomBar"
    leaderBoardDiv1.appendChild(leaderBoardDiv3)
    continueButton.id = "leaderBoardBack"
    continueButton.innerHTML = "Back to Main menu"
    menu.appendChild(continueButton)
}


//GENERAL GAMEFIELD
function drawGame() {
    const game = document.createElement("div")
    game.classList.add("gameField")
    grid.appendChild(game)
    gameField = document.querySelector(".gameField")
}


//PAUSE
const menuButton = document.createElement("button")
function drawPause() {
    const menu = document.createElement("div")
    menu.classList.add("pause")
    gameField.appendChild(menu)
    text1.id = "pausedTitle"
    text1.innerHTML = "Paused"
    text1.classList.add("text")
    menu.appendChild(text1)
    text2.id = "pausedPress"
    text2.innerHTML = "Press space to continue"
    text2.classList.add("text")
    menu.appendChild(text2)
    menuButton.id = "pausedMenu"
    menuButton.innerHTML = "Exit to Main menu"
    menu.appendChild(menuButton)
    replayButton.id = "pausedRestart"
    replayButton.innerHTML = "Restart"
    menu.appendChild(replayButton)
}


//FINISH
function drawFinishMenu() {
    if (levelNr < 5) {
        const menu = document.createElement("div")
        menu.classList.add("finish")
        grid.appendChild(menu)

        text1.id = "finishLevel"
        text1.innerHTML = "Level completed"
        text1.classList.add("text")
        menu.appendChild(text1)

        text2.id = "finishScore"
        text2.innerHTML = `Score: ${scoreCount.toFixed(2)}`
        text2.classList.add("text")
        menu.appendChild(text2)

        minutes = Math.floor(time / 60)
        seconds = time - minutes * 60
        text0.id = "finishTime"
        text0.classList.add("text")
        if (time < 10) {
            text0.innerHTML = `Level time: ${minutes}:0${seconds}`
        } else {
            text0.innerHTML = `Level time: ${minutes}:${seconds}`
        }
        menu.appendChild(text0)

        minutes = Math.floor(timeSaver / 60)
        seconds = timeSaver - minutes * 60
        text3.id = "finishTotalTime"
        text3.innerHTML = `Total time: ${minutes}:${seconds}`
        text3.classList.add("text")
        menu.appendChild(text3)

        menuButton.id = "finishMenu"
        menuButton.innerHTML = "Back to Main menu"
        menu.appendChild(menuButton)

        replayButton.id = "finishReplay"
        replayButton.innerHTML = "Replay the level"
        menu.appendChild(replayButton)

        continueButton.id = "finishContinue"
        continueButton.innerHTML = "Next level"
        menu.appendChild(continueButton)

    } else {
        const menu = document.createElement("div")
        menu.classList.add("finishFinal")
        grid.appendChild(menu)
        text1.id = "finishFinalLevel"
        text1.innerHTML = "Game completed"
        text1.classList.add("text")
        menu.appendChild(text1)
        text2.id = "finishFinalScore"
        text2.innerHTML = `Final score: ${scoreCount.toFixed(2)}`
        text2.classList.add("text")
        menu.appendChild(text2)
        minutes = Math.floor(timeSaver / 60)
        seconds = timeSaver - minutes * 60
        text3.id = "finishFinalTime"
        if (seconds < 10) {
            text3.innerHTML = `Total time: ${minutes}:0${seconds}`
        } else {
            text3.innerHTML = `Total time: ${minutes}:${seconds}`
        }
        text3.classList.add("text")
        menu.appendChild(text3)
        menuButton.id = "finishFinalMenu"
        menuButton.innerHTML = "Back to Main menu"
        menu.appendChild(menuButton)
        replayButton.id = "finishFinalReplay"
        replayButton.innerHTML = "Replay the level"
        menu.appendChild(replayButton)
        highScoreSubmit.id = "submitHigh"
        highScoreSubmit.innerHTML = `Submit (${scoreCount.toFixed(2)})`
        menu.appendChild(highScoreSubmit)
    }
}

function drawFinalModal() {
    const menu = document.createElement("div")
    menu.classList.add("modal")
    grid.appendChild(menu)
    continueButton.id = "submitScore"
    continueButton.innerHTML = "Submit"
    menu.appendChild(continueButton)
    replayButton.id = "cancelScore"
    replayButton.innerHTML = "Cancel"
    menu.appendChild(replayButton)
    const modalOverlay = document.createElement("div")
    modalOverlay.className = "modal-js-overlay"
    grid.appendChild(modalOverlay)
    
}

//DEATH
function drawDeathMenu() {
    const menu = document.createElement("div")
    menu.classList.add("death")
    grid.appendChild(menu)
    text1.id = "deathMenuTitle"
    text1.innerHTML = "Game over"
    text1.classList.add("text")
    menu.appendChild(text1)
    menuButton.id = "deathMenu"
    menuButton.innerHTML = "Exit to Main menu"
    menu.appendChild(menuButton)
    replayButton.id = "deathRestart"
    replayButton.innerHTML = "Restart level"
    menu.appendChild(replayButton)
}