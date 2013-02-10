var obj = require('./enemy.js');

exports.init = function () {
		
		enemy = new Array;
		
    enemy[1] = new obj.Enemy("vertical", 140, 360, 120, 2, 20, 20);
    enemy[2] = new obj.Enemy("vertical", 180, 480, -120, 2, 20, 20);
    enemy[3] = new obj.Enemy("vertical", 220, 360, 120, 2, 20, 20);
    enemy[4] = new obj.Enemy("vertical", 260, 480, -120, 2, 20, 20);
    enemy[5] = new obj.Enemy("vertical", 300, 360, 120, 2, 20, 20);
    enemy[6] = new obj.Enemy("vertical", 340, 480, -120, 2, 20, 20);
    enemy[7] = new obj.Enemy("vertical", 380, 360, 120, 2, 20, 20);
    enemy[8] = new obj.Enemy("vertical", 420, 480, -120, 2, 20, 20);
    enemy[9] = new obj.Enemy("vertical", 460, 360, 120, 2, 20, 20);
    enemy[10] = new obj.Enemy("vertical", 500, 480, -120, 2, 20, 20);

    enemy[11] = new obj.Enemy("square", 590, 360, 120, 2, 20, 20);
    enemy[12] = new obj.Enemy("square", 610, 360, 100, 2, 20, 20);
    enemy[13] = new obj.Enemy("square", 630, 360, 80, 2, 20, 20);
    enemy[14] = new obj.Enemy("square", 650, 360, 60, 2, 20, 20);

    enemy[15] = new obj.Enemy("horizontal", 180, 250, 620, 5, 20, 20);
    enemy[16] = new obj.Enemy("horizontal", 180, 320, 620, 5, 20, 20);
    enemy[17] = new obj.Enemy("horizontal", 800, 285, -620, 5, 20, 20);
    enemy[18] = new obj.Enemy("horizontal", 180, 520, 620, 5, 20, 20);
    enemy[19] = new obj.Enemy("horizontal", 180, 600, 620, 5, 20, 20);
    enemy[20] = new obj.Enemy("horizontal", 800, 565, -620, 5, 20, 20);


    enemy[21] = new obj.Enemy("diagonal", 390, 210, -190, 2, 20, 20);
    enemy[22] = new obj.Enemy("diagonal", 200, 20, 190, 2, 20, 20);
    enemy[23] = new obj.Enemy("diagonal", 430, 210, -190, 2.5, 20, 20);
    enemy[24] = new obj.Enemy("diagonal", 240, 20, 190, 2.5, 20, 20);

    enemy[25] = new obj.Enemy("sinus", 180, 750, 210, 1, 20, 20);

    enemy[26] = new obj.Enemy("vertical", 440, 860, -220, 2, 20, 20);

    enemy[27] = new obj.Enemy("square", 520, 640, 80, 2, 20, 20);
    enemy[28] = new obj.Enemy("vertical", 500, 860, -220, 0.5, 20, 20);
    enemy[29] = new obj.Enemy("vertical", 550, 860, -220, 0.5, 20, 20);
    enemy[30] = new obj.Enemy("vertical", 575, 860, -220, 0.5, 20, 20);
    enemy[31] = new obj.Enemy("vertical", 600, 860, -220, 0.5, 20, 20);

    enemy[32] = new obj.Enemy("horizontal", 740, 750, 560, 5, 20, 20);
    enemy[33] = new obj.Enemy("horizontal", 740, 720, 560, 2, 20, 20);
    enemy[34] = new obj.Enemy("horizontal", 740, 690, 560, 5, 20, 20);

    enemy[35] = new obj.Enemy("vertical", 740, 20, 180, 5, 20, 20);
    enemy[36] = new obj.Enemy("vertical", 740, 100, 100, 5, 20, 20);
    enemy[37] = new obj.Enemy("vertical", 640, 20, 180, 5, 20, 20);
    enemy[38] = new obj.Enemy("vertical", 640, 100, 100, 5, 20, 20);
    enemy[39] = new obj.Enemy("vertical", 540, 20, 180, 5, 20, 20);
    enemy[40] = new obj.Enemy("vertical", 540, 100, 100, 5, 20, 20);

    enemy[41] = new obj.Enemy("horizontal", 860, 200, 700, 5, 20, 20);
    enemy[42] = new obj.Enemy("horizontal", 860, 250, 700, 10, 20, 20);
    enemy[43] = new obj.Enemy("horizontal", 860, 300, 700, 2, 20, 20);
    enemy[44] = new obj.Enemy("horizontal", 860, 350, 700, 2, 20, 20);
    enemy[45] = new obj.Enemy("horizontal", 860, 400, 700, 10, 20, 20);
    enemy[46] = new obj.Enemy("horizontal", 860, 450, 700, 5, 20, 20);

    enemy[47] = new obj.Enemy("diagonal", 860, 200, 400, 5, 20, 20);
    enemy[48] = new obj.Enemy("diagonal", 1160, 200, 400, 5, 20, 20);

    enemy[49] = new obj.Enemy("horizontal", 1220, 640, 320, 10, 20, 20);
    enemy[50] = new obj.Enemy("horizontal", 1560, 660, -340, 10, 20, 20);

    return enemy;
}
