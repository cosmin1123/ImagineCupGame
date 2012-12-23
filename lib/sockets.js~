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

};


exports.bind = function (io) {
    // Socket.io configuration.
    io.sockets.on('connection', onNewPlayerConnected);
};
