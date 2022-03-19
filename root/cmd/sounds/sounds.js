//EXPORTS
export {
    Sound, soundBallBounce, soundBallDeath, soundButtonClick, soundFinalFinish,
    soundPlayerDeath, soundRoundEnd, soundRoundStart, soundBrickKill
}

//SOUND
class Sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        }
        this.stop = function () {
            this.sound.pause();
        }
    }
}

let mySound

//BALL BOUNCE
function soundBallBounce() {
    mySound = new Sound("../../../ui/assets/sounds/ballBounce.mp3")
    mySound.play()

}

//BALL DEATH
function soundBallDeath() {
    mySound = new Sound("../../../ui/assets/sounds/ballDeath.mp3")
    mySound.play()

}

//BRICK DESTROYED
function soundBrickKill() {
    mySound = new Sound("../../../ui/assets/sounds/brickKill.mp3")
    mySound.play()
}

//BUTTON CLICK
function soundButtonClick() {
    mySound = new Sound("../../../ui/assets/sounds/buttonClick.mp3")
    mySound.play()

}

//FINAL ROUND FINISH
function soundFinalFinish() {
    mySound = new Sound("../../../ui/assets/sounds/finalFinish.mp3")
    mySound.play()

}

//DEATH
function soundPlayerDeath() {
    mySound = new Sound("../../../ui/assets/sounds/playerDeath.mp3")
    mySound.play()


}

//ROUND FINISH
function soundRoundEnd() {
    mySound = new Sound("../../../ui/assets/sounds/roundEnd.mp3")
    mySound.play()
}

//ROUND START
function soundRoundStart() {
    mySound = new Sound("../../../ui/assets/sounds/roundStart.mp3")
    mySound.play()
}

