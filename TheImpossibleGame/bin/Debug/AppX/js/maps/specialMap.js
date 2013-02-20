function initEnemySpecial() {
    enemy = new Array;


    enemy[1] = new Enemy("obstacle", "vertical", 140, 360, 120, 2, 20, 20);
    enemy[2] = new Enemy("obstacle", "vertical", 180, 480, -120, 2, 20, 20);
    enemy[3] = new Enemy("obstacle", "vertical", 220, 360, 120, 2, 20, 20);
    enemy[4] = new Enemy("obstacle", "vertical", 260, 480, -120, 2, 20, 20);
    enemy[5] = new Enemy("obstacle", "vertical", 300, 360, 120, 2, 20, 20);
    enemy[6] = new Enemy("obstacle", "vertical", 340, 480, -120, 2, 20, 20);
    enemy[7] = new Enemy("obstacle", "vertical", 380, 360, 120, 2, 20, 20);
    enemy[8] = new Enemy("obstacle", "vertical", 420, 480, -120, 2, 20, 20);
    enemy[9] = new Enemy("obstacle", "vertical", 460, 360, 120, 2, 20, 20);
    enemy[10] = new Enemy("obstacle", "vertical", 500, 480, -120, 2, 20, 20);

    enemy[11] = new Enemy("obstacle", "square", 590, 360, 120, 2, 20, 20);
    enemy[12] = new Enemy("obstacle", "square", 610, 360, 100, 2, 20, 20);
    enemy[13] = new Enemy("obstacle", "square", 630, 360, 80, 2, 20, 20);
    enemy[14] = new Enemy("obstacle", "square", 650, 360, 60, 2, 20, 20);

    enemy[15] = new Enemy("obstacle", "horizontal", 180, 250, 620, 5, 20, 20);
    enemy[16] = new Enemy("obstacle", "horizontal", 180, 320, 620, 5, 20, 20);
    enemy[17] = new Enemy("obstacle", "horizontal", 800, 285, -620, 5, 20, 20);
    enemy[18] = new Enemy("obstacle", "horizontal", 180, 520, 620, 5, 20, 20);
    enemy[19] = new Enemy("obstacle", "horizontal", 180, 600, 620, 5, 20, 20);
    enemy[20] = new Enemy("obstacle", "horizontal", 800, 565, -620, 5, 20, 20);


    enemy[21] = new Enemy("obstacle", "diagonal", 390, 210, -190, 2, 20, 20);
    enemy[22] = new Enemy("obstacle", "diagonal", 200, 20, 190, 2, 20, 20);
    enemy[23] = new Enemy("obstacle", "diagonal", 430, 210, -190, 2.5, 20, 20);
    enemy[24] = new Enemy("obstacle", "diagonal", 240, 20, 190, 2.5, 20, 20);

    enemy[25] = new Enemy("obstacle", "sinus", 180, 750, 210, 1, 20, 20);

    enemy[26] = new Enemy("obstacle", "vertical", 440, 860, -220, 2, 20, 20);

    enemy[27] = new Enemy("obstacle", "square", 520, 640, 80, 2, 20, 20);
    enemy[28] = new Enemy("obstacle", "vertical", 500, 860, -220, 0.5, 20, 20);
    enemy[29] = new Enemy("obstacle", "vertical", 550, 860, -220, 0.5, 20, 20);
    enemy[30] = new Enemy("obstacle", "vertical", 575, 860, -220, 0.5, 20, 20);
    enemy[31] = new Enemy("obstacle", "vertical", 600, 860, -220, 0.5, 20, 20);

    enemy[32] = new Enemy("obstacle", "horizontal", 740, 750, 560, 5, 20, 20);
    enemy[33] = new Enemy("obstacle", "horizontal", 740, 720, 560, 2, 20, 20);
    enemy[34] = new Enemy("obstacle", "horizontal", 740, 690, 560, 5, 20, 20);

    enemy[35] = new Enemy("obstacle", "vertical", 740, 20, 180, 5, 20, 20);
    enemy[36] = new Enemy("obstacle", "vertical", 740, 100, 100, 5, 20, 20);
    enemy[37] = new Enemy("obstacle", "vertical", 640, 20, 180, 5, 20, 20);
    enemy[38] = new Enemy("obstacle", "vertical", 640, 100, 100, 5, 20, 20);
    enemy[39] = new Enemy("obstacle", "vertical", 540, 20, 180, 5, 20, 20);
    enemy[40] = new Enemy("obstacle", "vertical", 540, 100, 100, 5, 20, 20);

    enemy[41] = new Enemy("obstacle", "horizontal", 860, 200, 700, 5, 20, 20);
    enemy[42] = new Enemy("obstacle", "horizontal", 860, 250, 700, 10, 20, 20);
    enemy[43] = new Enemy("obstacle", "horizontal", 860, 300, 700, 2, 20, 20);
    enemy[44] = new Enemy("obstacle", "horizontal", 860, 350, 700, 2, 20, 20);
    enemy[45] = new Enemy("obstacle", "horizontal", 860, 400, 700, 10, 20, 20);
    enemy[46] = new Enemy("obstacle", "horizontal", 860, 450, 700, 5, 20, 20);

    enemy[47] = new Enemy("obstacle", "diagonal", 860, 200, 400, 5, 20, 20);
    enemy[48] = new Enemy("obstacle", "diagonal", 1160, 200, 400, 5, 20, 20);

    enemy[49] = new Enemy("obstacle", "horizontal", 1220, 640, 320, 10, 20, 20);
    enemy[50] = new Enemy("obstacle", "horizontal", 1560, 660, -340, 10, 20, 20);

    return enemy;
}


