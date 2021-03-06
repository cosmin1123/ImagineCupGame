﻿var unpauseGame = function () { };
player = new Player("player", 80, 80, 50, 450, currentPlayer);
var singlePlayerMode = function () {

    canvasBackground.width = 1600 * scalePercentageX;
    canvasBackground.height = 900 * scalePercentageY;
    canvasForeground.width = 1600 * scalePercentageX;
    canvasForeground.height = 900 * scalePercentageY;

    selectLevel(level);//function is in selectLevel.js
    initStartBar();
    createStatusBar();
    //   var twoPlayersHaveConnected = function (co) {
    // init
    startEnemy();

    unpauseGame = function () {
        window.onkeydown = function () { };
        window.onkeyup = function () { };

        keyListener();

        (function drawFrame() {
            if (!gamePaused) {
                if (level != levelChanged) {
                    gamePaused = true;
                    selectLevel(level);
                    levelChanged = level;
                }

                window.requestAnimationFrame(drawFrame, canvasForeground);

                contextForeground.save()

                if (player.life == 0) {
                    showLose();
                    gamePaused = true;
                }
                contextForeground.clearRect(0, 0,
                canvasForeground.width, canvasForeground.height);

                contextForeground.restore();

                for (var i = 0; i < bullets.length; i++)
                    bullets[i].testFired();

                for (var i = 1; i < enemy.length; i++) {
                    enemy[i].draw();
                }
                player.move();
                for (var i = 0; i < areaAction.length; i++)
                    areaAction[i].areaCollision();

                createStatusBar();
            }
        }());
    }
    unpauseGame();
};