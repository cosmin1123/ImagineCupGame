var sync = require('./synchronize.js');
var playerList = new Array();
var socketList = new Array();

var joinRoom = (function () {
    numClients = 0;
    numRooms = 0;
    

		
    return function (socket) {
        numClients += 1;

        // Players 1 and 2 get sent to room0
        roomNumber = 'room'+Math.round(numClients / 2);
        socket.join(roomNumber);

        // When the room is full, broadcast start.
        if (numClients % 2 === 0) {
            socket.broadcast.to(roomNumber).emit('ready', "ready");
            socket.emit('ready', "ready");
        }
				
        return roomNumber;
    };
})();


var onNewPlayerConnected = function (socket) {

    room = joinRoom(socket);
    socket.room = room;

    // Each client sends his position on the gameboard and that is broadcasted back to everyone else.
    socket.on('XY', function (coords) {
        socket.broadcast.to(socket.room).emit('XY', coords);
    });
    
    socket.on('playerDied', function (deadState) {
        socket.broadcast.to(socket.room).emit('playerDied', deadState);
    });
    
    socket.on('playerName', function(playerName) {
    	socket.playerName = playerName.playerName;
    	if(playerList.indexOf(playerName.playerName) == -1){
				playerList.push(playerName.playerName);
				socketList.push(socket);
				io.sockets.emit('newPlayer', playerList);
			}
			
    });
    
   socket.on('playerMessage', function(message){
    		io.sockets.emit('message', message);
    });
    
   socket.on('invite', function(invi){
   		for(var i = 0; i < socketList.length; i++)
    		if(socketList[i].playerName == invi.teamMate){
    			console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    			socketList[i].emit('invitation', invi);
    		}
    });

};


exports.bind = function (io) {
    // Socket.io configuration.
		setInterval(function(){
					io.sockets.emit('moveEnemy', 1);
			}, 140);
			
    io.sockets.on('connection', function(socket){
    	onNewPlayerConnected(socket);
    	socket.on('disconnect', function () {
    		 var i = playerList.indexOf(socket.playerName)
    		 playerList.splice(i, 1);
    		 				io.sockets.emit('newPlayer', playerList);
   		});
    });
    
    

    
    
};
