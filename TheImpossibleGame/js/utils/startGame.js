"use strict";

var level = 1;
var player;
var player2;
var enemy;
 var areaAction = new Array();
var bullet = new Bullet("obstacle", 30, 30, 1000);//the time is in ms
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
    		gameStarted = true;
        // init
        player = new Player("player", 30, 30, 50, 50, currentPlayer);
        startEnemy();

        keyListener();


        //setTimeout( function () { initMap(canvasBackground); }, 100);	

        (function drawFrame() {

            window.requestAnimationFrame(drawFrame, canvasForeground);

            contextForeground.save()


            contextForeground.clearRect(0, 0,
            canvasForeground.width, canvasForeground.height);

            contextForeground.restore();


						bullet.testFired();

            for (var i = 1; i < enemy.length; i++)
                enemy[i].draw();

            player.move();
            player2.move();
            for(var i = 0; i < areaAction.length; i++)
            	areaAction[i].areaCollision();

        }());

    };

    socket.on('ready', function (co) {
        console.log('aaaaaaaaaa');
        twoPlayersHaveConnected(co)
    });
};


