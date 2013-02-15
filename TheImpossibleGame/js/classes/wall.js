function Wall(posX, posY, width, height) {
    
    this.x = posX;
    this.y = posY;
    this.width = width;
    this.height = height;
    if (this.height == undefined)
        this.height = this.width;
}
