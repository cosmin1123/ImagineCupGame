var keyListener = function () {
    window.addEventListener('keydown', function (event) {
        if (event.keyCode == 39) {
            player.isRight = true;
        }
        if (event.keyCode == 37) {
            player.isLeft = true;
        }
        if (event.keyCode == 38) {
            player.isUp = true;
        }
        if (event.keyCode == 40) {
            player.isDown = true;
        }
        if (event.keyCode == 90) {

            if (cooldownEnded(bullets[bullets.length - 1])) {

                playSound("bulletSound");
                var bullet = new Bullet("bullet", 30, 30);//time is in ms
                bullet.isFired = true;
                bullet.speedX = 0;
                bullet.speedY = 0;
                bullets.push(bullet);
            }
        }
        if (event.keyCode == 88) {
            console.log(player.x)
            console.log(player.y);
        }

        if (event.keyCode == 27) {
            var winEvent = document.getElementById("event");
            var eventImage = document.getElementById("win");
            var loseImage = document.getElementById("lose");
           
            winEvent.style.display = "none";
            eventImage.style.display = "none";
            loseImage.style.display = "none";
            console.log("DONe");
            gamePaused = true;
            canvasMenu.style.display = "block";
        }
        console.log(event.keyCode);
        if(options == 1)
            sendingCoords();
    }
  , false);

    window.addEventListener('keyup', function (event) {
        if (event.keyCode == 39) {
            player.isRight = false;
        }
        if (event.keyCode == 37) {
            player.isLeft = false;
        }
        if (event.keyCode == 38) {
            player.isUp = false;
        }
        if (event.keyCode == 40) {
            player.isDown = false;
        }
        sendingCoords();
    }, false);
}
