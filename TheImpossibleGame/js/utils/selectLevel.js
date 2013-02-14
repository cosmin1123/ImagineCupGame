
var selectLevel = function(level){
	contextForeground.clearRect(0, 0, 
  canvasForeground.width, canvasForeground.height);
  
  contextBackground.clearRect(0, 0, 
  canvasBackground.width, canvasBackground.height);
  console.log(level);
	if(level == 1){
    
		player = new Player("player", 30, 30, 50, 50);
		initAreaAction1();
		initMap1(canvasBackground);
		enemy = initEnemy1();	
	} 
	
	if(level == 2){
		player = new Player("player", 30, 30, 50, 50);
		initMap2(canvasBackground);
		enemy = initEnemy1();	
	} 
	
	if(level == 3){
		player = new Player("player", 30, 30, 50, 50);
		initMap1(canvasBackground);
		enemy = initEnemy1();	
	} 
	
}

