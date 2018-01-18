var startButton = document.getElementById('start').addEventListener('click', startFunction);
var stopButton = document.getElementById('stop').addEventListener('click', stopFunction);
var resetButton = document.getElementById('reset').addEventListener('click', resetFunction);
var car = document.querySelector(".car");
var intervalId;



function startFunction() {
    intervalId = setInterval(movethecarleft, 25);
}

function stopFunction() {
    clearInterval(intervalId);
}

function resetFunction() {
    car.style.top = "160px";
    car.style.left = "800px";
}

function movethecarleft() {
    car.style.left = `${parseInt(car.style.left.replace("px","")) - 5}px`;
}

var movethecardown = function(){

}
var movethecarright = function(){
	car.style.left = `${parseInt(car.style.left.replace("px","")) - 5}px`;
}
