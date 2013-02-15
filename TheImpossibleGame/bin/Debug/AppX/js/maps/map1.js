function initEnemy1() {
    enemy = new Array;


  
    return enemy;
}


function initMap1(canvas) {
    var context = canvas.getContext('2d');

    var context = canvas.getContext('2d');
    context.drawImage(document.getElementById("map"), 0, 0, canvas.width, canvas.height);
    walls[0] = new Wall(-2, 0, 2, 900);
    walls[1] = new Wall(0, -2, 1600, 2);
    walls[2] = new Wall(1602, 0, 2, 900);
    walls[3] = new Wall(0, 902, 1600, 2);

    walls[4] = new Wall(115, 50, 170, 330);//the care
    walls[5] = new Wall(335, 0, 30, 450);
    walls[6] = new Wall(335, 500, 310, 8);
}
function initAreaAction1(){
	areaAction = new Array()
	areaAction[0] = new ActionArea(player2Img, 50, 300, 50, 50, "lvl");
	areaAction[1] = new ActionArea(player2Img, 50, 250, 50, 50, "slow");
  for(var i = 0; i < areaAction.length; i++)
		areaAction[i].resizeDraw();
}
