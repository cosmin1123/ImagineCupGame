var map1 = require('./map1.js');
var obj = require('./enemy.js');
var enemyMap1 = map1.init();

exports.initEnemy = function(){

	setInterval(function(){
	
		enemyMap1 = startMoving(enemyMap1);
		
		}, 15);
		
}

var getEnemyMap = function(level){
		if(level == '1')
			return enemyMap1
}

var startMoving = function(enemyMap){
	for(enemy in enemyMap){
		enemyMap[enemy] =  obj.move(enemyMap[enemy]);
	}
	return enemyMap;
}

exports.synchronize = function(socket){

	socket.on('lvl', function (lvl) {
		var enemyMap = getEnemyMap(lvl.level);
		console.log(enemyMap[1].y);
		socket.broadcast.to(roomNumber).emit('map', enemyMap);
    socket.emit('map', enemyMap);
  });
}

