"use strict";
var level = 1;
var player;
var player2;
var enemy;
var areaAction = new Array();
var bullets = new Array();
var canvasForeground = document.getElementById('canvasForeground');
var canvasBackground = document.getElementById('canvasBackground');
var player2Img = document.getElementById('player2');
var contextForeground = canvasForeground.getContext('2d');
var contextBackground = canvasBackground.getContext('2d');
var scalePercentageX = window.innerWidth / 1600;
var scalePercentageY = (window.innerHeight - window.innerHeight * 0.03) / 900;
var currentPlayer = 'player' + Math.round(Math.random() * 1000);


var multiplayerMode = function () {
    console.log("aaaaa");
    window.onkeydown = function () { };
    canvasBackground.width = 1600 * scalePercentageX;
    canvasBackground.height = 900 * scalePercentageY;
    canvasForeground.width = 1600 * scalePercentageX;
    canvasForeground.height = 900 * scalePercentageY;

    selectLevel(level);//function is in selectLevel.js
    initStartBar();
    createStatusBar();
    //   var twoPlayersHaveConnected = function (co) {
    gameStarted = true;
    // init
    unpauseGame = function () {

        keyListener();

        (function drawFrame() {
            if (!gamePaused) {
                window.requestAnimationFrame(drawFrame, canvasForeground);

                contextForeground.save()


                contextForeground.clearRect(0, 0,
                canvasForeground.width, canvasForeground.height);

                contextForeground.restore();

                for (var i = 0; i < bullets.length; i++)
                    bullets[i].testFired();

                for (var i = 1; i < enemy.length; i++) {
                    enemy[i].move();//rand de comentat cand pornim server
                    enemy[i].draw();
                }
                player.move();
                player2.move();
                for (var i = 0; i < areaAction.length; i++)
                    areaAction[i].areaCollision();

                createStatusBar();
            }
        }());

    };
    unpauseGame();
}

/*
    socket.on('ready', function (co) {
        console.log('aaaaaaaaaa');
        twoPlayersHaveConnected(co)
    });
<<<<<<< HEAD
=======
    
>>>>>>> 785b23f1ba7340eb2556c5a2e3d67980815299f1
};*/


