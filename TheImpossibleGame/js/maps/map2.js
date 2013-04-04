function initEnemy2() {
    enemy = new Array;
    enemy[1] = new Enemy("monster6", "square", 40, 40, 440, 5, 80, 80);
    enemy[2] = new Enemy("monster2", "horizontal", 1480, 780 , -1080, 2.5, 80, 80);

    enemy[3] = new Enemy("monster5", "vertical", 660, 40, 780, 5, 60, 60);
    enemy[4] = new Enemy("monster1", "vertical", 760, 40, 800, 5, 40, 40);
    enemy[5] = new Enemy("monster5", "vertical", 860, 40, 780, 5, 60, 60);
    
    enemy[6] = new Enemy("monster1", "vertical", 1100, 240, 100, 1, 60, 60);
    enemy[7] = new Enemy("monster2", "horizontal", 1480, 680, -1080, 2.5, 80, 80);
    enemy[8] = new Enemy("monster2", "horizontal", 1480, 580, -1080, 2.5, 80, 80);
    return enemy;
}

function initMap2(canvas) {
    var context = canvas.getContext('2d');
    context.drawImage(document.getElementById("map2"), 0, 0, canvas.width, canvas.height);

    //context.drawImage(document.getElementById("map"), 100, 100, 200, 200);
    //context.drawImage(document.getElementById("map"), 700, 900, 200, -200);
    
    walls[0] = new Wall(0, 0, 20, 900);
    walls[1] = new Wall(0, 0, 1600, 20);
    walls[2] = new Wall(1580, 0, 20, 900);
    walls[3] = new Wall(0, 880, 1600, 20);
    walls[4] = new Wall(125, 133, 303, 78);
    walls[5] = new Wall(1040, 123, 310, 84);
    walls[6] = new Wall(962, 557, 77, 85);
    walls[7] = new Wall(1077, 663, 235, 104);
    walls[8] = new Wall(1352, 408, 114, 170);
    walls[9] = new Wall(1180, 435, 51, 109);
    walls[10] = new Wall(590, 25, 15, 437);
    walls[11] = new Wall(921, 445, 15, 437);

    for (i = 0; i < walls.length; i++)
        rectangle(context,walls[i].x, walls[i].y, walls[i].width, walls[i].height);
}



