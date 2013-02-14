function Bullet(id, height, width, cooldown) {
 	this.x = 0;
 	this.y = 0;
  this.img = document.getElementById(id);
	this.height = height;
	this.width = width;
	this.fired = false;
	this.firedTime = 0;
	this.cooldown = cooldown;
	this.speedX = 0;
	this.speedY = 0;
}

Bullet.prototype.testFired = function () {

	if(isFired && this.cooldownEnded()){

		this.fired = true;
		this.startBulletCooldown();
		this.x = player.x;
		this.y = player.y;
	}
		
	if(this.fired == true)
		this.fire();
	
}

Bullet.prototype.startBulletCooldown = function () {
	var d= new Date();
	this.firedTime = d.getTime();
}

Bullet.prototype.cooldownEnded = function () {
	var d = new Date();
	var currentTime = d.getTime()
	if(this.cooldown < (currentTime - this.firedTime))
		return true;
	
}
Bullet.prototype.fire = function () {
/*
	if (isRight == true) 
		this.x += 8;
	if (isLeft == true)
		this.x -= 8;
	if (isUp == true)
		this.y -= 8;
	if (isDown == true)
		this.y += 8;
	*/
	this.resizeDraw();

	if(this.speedX == 0 && this.speedY == 0){
		if(player.direction.indexOf("N")  !== -1)
			this.speedY = -8;
		if(player.direction.indexOf("S")  !== -1)
			this.speedY = 8;
		if(player.direction.indexOf("V")  !== -1)
			this.speedX = -8;
		if(player.direction.indexOf("E")  !== -1)
			this.speedX = 8;
	}

	this.x += this.speedX;
	this.y += this.speedY;
	wallCollision(this, "bullet");
	
}

Bullet.prototype.resizeDraw = function () {

	contextForeground.drawImage(this.img, Math.round(scalePercentageX * this.x),    
   Math.round(scalePercentageY * this.y),
   Math.round(scalePercentageX * this.width),
   Math.round(scalePercentageY * this.height));
}

