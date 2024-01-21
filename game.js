let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    let buttonSelected = document.querySelector("#" + currentColor);
    buttonSelected.classList.add("pressed");
    setTimeout(function(){
    buttonSelected.classList.remove("pressed");}, 100);
    $("#" + currentColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

function nextSequence() {
    userClickedPattern = []
    level ++
    document.getElementById("level-title").innerHTML = "Level " + level

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor)
    // console.log(randomChosenColor)
    
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
  }


let buttonAll=document.getElementsByClassName("btn");

for (let i = 0; i<buttonAll.length; i++){
document.getElementsByClassName("btn")[i].addEventListener("click", function () {
// $(".btn").click(function() {
    
    let userChosenColor = this.id
    //console.log(userChosenColor)
    userClickedPattern.push(userChosenColor)

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
})
}

let started = true

document.getElementById("level-title").addEventListener("click", function() {
if(started){
nextSequence();
started = false}
})


function checkAnswer(currentLevel){
 if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//  console.log("success");
 if (userClickedPattern.length === gamePattern.length){
setTimeout(nextSequence, 1000);}
    }
else {
    // console.log("failed");
    let body = document.querySelector("body");
    body.classList.add("game-over");
    setTimeout(function(){
    body.classList.remove("game-over");}, 200);
    document.getElementById("level-title").innerHTML = "Oyun Sona Erdi! <br> Yeniden başlamak buraya tıkla!";
    startOver();
    }
}

function startOver (){
level = 0;
gamePattern = [];
started = true;
}

// -----------

let toggler = document.getElementsByClassName("toggler");   

        for (let i = 0; i < toggler.length; i++){
            toggler[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let sosyalmedya = this.nextElementSibling;
                if(sosyalmedya.style.maxHeight){
                    sosyalmedya.style.maxHeight = null;
                    sosyalmedya.style.border = null;
                }
                else {
                    sosyalmedya.style.maxHeight = sosyalmedya.scrollHeight+ "px";
                    sosyalmedya.style.border = "2px darkgrey solid";
                    sosyalmedya.style.borderRadius = "10px";
                }
            })
        }