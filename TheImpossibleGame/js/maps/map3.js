function initEnemy3() {
    enemy = new Array;
    enemy[1] = new Enemy("monster5", "square", 150, 135, 455, 5, 80, 80);
    //Pack of 3
    enemy[2] = new Enemy("monster2", "vertical", 450, 420, -300, 5, 40, 40);
    enemy[3] = new Enemy("monster2", "vertical", 500, 420, -300, 5, 40, 40);
    enemy[4] = new Enemy("monster2", "vertical", 550, 420, -300, 5, 40, 40);
    //Pack of 3
    enemy[5] = new Enemy("monster2", "horizontal", 700, 220, -340, 5, 40, 40);
    enemy[6] = new Enemy("monster2", "horizontal", 700, 270, -340, 5, 40, 40);
    enemy[7] = new Enemy("monster2", "horizontal", 700, 320, -340, 5, 40, 40);
    //Triplets
    enemy[8] = new Enemy("monster4", "vertical", 110, 820, -700, 10, 60, 60);
    enemy[9] = new Enemy("monster4", "vertical", 110, 820, -700, 10, 60, 60);
    enemy[10] = new Enemy("monster4", "vertical", 110, 820, -700, 10, 60, 60);

    enemy[11] = new Enemy("monster4", "sinus", 810, 555, 210, 1, 40, 40);

    enemy[12] = new Enemy("monster6", "vertical", 420, 770, 1, 0.0000000000001, 100, 100);
    enemy[13] = new Enemy("monster5", "square", 940, 25, 455, 5, 70, 70);
    enemy[14] = new Enemy("monster2", "square", 1010, 95, 385, 5, 70, 70);
    enemy[15] = new Enemy("monster3", "horizontal", 1200, 575, -10, 0.000000000001, 100, 250);
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

    walls[i++] = new Wall(242, 22, 500, 88);
    walls[i++] = new Wall(742, 14, 90, 472);

    //table
    walls[i++] = new Wall(1042, 182, 288, 28);
    walls[i++] = new Wall(1042, 354, 288, 28);
    walls[i++] = new Wall(1022, 222, 348, 120);
    //kitchen  \_/
    walls[i++] = new Wall(250, 238, 84, 285);
    walls[i++] = new Wall(406, 462, 188, 70);
    //the hard part
    walls[i++] = new Wall(338, 416, 20, 82);
    walls[i++] = new Wall(362, 394, 24, 84);

     for (i = 0; i < walls.length; i++)
         rectangle(context,walls[i].x, walls[i].y, walls[i].width, walls[i].height);

}
function initAreaAction3() {
    areaAction = new Array()
    areaAction[0] = new ActionArea(-40, 55, 4, 180, "lvl", 2);
    areaAction[1] = new ActionArea(1640, 30, 4, 180, "lvl", 4);
}
