function initEnemy3() {
    enemy = new Array;



    return enemy;
}

function initMap3(canvas) {
    var context = canvas.getContext('2d');

    var context = canvas.getContext('2d');
    context.drawImage(document.getElementById("map3"), 0, 0, canvas.width, canvas.height);
    walls[0] = new Wall(-2, 0, 2, 900);
    walls[1] = new Wall(0, -2, 1600, 2);
    walls[2] = new Wall(1602, 0, 2, 900);
    walls[3] = new Wall(0, 902, 1600, 2);

}
function initAreaAction3() {
    areaAction = new Array()
    areaAction[0] = new ActionArea(player2Img, 1590, 670, 2, 50, "lvl");
    for (var i = 0; i < areaAction.length; i++)
        areaAction[i].resizeDraw();
}
