﻿function ActionArea(img, posX, posY, width, height, actionType) {

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
	 console.log("I'm in");
	 if (!(player.x + player.width < this.x ||
            this.x + this.width < player.x ||
						player.y + player.height < this.y ||
						this.y + this.height  < this.y)){
			console.log("aaaaa");
			this.selectAction();
						
		} 
} 

ActionArea.prototype.selectAction = function (){
	if(this.actionType == "lvl"){
		console.log(level);
		selectLevel(++level);	
	}
	
	if(this.actionType == "slow"){
		vx = 0;
		vy = 0;
		ax = 0
		ay = 0;
	}
		
	
}