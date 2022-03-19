//EXPORTS
export {
    getFormValue, resetFormValue, newPostScores,
    newGetEasy, newGetMedium, newGetHard, response
}

//IMPORTS
import { difficulty } from "../states/states.js"
import { scoreCount } from "../actions/score.js"
import { timeSaver } from "../actions/timer.js"
import { drawResponse, drawTable } from "../drawing/draw.js"

//GLOBAL VARIABLES
let minutes
let seconds
let name
let response

//GETTING FORM VALUE FOR USERNAME
function getFormValue(id) {
    name = document.getElementById(id).value;
}

//RESETTING FOR VALUE 
function resetFormValue() {
    name = ""
}

//API CALL TO POST NEW DATA OF SCORES
function newPostScores() {
    minutes = Math.floor(timeSaver / 60)
    seconds = timeSaver - minutes * 60
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8081/data", open);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = ""
    if (seconds < 10) {
        xhr.send(JSON.stringify({
            "difficulty": difficulty,
            "username": name,
            "score": Math.round(scoreCount),
            "time": `${minutes}:0${seconds}`
        }))
    } else {
        xhr.send(JSON.stringify({
            "difficulty": difficulty,
            "username": name,
            "score": Math.round(scoreCount),
            "time": `${minutes}:${seconds}`
        }))
    };

    xhr.onload = function () {
        response = xhr.response
        drawResponse()
    };
}

//API CALL TO GET HIGHSCORES OF "EASY" DIFFICULTY
function newGetEasy() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/data/easy", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send()
    xhr.onload = function () {
        response = JSON.parse(xhr.response)
        drawTable()
    };
}

//API CALL TO GET HIGHSCORES OF "MEDIUM" DIFFICULTY
function newGetMedium() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/data/medium", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send()
    xhr.onload = function () {
        response = JSON.parse(xhr.response)
        drawTable()
    };
}

//API CALL TO GET HIGHSCORES OF "HARD" DIFFICULTY
function newGetHard() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/data/hard", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send()
    xhr.onload = function () {
        response = JSON.parse(xhr.response)
        drawTable()
    };
}