var levelChanged = level;
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
function showLose() {
    var winEvent = document.getElementById("event");
    var eventImage = document.getElementById("lose");
    winEvent.innerHTML = "<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp You lose<br /><br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Press ESC";
    winEvent.style.display = "block";
    eventImage.style.display = "block";
    level = 1;
    player.life = 5;

}
function showWin() {
    player.x = -50;
    player.y = -250;
    var winEvent = document.getElementById("event");
    var eventImage = document.getElementById("win");
    winEvent.innerHTML = "&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp You Win!!!<br /><br /> Press ESC";
    winEvent.style.display = "block";
    eventImage.style.display = "block";
    level = 1;
    player.life = 5;
    levelChanged = -5;

}

ActionArea.prototype.selectAction = function () {
    if (this.actionType == "lvl") {
        level = this.goLevel;
        levelChanged = level;
        console.log(level)
        console.log(levelChanged);
        selectLevel(level);
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

    if (this.actionType == "win") {
        showWin();
    }


}
