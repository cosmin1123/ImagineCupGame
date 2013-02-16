function ActionArea(posX, posY, width, height, actionType, goLevel) {
    this.goLevel = goLevel;
    if (this.goLevel == undefined)
        this.goLevel = level + 1;
    this.x = posX;
    this.y = posY;
    this.width = width;
    this.height = height;
    this.actionType = actionType;
}

ActionArea.prototype.areaCollision = function () {

    if (!(player.x + player.width < this.x ||
    this.x + this.width < player.x ||
    player.y + player.height < this.y ||
    this.y + this.height < player.y)) {
        this.selectAction();

    }
}

ActionArea.prototype.selectAction = function () {
    if (this.actionType == "lvl") {
        level = this.goLevel;
        selectLevel(this.goLevel);
    }

    if (this.actionType == "slow") {
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
