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
task3 = function() {
var getColorString = function(color) {
return "rgb(" + color.red + "," + color.green + "," + color.blue + ")";
}
var getColor = function(red, green, blue){
return {
red: red,
green: green,
blue: blue,
};
}
var getColorInBetween = function(color1, color2,percent){
var getMiddleNumber = function(num1, num2, percent){
var ratio = percent/100;
return Math.floor(num1*ratio + num2*(1-ratio));
}
var red = getMiddleNumber(color1.red, color2.red, percent);
var green = getMiddleNumber(color1.green, color2.green, percent);
var blue = getMiddleNumber(color1.blue, color2.blue, percent);
return getColor(red, green, blue);
}

var color1 = getColor(250,100,200);
var color2 = getColor(200,250,250);
var color3 = getColorInBetween(color1,color2,25);
console.log(color3); // See the output in JavaScript Console.

};
