function initEnemy3() {
    enemy = new Array;



    return enemy;
}

function initMap3(canvas) {
    var context = canvas.getContext('2d');
    context.drawImage(document.getElementById("map3"), 0, 0, canvas.width, canvas.height);
    var i = 0;
    walls[i++] = new Wall(0, 0, 18, 34);
    walls[i++] = new Wall(0, 235, 18, 700);
    walls[i++] = new Wall(0, 0, 1600, 18);
    walls[i++] = new Wall(1582, 0, 18, 30);
    walls[i++] = new Wall(1582, 230, 18, 1400);
    walls[i++] = new Wall(0, 880, 1600, 18);

    walls[i++] = new Wall(294, 695, 63, 175);
    walls[i++] = new Wall(582, 678, 108, 92);
    walls[i++] = new Wall(562, 768, 480, 100);
    walls[i++] = new Wall(918, 678, 124, 76);

    walls[i++] = new Wall(1210, 742, 218, 46);

    walls[i++] = new Wall(242, 22, 500, 78);
    walls[i++] = new Wall(742, 14, 90, 472);

    //table
    walls[i++] = new Wall(1042, 182, 288, 28);
    walls[i++] = new Wall(1042, 354, 288, 28);
    walls[i++] = new Wall(1022, 222, 348, 120);
    //kitchen  \_/
    walls[i++] = new Wall(250, 238, 84, 258);
    walls[i++] = new Wall(406, 462, 188, 60);
    //the hard part
    walls[i++] = new Wall(338, 416, 20, 82);
    walls[i++] = new Wall(362, 394, 24, 84);



}
function initAreaAction3() {
    areaAction = new Array()
    areaAction[0] = new ActionArea(-40, 55, 4, 180, "lvl", 2);
    areaAction[1] = new ActionArea(1640, 30, 4, 180, "lvl", 4);
}
