function init_enemy() {
    enemy = new Array;
    // Chestie draguta de vazut
    //enemy[25] = new Enemy("obstacle", "vertical", 100, 100, 300, 2, 20, 20);
    //enemy[26] = new Enemy("obstacle", "vertical", 100, 300, 100, 2, 20, 20);

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

    enemy[11] = new Enemy("obstacle", "square", 560, 360, 120, 2, 20, 20);
    enemy[12] = new Enemy("obstacle", "square", 580, 360, 100, 2, 20, 20);
    enemy[13] = new Enemy("obstacle", "square", 600, 360, 80, 2, 20, 20);
    enemy[14] = new Enemy("obstacle", "square", 620, 360, 60, 2, 20, 20);

    enemy[15] = new Enemy("obstacle", "horizontal", 180, 270, 620, 5, 20, 20);
    enemy[16] = new Enemy("obstacle", "horizontal", 180, 320, 620, 5, 20, 20);
    enemy[17] = new Enemy("obstacle", "horizontal", 800, 300, -620, 5, 20, 20);
    enemy[18] = new Enemy("obstacle", "horizontal", 180, 520, 620, 5, 20, 20);
    enemy[19] = new Enemy("obstacle", "horizontal", 180, 580, 620, 5, 20, 20);
    enemy[20] = new Enemy("obstacle", "horizontal", 800, 550, -620, 5, 20, 20);


    enemy[21] = new Enemy("obstacle", "diagonal", 390, 230, -210, 5, 20, 20);
    enemy[22] = new Enemy("obstacle", "diagonal", 200, 20, 210, 10, 20, 20);
    enemy[23] = new Enemy("obstacle", "diagonal", 430, 230, -210, 10, 20, 20);
    enemy[24] = new Enemy("obstacle", "diagonal", 240, 20, 210, 5, 20, 20);

    //  enemy[1] = new Enemy("obstacle", "sinus", 400, 200, 210, 2,20,20);
    return enemy;
}
function init_map(canvas) {
    var context = canvas.getContext('2d');

    //border walls
    wall_horizontal(context, 0, 0, 1600, 20); 
    wall_vertical(context, 0, 0, 900, 20);
    wall_horizontal(context, 0, 880, 1600, 20);
    wall_vertical(context, 1580, 0, 880, 20);

    //map walls
    wall_vertical(context, 100, 0, 380, 20);
    wall_vertical(context, 100, 460, 880, 20);
    wall_horizontal(context, 120, 340, 700, 20);
    wall_horizontal(context, 120, 500, 700, 20);
    wall_vertical(context, 840, 160, 660, 20);
    wall_horizontal(context, 180, 250, 820, 20);
    wall_horizontal(context, 180, 600, 820, 20);
}

function resizeDraw(img, x, y, width, height){
	context.drawImage(img, Math.round(scalePercentageX * x), 		             
   Math.round(scalePercentageY * y),
   Math.round(scalePercentageX * width),
   Math.round(scalePercentageY * height));
}

function resizeClear(x, y, width, height){
    context.clearRect(Math.round(x * scalePercentageX), 
    Math.round(scalePercentageY * y),
    Math.round(scalePercentageX * width),
    Math.round(scalePercentageY *  height)); 
}

function resizeDrawWall(img, x, y, width, height){
  	context.drawImage(img, scalePercentageX * x, 		             
  	scalePercentageY * y, scalePercentageX * width,
   scalePercentageY * height);
}
