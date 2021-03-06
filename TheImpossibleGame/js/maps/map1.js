function initEnemy1() {
    enemy = new Array;
    enemy[1] = new Enemy("monster1", "horizontal", 300, 530, 600, 5, 80, 80);
    enemy[2] = new Enemy("monster1", "vertical", 900, 250, 580, 5, 80, 80);
    enemy[3] = new Enemy("monster1", "diagonal", 900, 250, 580, 5, 80, 80);
    enemy[4] = new Enemy("monster1", "square", 400, 20, 330, 5, 80, 80);
    enemy[5] = new Enemy("monster1", "horizontal", 400, 680, 760, 5, 60, 60);
    enemy[6] = new Enemy("monster1", "horizontal", 1160, 760, -760, 5, 60, 60);
    enemy[7] = new Enemy("monster1", "horizontal", 400, 840, 760, 5, 60, 60);
    enemy[8] = new Enemy("monster1", "vertical", 1420, 20, 800, 5, 60, 60);
    enemy[9] = new Enemy("monster1", "vertical", 1420, 20, 800, 5, 60, 60);

    return enemy;
}


function initMap1(canvas) {
    var context = canvas.getContext('2d');

    var context = canvas.getContext('2d');
    context.drawImage(document.getElementById("map"), 0, 0, canvas.width, canvas.height);
    walls[0] = new Wall(-2, 0, 2, 900);
    walls[1] = new Wall(0, -2, 1600, 2);
    walls[2] = new Wall(1602, 0, 2, 600);
    walls[3] = new Wall(0, 902, 1600, 2);

    walls[4] = new Wall(115, 50, 170, 330);//the car
    walls[5] = new Wall(335, 0, 30, 450);
    walls[6] = new Wall(320, 480, 345, 30);
    walls[7] = new Wall(810, 310, 40, 192);
    walls[8] = new Wall(330, 640, 48, 250);
    walls[9] = new Wall(520, 630, 335, 30);
    walls[10] = new Wall(810, 315, 44, 195);
    walls[11] = new Wall(875, 200, 520, 20);
    walls[12] = new Wall(1090, 334, 250, 25);
    walls[13] = new Wall(1345, 335, 35, 600);
    walls[14] = new Wall(1522, 330, 40, 170);
    walls[15] = new Wall(1565, 502, 30, 147);
    walls[16] = new Wall(1566, 760, 24, 140);
    walls[17] = new Wall(1005, 375, 40, 240);

}

function initAreaAction1() {
    areaAction = new Array()
    areaAction[0] = new ActionArea(1640, 670, 2, 50, "lvl");
}
