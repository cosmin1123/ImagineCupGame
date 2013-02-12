	var receiveX = 50;
	var receiveY = 50;
	var socket = io.connect("m0nsterrush.cloudapp.net:3000/");//replace this with server ip and port	
	

	
	var sendLocation = function (x, y, playerName) {
  	socket.emit('XY', {x:x, y:y, playerName:playerName});
	};
		
	var sendingCoords = function(){
		sendLocation(player.x, player.y, currentPlayer);
	};	


	socket.on('XY', function (coords) {
  			if (coords.playerName !== currentPlayer) {
    			 receiveX = coords.x;
    			 receiveY = coords.y;
    		}		
		});
		
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

			setInterval(function () {
				for (var i = 1; i < enemy.length; i++) {
					enemy[i].move();
				}
			}, 15);
		}	
		

