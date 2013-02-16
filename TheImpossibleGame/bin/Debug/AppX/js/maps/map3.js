function initEnemy3() {
    enemy = new Array;



    return enemy;
}

function initMap3(canvas) {
    var context = canvas.getContext('2d');
    context.drawImage(document.getElementById("map3"), 0, 0, canvas.width, canvas.height);
    var i = 0;
    walls[i++] = new Wall(-2, 0, 2, 900);
    walls[i++] = new Wall(0, -2, 1600, 2);
    walls[i++] = new Wall(1602, 0, 2, 900);
    walls[i++] = new Wall(0, 902, 1600, 2);

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
    walls[i++] = new Wall(250, 238, 84, 278);
    walls[i++] = new Wall(406, 462, 188, 60);
    //the hard part
    walls[i++] = new Wall(338, 416, 20, 92);
    walls[i++] = new Wall(362, 394, 24, 94);
   


}
function initAreaAction3() {
    areaAction = new Array()
    areaAction[0] = new ActionArea(1590, 670, 2, 50, "lvl");
}
