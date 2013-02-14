var receiveX = 50;
var receiveY = 50;
var socket = io.connect("m0nsterrush.cloudapp.net:3000/");//replace this with server ip and port	

var sendLocation = function (x, y, playerName) {
    socket.emit('XY', { x: x, y: y, playerName: playerName });
};

var sendingCoords = function () {
    sendLocation(player.x, player.y, currentPlayer);
};


socket.on('XY', function (coords) {
    if (coords.playerName !== currentPlayer) {
        receiveX = coords.x;
        receiveY = coords.y;
    }
});