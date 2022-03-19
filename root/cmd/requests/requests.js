export {
    getFormValue, resetFormValue, newPostScores,
    newGetEasy, newGetMedium, newGetHard, response
}

import { difficulty } from "../states/states.js"
import { scoreCount } from "../actions/score.js"
import { timeSaver } from "../actions/timer.js"
import { drawResponse, drawTable } from "../drawing/draw.js"

let minutes
let seconds
let name
function getFormValue(id) {
    name = document.getElementById(id).value;
}

function resetFormValue() {
    name = ""
}
let response



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
/*         const menu = document.querySelector(".finishFinal")
        const menu1 = document.createElement("div")
        menu1.id = "modalResponse"
        menu1.classList.add("text")
        menu1.innerHTML = response
        menu.appendChild(menu1) */
    };
}

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