var statusBarOccupied = 0;
var canvasStatusBar = document.getElementById('statusBar');
var lifeImg = document.getElementById("life");

function initStartBar() {
    var scaleStatusBarX = window.innerWidth / 1600
    canvasStatusBar.width = 1600 * scaleStatusBarX;
    canvasStatusBar.height = window.innerHeight * 0.03;
    canvasStatusBar.style.left = "0px";
    canvasStatusBar.style.top = canvasForeground.height + "px";
    canvasStatusBar.style.position = "absolute";
    console.log(canvasStatusBar.height);
}

function createStatusBar() {

    drawHearts(lifeImg, canvasStatusBar)
    weaponCooldown(canvasStatusBar, bullets[bullets.length - 1]);
}

function drawHearts(img, canvasStatusBar) {
    var contextStatusBar = canvasStatusBar.getContext('2d');

    contextStatusBar.save()
    contextStatusBar.clearRect(0, 0,
    canvasStatusBar.width, canvasStatusBar.height);
    contextStatusBar.restore();

    colorStatusBar(canvasStatusBar);

    var height = canvasStatusBar.height;
    var width = canvasStatusBar.width;
    var x = 20, y = 0;
    for (i = 0; i < player.life; i++) {
        contextStatusBar.drawImage(img, x, y, width / 90, height);
        x += width / 80;
    }
    statusBarOccupied = x + width / 90;
}

function colorStatusBar(canvas) {
    var context = canvas.getContext('2d');
    img = document.getElementById("statusBarBackground");
    console.log(img);
    context.drawImage(img, 0, 0, canvasStatusBar.width, canvasStatusBar.height);
}

function weaponCooldown(canvasStatusBar, object) {
    var context = canvasStatusBar.getContext('2d');

    var d = new Date();
    var time = d.getTime();
    var fillProcent;
    if (bullets.length != 0)
        fillProcent = (time - object.firedTime) / cooldown;
    else
        fillProcent = 1;

    if (fillProcent > 1)
        fillProcent = 1;
    img = document.getElementById("bullet");

    context.drawImage(this.img, 0, 0, 252, 355, statusBarOccupied +
    canvasStatusBar.width * 0.005, 0, canvasStatusBar.width * 0.01, canvasStatusBar.height);

    statusBarOccupied += canvasStatusBar.width * 0.02;
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.strokeRect(statusBarOccupied, 0, canvasStatusBar.width * 0.1,
    canvasStatusBar.height);

    context.fillStyle = "white";
    context.fillRect(statusBarOccupied + 3, 3, (canvasStatusBar.width * 0.1) *
    fillProcent - 5, canvasStatusBar.height - 3);
}
