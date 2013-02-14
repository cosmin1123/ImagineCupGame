var selectLevel = function (level) {
    contextForeground.clearRect(0, 0, canvasForeground.width, canvasForeground.height);
    contextBackground.clearRect(0, 0, canvasBackground.width, canvasBackground.height);

    if (level == 1) {
        initMap1(canvasBackground);
        enemy = initEnemy1();
    }

    if (level == 2) {
        initMap2(canvasBackground);
    }

}