function playSound(sound) {
		if(sound == "bulletSound"){
			document.getElementById(sound).src = "";
			document.getElementById(sound).src = "sounds/phaser.wav";
		}
    document.getElementById(sound).play();
}


