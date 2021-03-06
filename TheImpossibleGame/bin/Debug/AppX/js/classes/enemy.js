﻿// Depending on the type of the enemy , value can represent: 
// distance ( for vertical/horizontal/diagonal enemies)
// radius ( for circle enemies)  PS: Not implemented yet
// length of a side (for square enemies)
var contextForeground = document.getElementById('canvasForeground').getcontext;

function Enemy(id, type, startX, startY, value, speed, height, width, freezeTime) {
    if (freezeTime == undefined)
        this.freezeTime = Math.floor(Math.random() * 10000) + 1000;//ms
    else
        this.freezeTime = freezeTime;
    this.bulletHits = 0;
    this.img = document.getElementById(id);
    this.type = type;
    this.value = value;
    this.oldX = startX;
    this.oldY = startY;
    this.x = startX;
    this.y = startY;
    this.speed = speed;
    this.startX = startX;
    this.startY = startY;
    this.height = height;
    this.width = width;
    this.mobUsualSpeed = speed;
    if (type == "vertical")
        this.endY = this.startY + this.value;
    if (type == "horizontal")
        this.endX = this.startX + this.value;
    if (type == "diagonal" || type == "square" || type == "diamond") {
        this.endX = this.startX + this.value;
        this.endY = this.startY + this.value;
        this.side = 1; // it only counts for type == "square" || type == "diamond"
    }
    if (type == "sinus") {
        this.sector = 1;
    }
    //contextForeground.save();
    //resizeDraw(this.img, this.x, this.y, this.width, this.height);
    //contextForeground.restore();
}

Enemy.prototype.move = function () {
    if (this.speed != 0) {
        this.oldX = this.x;
        this.oldY = this.y;
    }

    if (this.type == "horizontal") {

        if (this.startX <= this.endX)
            this.direction = 1;
        else
            this.direction = -1;
        this.x += this.speed * this.direction;
        if (this.x == this.startX || this.x == this.endX) {
            this.speed *= (-1);
            this.mobUsualSpeed = this.speed;
        }
    }

    if (this.type == "vertical") {

        if (this.startY <= this.endY)
            this.direction = 1;
        else
            this.direction = -1;
        this.y += this.speed * this.direction;
        if (this.y == this.startY || this.y == this.endY) {
            this.speed *= (-1);
            this.mobUsualSpeed = this.speed;
        }
    }

    if (this.type == "diagonal") {

        if (this.startX <= this.endX)
            this.direction = 1;
        else
            this.direction = -1;
        this.x += this.speed * this.direction;
        this.y += this.speed * this.direction;
        if (this.x == this.startX || this.x == this.endX) {
            this.speed *= (-1);
            this.mobUsualSpeed = this.speed;
        }
    }

    if (this.type == "square") {

        if (this.side == 1)
            this.x += this.speed;
        if (this.side == 2)
            this.y += this.speed;
        if (this.side == 3)
            this.x -= this.speed;
        if (this.side == 4)
            this.y -= this.speed;

        if (this.x == this.endX && this.y == this.startY)
            this.side = 2;
        if (this.x == this.endX && this.y == this.endY)
            this.side = 3;
        if (this.x == this.startX && this.y == this.endY)
            this.side = 4;
        if (this.x == this.startX && this.y == this.startY)
            this.side = 1;

    }
    // diamond is not ready. Do not use!
    if (this.type == "diamond") {
        if (this.side == 1) {
            this.x += this.speed;
            this.y += this.speed;
        }
        if (this.side == 2) {
            this.x -= this.speed;
            this.y += this.speed;
        }
        if (this.side == 3) {
            this.x -= this.speed;
            this.y -= this.speed;
        }
        if (this.side == 4) {
            this.x += this.speed;
            this.y -= this.speed;
        }
        if (this.x == this.startX + this.value / 2 && this.y == this.startY + this.value / 2)
            this.side = 2;
        if (this.x == this.endX && this.y == this.endY)
            this.side = 3;
        if (this.x == this.startX && this.y == this.endY)
            this.side = 4;
        if (this.x == this.startX && this.y == this.startY)
            this.side = 1;
    }

    if (this.type == "sinus") {

        this.x += this.speed;
        this.y = this.startY + Math.sin(2 * Math.PI * (this.x / 50)) * 100;
        if (this.x > this.startX + this.value) {
            this.speed = this.speed * (-1);
            this.mobUsualSpeed = this.speed;
        }
        if (this.x < this.startX) {
            this.speed = this.speed * (-1);
            this.mobUsualSpeed = this.speed;
        }


    };
}

Enemy.prototype.draw = function () {
    //contextForeground.save();
    this.drawImage();
    //contextForeground.restore();
    if (collision(this, player)) {
        playerDies(player);
        socket.emit('playerDied', { dead: true });
    }

    var d = new Date();
    var currentTime = d.getTime();

    for (var i = 0; i < bullets.length; i++)
        if (collision(this, bullets[i])) {
            this.speed = 0;
            bullets[i].fired = false;
            bullets[i].x = -10;
            bullets[i].y = -10;
            this.bulletHits = currentTime;
            bullets.splice(i, 1);
            
        }

    //console.log(this.bulletHits);

    if ((currentTime - this.bulletHits) > this.freezeTime) {
        this.speed = this.mobUsualSpeed;

    }


};

Enemy.prototype.drawImage = function () {
    contextForeground.save();
    
    var x = Math.round(scalePercentageX * this.x);
    var y = Math.round(scalePercentageY * this.y);
    var width = Math.round(scalePercentageX * this.width);
    var height = Math.round(scalePercentageY * this.height);

    if (this.oldX < this.x && this.oldY < this.y)
        contextForeground.drawImage(this.img, 375, 0, 375, 355, x, y, width, height);
    else
        if (this.oldX > this.x && this.oldY > this.y)
            contextForeground.drawImage(this.img, 0, 0, 375, 355, x, y, width, height);
        else
            if (this.oldX < this.x)
                contextForeground.drawImage(this.img, 770, 0, 385, 355, x, y, width, height); //right
            else
                if (this.oldX > this.x)
                    contextForeground.drawImage(this.img, 1170, 0, 385, 355, x, y, width, height); //left
                else
                    if (this.oldY > this.y)
                        contextForeground.drawImage(this.img, 0, 0, 365, 355, x, y, width, height); //up
                    else
                        if (this.oldY < this.y)
                            contextForeground.drawImage(this.img, 375, 0, 375, 355, x, y, width, height); //down

    contextForeground.restore();
}

function playerDies(object) {
    playSound("playerDiesSound");
    object.x = object.startX;
    object.y = object.startY;
    player.life--;
}

function collision(c1, c2) {
    var dx = c1.x + c1.width / 2 - (c2.x + c2.width / 2);
    var dy = c1.y + c1.height / 2 - (c2.y + c2.height / 2);
    var dist = c1.width / 2 + c2.width / 2;

    return Math.sqrt(dx * dx + dy * dy) <= dist
}
