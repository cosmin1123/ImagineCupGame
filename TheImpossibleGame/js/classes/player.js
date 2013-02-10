function Player (id,width, height,posX,posY) {
	this.img = document.getElementById(id);
	this.x = posX;
	this.y = posY;
	this.width = width;
	this.height = height;
	this.startX = posX;
	this.startY = posY;
	this.state = 0;
	this.step = 0;
	this.direction = 'N';
}
Player.prototype.move = function () {
	  
    this.XBefore = this.x;
    this.YBefore = this.y;

    if (isRight == true) {
        this.x += 4;
        this.direction = 'E';
        if (this.state == 0)
            this.state = 1;
        else
            if (this.state == 1 && this.step == 10) {
                this.state = 2;
                this.step = 0;
            }
            else
                if (this.step == 10) {
                    this.state = 1;
                    this.step = 0;
                }
        this.step++;
    }
    if (isLeft == true) {
        this.x -= 4;
        this.direction = 'V';
        if (this.state == 0)
            this.state = 1;
        else
            if (this.state == 1 && this.step == 10) {
                this.state = 2;
                this.step = 0;
            }
            else
                if (this.step == 10) {
                    this.state = 1;
                    this.step = 0;
                }
        this.step++;
    }
    if (isUp == true) {
        this.y -= 4;
        this.direction = 'N';
        if (this.state == 0)
            this.state = 1;
        else
            if (this.state == 1 && this.step == 10) {
                this.state = 2;
                this.step = 0;
            }
            else
                if (this.step == 10) {
                    this.state = 1;
                    this.step = 0;
                }
        this.step++;
    }
    if (isDown == true) {
        this.y += 4;

        this.direction = 'S';
        if (this.state == 0)
            this.state = 1;
        else
            if (this.state == 1 && this.step == 10) {
                this.state = 2;
                this.step = 0;
            }
            else
                if (this.step == 10) {
                    this.state = 1;
                    this.step = 0;
                }
        this.step++;
    }
    if (isRight || isLeft || isUp || isDown)
        sendingCoords();

    if (!(isRight || isLeft || isUp || isDown)) {
        this.state = 0;
        this.step = 0;

    }
    //wallCollision();
    contextForeground.save();
    this.img.style.transform = 'rotate(15deg)';
    this.resizeDraw(this.img, this.x, this.y, this.width, this.height, this.direction + this.state);
    contextForeground.restore();

}

wallCollision = function(){
	
	for( var i = 0; i < index; i++)	
         if (!(player.x + player.width < walls[i].x ||
            walls[i].x + walls[i].width < player.x ||
			player.y + player.height < walls[i].y ||
			walls[i].y + walls[i].height  < player.y)) {
 			 			player.x = player.XBefore;
            		    player.y = player.YBefore;
       }
}
Player.prototype.resizeDraw = function (img, x, y, width, height, direction) {
    x = Math.round(scalePercentageX * x);
    y = Math.round(scalePercentageY * y);
    width = Math.round(scalePercentageX * width);
    height = Math.round(scalePercentageY * height);
    switch (direction) {

        case 'N0':
            sx = 25;
            sy = 0;
            swidth = 240;
            sheight = 260;
            break;
        case 'N1':
            sx = 260;
            sy = 0;
            swidth = 240;
            sheight = 260;
            break;
        case 'N2':
            sx = 495;
            sy = 0;
            swidth = 240;
            sheight = 260;
            break;
        case 'E0':
            sx = 25;
            sy = 275;
            swidth = 260;
            sheight = 235;
            break;
        case 'E1':
            sx = 289;
            sy = 275;
            swidth = 257;
            sheight = 235;
            break;
        case 'E2':
            sx = 545;
            sy = 275;
            swidth = 257;
            sheight = 235;
            break;
        case 'S0':
            sx = 35;
            sy = 535;
            swidth = 240;
            sheight = 260;
            break;
        case 'S1':
            sx = 270;
            sy = 535;
            swidth = 235;
            sheight = 260;
            break;
        case 'S2':
            sx = 505;
            sy = 535;
            swidth = 235;
            sheight = 260;
            break;
        case 'V0':
            sx = 512;
            sy = 800;
            swidth = 255;
            sheight = 240;
            break;
            break;
        case 'V1':
            sx = 254;
            sy = 800;
            swidth = 255;
            sheight = 260;
            break;
        case 'V2':
            sx = 0;
            sy = 800;
            swidth = 255;
            sheight = 260;

    }
    //contextForeground.drawImage(img, x, y, width, height);
    contextForeground.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);

}