function initMapSpecial(canvas) {
    var context = canvas.getContext('2d');
		walls = new Array();
    context.drawImage(document.getElementById("cake"), Math.round(scalePercentageX * 1520),
     Math.round(scalePercentageY * 820),
     Math.round(scalePercentageX * 50),
     Math.round(scalePercentageY * 50));

    //border walls
    wallHorizontal(context, 0, 0, 1600, 20);
    wallVertical(context, 0, 0, 900, 20);
    wallHorizontal(context, 0, 880, 1600, 20);
    wallVertical(context, 1580, 0, 880, 20);

    //map walls
    wallVertical(context, 100, 0, 380, 20);
    wallVertical(context, 100, 460, 880, 20);
    wallHorizontal(context, 120, 340, 700, 20);
    wallHorizontal(context, 120, 500, 700, 20);
    wallVertical(context, 840, 160, 660, 20);
    wallHorizontal(context, 180, 230, 820, 20);
    wallHorizontal(context, 180, 620, 820, 20);

    wallVertical(context, 412, 640, 830, 20);
    wallVertical(context, 160, 690, 880, 20);
    wallVertical(context, 470, 740, 880, 20);
    wallVertical(context, 520, 740, 880, 20);
    wallVertical(context, 630, 680, 880, 20);

    wallVertical(context, 740, 780, 880, 20);
    wallVertical(context, 830, 780, 880, 20);
    wallVertical(context, 920, 780, 880, 20);
    wallVertical(context, 1010, 780, 880, 20);

    wallVertical(context, 1030, 780, 880, 20);
    wallVertical(context, 1120, 780, 880, 20);
    wallVertical(context, 1210, 780, 880, 20);
    wallVertical(context, 1300, 780, 880, 20);

    wallHorizontal(context, 830, 780, 920, 20);
    wallHorizontal(context, 1120, 780, 1210, 20);
    wallHorizontal(context, 740, 660, 1200, 20);

    wallVertical(context, 380, 20, 100, 20);

    wallHorizontal(context, 100, 700, 100, 20);

}
function initAreaActionSpecial(){
	areaAction = new Array()
	/*areaAction[0] = new ActionArea(player2Img, 50, 300, 50, 50, "lvl");
	areaAction[1] = new ActionArea(player2Img, 50, 250, 50, 50, "slow");
  for(var i = 0; i < areaAction.length; i++)
		areaAction[i].resizeDraw();*/
}
