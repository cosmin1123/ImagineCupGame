var receiveX = 50;
var receiveY = 50;
var playerList = new Array();
var gameStarted = false;

var socket = io.connect("10.5.4.204:3000/");//replace this with server ip and 

var prevMessage;


var sendLocation = function () {
    socket.emit('XY', { isUp: player.isUp, isDown: player.isDown, isLeft: player.isLeft, isRight: player.isRight, playerName: player.playerName, x: player.x, y: player.y });
};

var sendingCoords = function () {
    sendLocation();
};

function sendName(playerName) {
    socket.emit('playerName', {playerName: playerName });

};

function receivedPlayerList() {
    socket.on("newPlayer", function (list) {
        playerList = list;
        updateList();
        
    });
}

var startEnemy = function () {

    	setInterval(function () {
    		for (var i = 1; i < enemy.length; i++) {
    			enemy[i].move();
    		}
    	}, 15);
}


socket.on('XY', function (movement) {
    if (movement.playerName !== player.playerName) {
        player2.isUp = movement.isUp;
        player2.isDown = movement.isDown;
        player2.isRight = movement.isRight;
        player2.isLeft = movement.isLeft;
        player2.x = movement.x;
        player2.y = movement.y;
    }
});

socket.on('playerDied', function (deadState) {
    if (deadState.dead)
        playerDies(player2);
});

//socket.on('moveEnemy', function (co) {
//		var timesCalled = 0;
//	 	if(gameStarted){
//    	 var interval =	setInterval( function () { 	
//    			for (var i = 1; i < enemy.length; i++) {
//   						enemy[i].move();
//   			}
//   			timesCalled++;
//   		if( timesCalled == 6)
//   			clearInterval(interval);
//   		}, 20);


//   	}
//});

function updateList(list) {
    var x = document.getElementById("lobbySelect");

    if (list == undefined)
        list = playerList;

    if (x == null) return;
    if (x.options == null) return;
    x.options.length = 0;	 // That's it!

    for (var i in list) {
        var option = document.createElement("option");
        option.text = list[i];

        try {
            // for IE earlier than version 8
            x.add(option, x.options[null]);
        }
        catch (e) {
            x.add(option, null);
        }
    }
}

function sendTextMessage(textMessage) {
    console.log(textMessage);
    socket.emit('playerMessage', { playerName: playerName, textMessage: textMessage });
}

function receiveMessage() {
   	socket.on('message', function (message) {
        console.log(message);
        if (message.textMessage != prevMessage && message.textMessage != "") {
            document.getElementById("lobbyChat").innerHTML += message.playerName + ": " + message.textMessage ;
            prevMessage = message.textMessage;
        }
    });
}

function inviteTeamMate(teamMate, pName){
    socket.emit('invite', {playerName: pName, teamMate: teamMate });
}

function teamMateBuzz(){
	socket.on('invitation', function (resp) {
		document.getElementById("playerInviteName").innerHTML = "Player " + resp.playerName + " invites you to play a game. Do you accept?";
		document.getElementById("PlayerInvite").style.visibility = "";
		   
	});
}

function teamMateResponse(){
	socket.on('inviteResponse', function (resp) {
    	if (resp.validity)
    	    createRoom(resp.teamMate, resp.playerName)
    	else
    		showRefusal(resp.teamMate);
});
}

function createRoom(teamMate, playerName){
	
}

function showRefusal(teamMate){

}
