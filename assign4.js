 var task1=function(){ 
var getRandomColor = function() {
var red = Math.floor(Math.random() * (255 - 200)) + 200;
var green = Math.floor(Math.random() * (255 - 200)) + 200;
var blue = Math.floor(Math.random() * (255 - 200)) + 200;
var colorstring = "rgb(" + red + "," + green + "," + blue + ")";
return colorstring;}
var body = document.getElementsByTagName('body')[0];
body.style.background = getRandomColor();
};
var task2 = function() {
var body = document.getElementsByTagName('body')[0];
body.addEventListener("keyup", function(keyevent) {
    if (keyevent.keyCode == 13) { // enter key keycode
        startTimer(5);
        return false;
    }
});
var timedisplay = document.getElementById('timedisplay');
var startTimer = function(seconds){
var interval = setInterval(function(){
seconds--;
                        task1();
                        timedisplay.innerhtml=seconds;
if (seconds < 0){
clearInterval(interval); // delete the timer
timedisplay.innerHTML="Hurray!"; //display finishing message
}
}, 1000);
};
};
