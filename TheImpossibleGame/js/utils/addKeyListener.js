var isRight = false;
var isLeft = false;
var isUp = false;
var isDown = false;
var isFired = false;
var lastPressed = "down";

var keyListener = function(){
	window.addEventListener('keydown', function (event) {
		if(event.keyCode==39){
			isRight=true;
			lastPressed="right";}
		if(event.keyCode==37){
			isLeft=true;
			lastPressed="left"}
		if(event.keyCode==38){
			isUp=true;
			lastPressed="up";}
		if(event.keyCode==40){
			isDown = true;
			lastPressed="down"
		}
		if(event.keyCode==90)
			isFired = true;
		sendingCoords();
	}
  , false);
           
	window.addEventListener('keyup', function (event) {
		if(event.keyCode==39){
			isRight=false;}
    if(event.keyCode==37){
			isLeft=false;}
		if(event.keyCode==38){
			isUp=false;}
		if(event.keyCode==40){
			isDown=false;}      
		if(event.keyCode==90)
			isFired = false;      
           }, false);
}
