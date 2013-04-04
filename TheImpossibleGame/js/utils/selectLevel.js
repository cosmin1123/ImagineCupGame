
var selectLevel = function (level) {
    contextForeground.clearRect(0, 0,
  canvasForeground.width, canvasForeground.height);

    contextBackground.clearRect(0, 0,
    canvasBackground.width, canvasBackground.height);
    console.log(level);

    if (level == 0) {

        player = new Player("player", 30, 30, 50, 450, currentPlayer);
        player2 = new Player("player2", 30, 30, 50, 450, null);
        initAreaActionSpecial();
        setTimeout(function () { initMapSpecial(canvasBackground); }, 200);
        enemy = initEnemySpecial();
    }

    if (level == 1) {

        player.x = 50;
        player.y = 450
        player2 = new Player("player2", 80, 80, 50, 450, null);
        initAreaAction1();
        setTimeout(function () { initMap1(canvasBackground); }, 200);
        enemy = initEnemy1();
    }

    if (level == 2) {
        player.x = 50;
        player.y = 674
        initAreaAction2();
        player2 = new Player("player2", 80, 80, 50, 50, null);
        setTimeout(function () { initMap2(canvasBackground); }, 200);
        enemy = initEnemy2();
    }

    if (level == 3) {
        player.x = 80;
        player.y = 80;
        player2 = new Player("player2", 30, 30, 50, 50, null);
        setTimeout(function () { initMap3(canvasBackground); }, 100);
        enemy = initEnemy3();
        initAreaAction3();
    }

    if (level == 4) {
        player.x = 80;
        player.y = 80;
        player2 = new Player("player2", 30, 30, 50, 50, null);
        setTimeout(function () { initMap4(canvasBackground); }, 100);
        enemy = initEnemy4();
        initAreaAction4();
    }

}

