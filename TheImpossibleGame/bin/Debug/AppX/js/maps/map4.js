function initEnemy4() {
    enemy = new Array;
    enemy[1] = new Enemy("monster1", "vertical", 70, 420, -300, 2, 100, 100);
    enemy[2] = new Enemy("monster1", "vertical", 270, 320, -300, 2, 100, 100);
    enemy[3] = new Enemy("monster5", "horizontal", 30, 440, 900, 10, 200, 200);
    enemy[4] = new Enemy("monster5", "horizontal", 240, 660, 440, 5, 30, 30);
    enemy[5] = new Enemy("monster5", "horizontal", 240, 690, 440, 5, 30, 30);
    enemy[6] = new Enemy("monster5", "horizontal", 240, 720, 440, 5, 30, 30);
    enemy[7] = new Enemy("monster5", "horizontal", 1000, 390, 440, 5, 30, 30);
    enemy[8] = new Enemy("monster5", "horizontal", 1000, 420, 440, 5, 30, 30);
    enemy[9] = new Enemy("monster5", "horizontal", 840, 680, 320, 1, 30, 30);
    enemy[10] = new Enemy("monster5", "horizontal", 840, 720, 320, 2, 30, 30);
    return enemy;
}

function initMap4(canvas) {
    var context = canvas.getContext('2d');
    context.drawImage(document.getElementById("map4"), 0, 0, canvas.width, canvas.height);
    walls = new Array();
    //context.drawImage(document.getElementById("map"), 100, 100, 200, 200);
    //context.drawImage(document.getElementById("map"), 700, 900, 200, -200);
    //border walls
    walls[18] = new Wall(0, 0, 20, 42);
    walls[0] = new Wall(0, 240, 20, 900);
    walls[1] = new Wall(0, 0, 1600, 20);
    walls[2] = new Wall(1580, 0, 20, 900);
    walls[3] = new Wall(0, 880, 1600, 20);
    //bed
    walls[4] = new Wall(1200, 475, 370, 270);
    walls[5] = new Wall(1493, 372, 60, 95);
    //bathroom walls
    walls[6] = new Wall(234, 20, 18, 260);
    walls[7] = new Wall(980, 20, 18, 420);
    walls[8] = new Wall(234, 425, 760, 15);
    //bathroom stuff
    walls[9] = new Wall(410, 20, 125, 80);
    walls[10] = new Wall(667, 20, 160, 40);
    walls[11] = new Wall(870, 180, 110, 260);
    walls[12] = new Wall(492, 320, 75, 105);
    //desk
    walls[13] = new Wall(592, 760, 268, 120);
    walls[14] = new Wall(720, 647, 115, 105);
    //chair
    walls[15] = new Wall(40, 727, 135, 125);
    walls[16] = new Wall(163, 660, 65, 105);
    walls[17] = new Wall(190, 790, 60, 105);
    context.drawImage(document.getElementById("portal"), canvas.width * 0.92, canvas.height * 0.06, canvas.height/8, canvas.width/8);

}

function initAreaAction4() {
    areaAction = new Array()
    areaAction[0] = new ActionArea(-40, 25, 4, 180, "lvl", 3);
    areaAction[1] = new ActionArea(1510, 120, 20, 140, "win");
}