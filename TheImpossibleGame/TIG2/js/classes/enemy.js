﻿// Depending on the type of the enemy , value can represent: 
// distance ( for vertical/horizontal/diagonal enemies)
// radius ( for circle enemies)  PS: Not implemented yet
// length of a side (for square enemies)
var context = document.getElementById('canvas').getContext;
function Enemy(id, type, startX, startY, value, speed, height, width) {
    this.img = document.getElementById(id);
    this.type = type;
    this.value = value;
    this.x = startX;
    this.y = startY;
    this.speed = speed;
    this.startX = startX;
    this.startY = startY;
    this.height = height;
    this.width = width;
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
    context.save();
    resizeDraw(this.img, this.x, this.y, this.width, this.height);
    context.restore();
}

Enemy.prototype.move = function () {

    if (this.type == "horizontal") {
        resizeClear(this.x, this.y, this.width, this.height);

        if (this.startX <= this.endX)
            this.direction = 1;
        else
            this.direction = -1;
        this.x += this.speed * this.direction;
        if (this.x == this.startX || this.x == this.endX)
            this.speed *= (-1);
    }

    if (this.type == "vertical") {
        resizeClear(this.x, this.y, this.width, this.height);

        if (this.startY <= this.endY)
            this.direction = 1;
        else
            this.direction = -1;
        this.y += this.speed * this.direction;
        if (this.y == this.startY || this.y == this.endY)
            this.speed *= (-1);
    }

    if (this.type == "diagonal") {
        resizeClear(this.x, this.y, this.width, this.height);

        if (this.startX <= this.endX)
            this.direction = 1;
        else
            this.direction = -1;
        this.x += this.speed * this.direction;
        this.y += this.speed * this.direction;
        if (this.x == this.startX || this.x == this.endX)
            this.speed *= (-1);
    }

    if (this.type == "square") {
        resizeClear(this.x, this.y, this.width, this.height);

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
    //Not implemented yet

    if (this.type == "sinus") {
        resizeClear(this.x, this.y, this.width, this.height);
        this.x += this.speed;
        this.y = this.startY + Math.sin(2 * Math.PI * (this.x / 50)) * 100;

        if (this.x > this.startX + this.value) {
            this.speed = this.speed * (-1);
        }
        if (this.x < this.startX) {
            this.speed = this.speed * (-1);
        }


    };
}

Enemy.prototype.draw = function () {
    context.save();
    resizeDraw(this.img, this.x, this.y, this.width, this.height);


    if (collision(this, player1)) {
        player1Dies();
    }
    if (collision(this, player2)) {
        player2Dies();
    }
    context.restore();
};

function player1Dies() {
    resizeClear(player1.x, player1.y, player1.width, player1.height);
    player1.x = player1.startX;
    player1.y = player1.startY;
}

function player2Dies() {
    resizeClear(player2.x, player2.y, player2.width, player2.height);
    player2.x = player2.startX;
    player2.y = player2.startY;

}
function collision(c1, c2) {
    var dx = c1.x + c1.width / 2 - (c2.x + c2.width / 2);
    var dy = c1.y + c1.height / 2 - (c2.y + c2.height / 2);
    var dist = c1.width / 2 + c2.width / 2;

    return Math.sqrt(dx * dx + dy * dy) <= dist
}