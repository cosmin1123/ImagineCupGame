var cooldown = 500;// cooldownTime;
function Bullet(id, height, width) {
    this.x = 0;
    this.y = 0;
    this.img = document.getElementById(id);
    this.height = height;
    this.width = width;
    this.fired = false;
    this.firedTime = 0;
    this.isFired = false;
    this.speedX = 0;
    this.speedY = 0;
    this.direction = player.direction;
}

Bullet.prototype.testFired = function () {

    if (this.isFired && cooldownEnded(this)) {

        this.fired = true;
        this.startBulletCooldown();
        this.x = player.x;
        this.y = player.y;
        this.isFired = false;
    }

    if (this.fired == true)
        this.fire();

}

Bullet.prototype.startBulletCooldown = function () {
    var d = new Date();
    this.firedTime = d.getTime();
}

cooldownEnded = function (object) {
    var d = new Date();
    var currentTime = d.getTime()
    if (bullets.length == 0 || cooldown < (currentTime - object.firedTime))
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

    
    if (this.speedX == 0 && this.speedY == 0) {
        if (player.direction.indexOf("N") !== -1) {
            this.speedY = -8;
            this.x += 6 / 8 * player.height;
            this.y += 6 / 8 * player.width;
            
        }
        if (player.direction.indexOf("S") !== -1) {
            this.speedY = 8;
            this.x += 6 / 8 * player.height;
            this.y += 6 / 8 * player.width;
        }
        if (player.direction.indexOf("V") !== -1) {
            this.speedX = -8;
            this.x += 6 / 8 * player.height;
            this.y += 5 / 8 * player.width;
        }
        if (player.direction.indexOf("E") !== -1) {
            this.speedX = 8;
            this.x += 6 / 8 * player.height;
            this.y += 5 / 8 * player.width;
        }
    }

    this.x += this.speedX;
    this.y += this.speedY;
    this.isFired = false;
    this.resizeDraw();
    wallCollision(this, "bullet");

}

Bullet.prototype.resizeDraw = function () {
    var x = Math.round(scalePercentageX * this.x);
    var y = Math.round(scalePercentageY * this.y);
    var width = Math.round(scalePercentageX * this.width);
    var height = Math.round(scalePercentageY * this.height);
    if (this.direction == 'N')
        contextForeground.drawImage(this.img, 0, 0, 252, 355, x, y, width, height);

    if (this.direction == 'S')
        contextForeground.drawImage(this.img, 300, 0, 252, 355, x, y, width, height);

    if (this.direction == 'V')
        contextForeground.drawImage(this.img, 612, 45, 348, 250, x, y, width, height);

    if (this.direction == 'E')
        contextForeground.drawImage(this.img, 980, 45, 339, 250, x, y, width, height);
}

