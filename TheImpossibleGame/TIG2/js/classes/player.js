function Player (number,id,width, height,posX,posY) {
  this.img = document.getElementById(id);
  this.x = posX;
  this.y = posY;
  this.width = width;
  this.height = height;
  this.startX = posX;
  this.startY = posY;
  this.number= number;
  
}

Player.prototype.move = function () {
	
	resizeClear(this.x, this.y, this.width, this.height);
    this.XBefore = this.x;
    this.YBefore = this.y;
    if (this.number == 1) {
        if (isRight1 == true)
            this.x += 4;
        if (isLeft1 == true)
            this.x -= 4;
        if (isUp1 == true)
            this.y -= 4;
        if (isDown1 == true)
            this.y += 4;
    }
    if (this.number == 2) {
        if (isRight2 == true)
            this.x += 4;
        if (isLeft2 == true)
            this.x -= 4;
        if (isUp2 == true)
            this.y -= 4;
        if (isDown2 == true)
            this.y += 4;
    }
    wall_collission();
 	context.save();
 	resizeDraw(this.img, this.x, this.y, this.width, this.height);

    context.restore();

}

wall_collission = function(){
	
	for( var i = 0; i < index; i++)	
         if (!(player1.x + player1.width < walls[i].x ||
            walls[i].x + walls[i].width < player1.x ||
			player1.y + player1.height < walls[i].y ||
			walls[i].y + walls[i].height  < player1.y)) {
 			 			player1.x = player1.XBefore;
            		    player1.y = player1.YBefore;
         }
	for (var i = 0; i < index; i++)
	    if (!(player2.x + player2.width < walls[i].x ||
           walls[i].x + walls[i].width < player2.x ||
           player2.y + player2.height < walls[i].y ||
           walls[i].y + walls[i].height < player2.y)) {
	        player2.x = player2.XBefore;
	        player2.y = player2.YBefore;
	    }

}
