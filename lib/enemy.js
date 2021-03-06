﻿// Depending on the type of the enemy , value can represent: 
// distance ( for vertical/horizontal/diagonal enemies)
// radius ( for circle enemies)  PS: Not implemented yet
// length of a side (for square enemies)

exports.Enemy = function(type, startX, startY, value, speed, height, width) {
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
 
}

exports.move = function (enemy) {
    if (enemy.type == "horizontal") {

        if (enemy.startX <= enemy.endX)
            enemy.direction = 1;
        else
            enemy.direction = -1;
        enemy.x += enemy.speed * enemy.direction;
        if (enemy.x == enemy.startX || enemy.x == enemy.endX)
            enemy.speed *= (-1);
    }

    if (enemy.type == "vertical") {
 	 
        if (enemy.startY <= enemy.endY)
            enemy.direction = 1;
        else
            enemy.direction = -1;
        enemy.y += enemy.speed * enemy.direction;
        if (enemy.y == enemy.startY || enemy.y == enemy.endY)
            enemy.speed *= (-1);
    }

    if (enemy.type == "diagonal") {
	 
        if (enemy.startX <= enemy.endX)
            enemy.direction = 1;
        else
            enemy.direction = -1;
        enemy.x += enemy.speed * enemy.direction;
        enemy.y += enemy.speed * enemy.direction;
        if (enemy.x == enemy.startX || enemy.x == enemy.endX)
            enemy.speed *= (-1);
    }

    if (enemy.type == "square") {
    	  
        if (enemy.side == 1)
            enemy.x += enemy.speed;
        if (enemy.side == 2)
            enemy.y += enemy.speed;
        if (enemy.side == 3)
            enemy.x -= enemy.speed;
        if (enemy.side == 4)
            enemy.y -= enemy.speed;

        if (enemy.x == enemy.endX && enemy.y == enemy.startY)
            enemy.side = 2;
        if (enemy.x == enemy.endX && enemy.y == enemy.endY)
            enemy.side = 3;
        if (enemy.x == enemy.startX && enemy.y == enemy.endY)
            enemy.side = 4;
        if (enemy.x == enemy.startX && enemy.y == enemy.startY)
            enemy.side = 1;

    }
    // diamond is not ready. Do not use!
    if (enemy.type == "diamond") {
        if (enemy.side == 1) {
            enemy.x += enemy.speed;
            enemy.y += enemy.speed;
        }
        if (enemy.side == 2) {
            enemy.x -= enemy.speed;
            enemy.y += enemy.speed;
        }
        if (enemy.side == 3) {
            enemy.x -= enemy.speed;
            enemy.y -= enemy.speed;
        }
        if (enemy.side == 4) {
            enemy.x += enemy.speed;
            enemy.y -= enemy.speed;
        }
        if (enemy.x == enemy.startX + enemy.value/2 && enemy.y == enemy.startY + enemy.value/2)
            enemy.side = 2;
        if (enemy.x == enemy.endX && enemy.y == enemy.endY)
            enemy.side = 3;
        if (enemy.x == enemy.startX && enemy.y == enemy.endY)
            enemy.side = 4;
        if (enemy.x == enemy.startX && enemy.y == enemy.startY)
            enemy.side = 1;
    }

    if (enemy.type == "sinus") {
    
        enemy.x += enemy.speed;
        enemy.y = enemy.startY + Math.sin(2 * Math.PI * (enemy.x / 50)) * 100 ;
        if( enemy.x > enemy.startX + enemy.value){
        	enemy.speed = enemy.speed * (-1);
        }
        if( enemy.x < enemy.startX){
       		enemy.speed = enemy.speed * (-1);
       	}


    };
    return enemy;
}

