/*var map1 = require('./map1.js');
var obj = require('./enemy.js');
var enemyMap1 = map1.init();


exports.initEnemy = function(){

	setInterval(function(){
	
		enemyMap1 = startMoving(enemyMap1);
		
		}, 15);
		
}

var getEnemyMap = function(level){
		var j = 1;
		var returnMap = new Array();
		if(level == '1')
			for(i = 1; i < enemyMap1.length; i++){
				returnMap[j++] = enemyMap1[i].x;
				returnMap[j++] = enemyMap1[i].y;
				}
				
			return returnMap;
}

var startMoving = function(enemyMap){
	for(enemy in enemyMap){
		enemyMap[enemy] =  obj.move(enemyMap[enemy]);
	}
	return enemyMap;
}
*/
exports.synchronize = function(socket){
	setInterval(function(){
	
		socket.broadcast.to(roomNumber).emit('moveEnemy', 1);
		
		}, 100);
	/*socket.on('lvl', function (lvl) {
		var enemyMap = getEnemyMap(lvl.level);
		socket.broadcast.to(roomNumber).emit('map', enemyMap);
    socket.emit('map', enemyMap);
  });*/
}

