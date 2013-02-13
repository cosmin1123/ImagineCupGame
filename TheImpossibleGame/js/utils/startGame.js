
"use strict";
var vx = 0;
var vy = 0;
var ax = 0;
var ay = 0;
var level = 1;
var player;
var enemy;
var canvasForeground = document.getElementById('canvasForeground');
var canvasBackground = document.getElementById('canvasBackground');
var player2Img = document.getElementById('player2');
var contextForeground = canvasForeground.getContext('2d');
var contextBackground = canvasBackground.getContext('2d');
var scalePercentageX = window.innerWidth / 1600;
var scalePercentageY = window.innerHeight / 900;
var currentPlayer = 'player' + Math.round(Math.random() * 1000);


var onLoad = function () {

    canvasBackground.width = 1600 * scalePercentageX;
    canvasBackground.height = 900 * scalePercentageY;
    canvasForeground.width = 1600 * scalePercentageX;
    canvasForeground.height = 900 * scalePercentageY;

    selectLevel(level);//function is in selectLevel.js

    var twoPlayersHaveConnected = function (co) {
        console.log(co);
        // init
        player = new Player("player", 30, 30, 50, 50);
        //test
        var areaAction = new ActionArea(player2Img, 50, 300, 50, 50, "slow");
        areaAction.resizeDraw();
        //test
        startEnemy();

        keyListener();


        //setTimeout( function () { initMap(canvasBackground); }, 100);	

        (function drawFrame() {

            window.requestAnimationFrame(drawFrame, canvasForeground);

            contextForeground.save()

            contextForeground.clearRect(0, 0,
            canvasForeground.width, canvasForeground.height);

            contextForeground.restore();

            resizeDraw(player2Img, receiveX, receiveY, 30, 30);



            for (var i = 1; i < enemy.length; i++)
                enemy[i].draw();

            player.move();
            areaAction.areaCollision();

        }());

    };

    socket.on('ready', function (co) {
        console.log('aaaaaaaaaa');
        twoPlayersHaveConnected(co)
    });
};









