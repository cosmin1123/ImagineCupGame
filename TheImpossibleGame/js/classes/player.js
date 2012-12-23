function Player (id,width, height,posX,posY) {
  this.img = document.getElementById(id);
  this.x = posX;
  this.y = posY;
  this.width = width;
  this.height = height;
  this.startX = posX;
  this.startY = posY;
  
}

Player.prototype.move = function () {
	
	 resizeClear(this.x, this.y, this.width, this.height);
 
    
    this.XBefore = this.x;
    this.YBefore = this.y;
    if (isRight == true)
        this.x += 4;
    if (isLeft == true)
        this.x -= 4;
    if (isUp == true)
        this.y -= 4;
    if (isDown == true)
        this.y += 4;
        
	 if(isRight || isLeft || isUp || isDown)
	 	sendingCoords();
    
    wall_collission();
 	 context.save();
 	 resizeDraw(this.img, this.x, this.y, this.width, this.height);

    context.restore();

}

wall_collission = function(){
	
	for( var i = 0; i < index; i++)	
         if (!(player.x + player.width < walls[i].x ||
            walls[i].x + walls[i].width < player.x ||
			player.y + player.height < walls[i].y ||
			walls[i].y + walls[i].height  < player.y)) {
 			 			player.x = player.XBefore;
            		    player.y = player.YBefore;
       }
}
