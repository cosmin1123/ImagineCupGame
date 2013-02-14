function ActionArea(img, posX, posY, width, height, actionType) {

		this.img = img;
    this.x = posX;
    this.y = posY;
    this.width = width;
    this.height = height;
    this.actionType = actionType;
}

ActionArea.prototype.resizeDraw = function () {
	resizeDrawWall(this.img, this.x, this.y, this.width, this.height)
}

ActionArea.prototype.areaCollision = function (){

	 if (!(player.x + player.width < this.x ||
     this.x + this.width < player.x ||
     player.y + player.height < this.y ||
     this.y + this.height < player.y)) {
			this.selectAction();
						
		} 
} 

ActionArea.prototype.selectAction = function (){
	if(this.actionType == "lvl"){
		selectLevel(++level);	
	}
	
	if(this.actionType == "slow"){
	    if (player.isRight == true) 
	        player.x -= 3;
	    if (player.isLeft == true)
	        player.x += 3;
	    if (player.isUp == true)
	        player.y += 3;
	    if (player.isDown == true)
	        player.y -= 3;



	}
		
	
}
