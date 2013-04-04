var options = 0;
var noOfMeniuOptions = 4;
var canvasMenu = document.getElementById("canvasMenu");
var menuBackground = document.getElementById("menuBackground");
var menuScalePercentageX = window.innerWidth / 1600;
var menuScalePercentageY = (window.innerHeight) / 900;
var gamePaused = false;
var ok = true;
canvasMenu.width = window.innerWidth;
canvasMenu.height = window.innerHeight;
var showMenu = function () {
    window.onkeydown = function () { };
    window.onkeyup = function () { };

    addMenuEventListener();
    drawMainMenu();

}

var drawMainMenu = function () {

    var context = canvasMenu.getContext('2d');
    context.drawImage(menuBackground, 0, 0, canvasMenu.width, canvasMenu.height);

    var colorSingle = "orange";
    var colorMulti = "orange";
    var colorOptions = "orange";
    var colorQuit = "orange";

    if (options == 0)
        colorSingle = "green";
    if (options == 1)
        colorMulti = "green";
    if (options == 2)
        colorOptions = "green";
    if (options == 3)
        colorQuit = "green";

    context.font = "30px gameFont";
    context.fillStyle = colorSingle;
    context.fillText("Single player", canvasMenu.width * 1.9 / 5,
   canvasMenu.height / 4);
    context.fillStyle = colorMulti;
    context.fillText("Multiplayer", canvasMenu.width * 1.9 / 5,
canvasMenu.height / 2.4);
    context.fillStyle = colorOptions;
    context.fillText("Options", canvasMenu.width * 2 / 5,
canvasMenu.height / 1.7);
    context.fillStyle = colorQuit;
    context.fillText("Quit", canvasMenu.width * 2.05 / 5,
canvasMenu.height / 1.2);
    

}

var addMenuEventListener = function () {
    window.addEventListener('keydown', function (event) {
        if (gamePaused || ok) {
            if (event.keyCode == 13) {
                console.log(gamePaused);
                selectedOption(options);
            }
            if (event.keyCode == 38) {
                options -= 1
                if (options < 0)
                    options = noOfMeniuOptions - 1;
            }
            if (event.keyCode == 40) {
                options = (options + 1) % noOfMeniuOptions;
            }
            drawMainMenu();
        }
    }
)
};

var selectedOption = function (options) {
    canvasMenu.style.display = "none";
    if (options == 0) {
        if (!gamePaused) {
            gamePaused = false;
            ok = false;
            singlePlayerMode();
        }
        else {
            gamePaused = false;
            unpauseGame();
        }
    }


    if (options == 1) {
        if (!gamePaused) {
            gamePaused = false;
            ok = false;
            multiplayerMode();
        }
        else {
            gamePaused = false;
            unpauseGame();
        }
    }

    var e = new Error("Succes close");
    if (options == 3)
        MSApp.terminateApp(e);

}

var stopAllInterval = function () {
    // Set a fake timeout to get the highest timeout id
    var highestTimeoutId = setTimeout("");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i);
    }
}