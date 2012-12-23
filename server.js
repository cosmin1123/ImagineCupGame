var http = require('http');
var path = require('path');

var express = require('express');
var socketIo = require('socket.io');

var sockets = require('./lib/sockets.js');


// Init the http server.
var app = express();
var server = http.createServer(app);


// Init socket.io
io = socketIo.listen(server);
sockets.bind(io);


// Configure web server.
app.configure( function() {
    // Serve static content (html, css, js) from folder /public
    app.use(express.static(path.join(__dirname, 'public')));
});


// Bind web server to port.
server.listen(3000);
