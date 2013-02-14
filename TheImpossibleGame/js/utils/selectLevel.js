
var selectLevel = function(level){
	contextForeground.clearRect(0, 0, 
  canvasForeground.width, canvasForeground.height);
  
  contextBackground.clearRect(0, 0, 
  canvasBackground.width, canvasBackground.height);
  console.log(level);
	if(level == 1){
    
		player = new Player("player", 30, 30, 50, 50, currentPlayer);
		player2 = new Player("player2", 30, 30, 50, 50, currentPlayer);
	//	initAreaAction1();
		setTimeout( function () { initMap1(canvasBackground); }, 200);	
		enemy = initEnemy1();	
	} 
	
	if(level == 2){
		player = new Player("player", 80, 80, 50, 50, currentPlayer);
		player2 = new Player("player2", 80, 80, 50, 50, currentPlayer);
		setTimeout( function () { initMap2(canvasBackground); }, 200);	
		enemy = initEnemy1();	
	} 
	
	if(level == 3){
		player = new Player("player", 30, 30, 50, 50, currentPlayer);
		player2 = new Player("player2", 30, 30, 50, 50, currentPlayer);
		setTimeout( function () { initMap1(canvasBackground); }, 100);	
		enemy = initEnemy1();	
	} 
	
}

