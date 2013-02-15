
	var receiveX = 50;
	var receiveY = 50;
	var gameStarted = false;
	var socket = io.connect("78.97.50.9:3000/");//replace this with server ip and port	
	

var sendLocation = function () {
    socket.emit('XY', { isUp: player.isUp, isDown: player.isDown, isLeft: player.isLeft, isRight:  player.isRight, playerName: player.playerName });
};

var sendingCoords = function () {
    sendLocation();
};
		
	var startEnemy = function () {

		//socket.on('map', function (map) {
		//		var j = 1;
		//    for (var i = 1; i < enemy.length; i++) {
		//        enemy[i].x = map[j++];
		//        enemy[i].y = map[j++];
		//    }
		//});

		//setInterval(function () {
		//    socket.emit('lvl', { level: 1 })}
		//, 30);

		//	setInterval(function () {
		//		for (var i = 1; i < enemy.length; i++) {
		//			enemy[i].move();
		//		}
		//	}, 15);
	}	
		

socket.on('XY', function (movement) {
    if (movement.playerName !== player.playerName) {
        player2.isUp = movement.isUp;
        player2.isDown = movement.isDown;
        player2.isRight = movement.isRight;
        player2.isLeft = movement.isLeft;
    }
});

socket.on('playerDied', function (deadState) {
 	 	if(deadState.dead)
 	 		playerDies(player2);
 });

 socket.on('moveEnemy', function (co) {
 	 	if(gameStarted){
	 	console.log(co);
	 	for (var i = 1; i < enemy.length; i++) {
						enemy[i].move();
					}
					
		}
 });
