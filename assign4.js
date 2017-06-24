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
