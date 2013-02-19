	var statusBarOccupied = 0;

	var canvasStatusBar = document.getElementById('statusBar');
	var lifeImg = document.getElementById("life");
	
	function initStartBar(){
	var scaleStatusBarX = window.innerWidth / 1600	
	canvasStatusBar.width = 1600 * scaleStatusBarX;
	canvasStatusBar.height = window.innerHeight * 0.03;
	canvasStatusBar.style.left = "0px";
	canvasStatusBar.style.top = canvasForeground.height + "px";
	canvasStatusBar.style.position = "absolute";
 	console.log(canvasStatusBar.height);
	}
	
	function createStatusBar(){
	
		drawHearts(lifeImg, canvasStatusBar)
		weaponCooldown(canvasStatusBar, bullet);
	}
	
	function drawHearts(img, canvasStatusBar){
		var contextStatusBar = canvasStatusBar.getContext('2d');
		
		contextStatusBar.save()
		contextStatusBar.clearRect(0, 0,
		canvasStatusBar.width, canvasStatusBar.height);
		contextStatusBar.restore();
		
		colorStatusBar(canvasStatusBar);
		
		var height = canvasStatusBar.height;
		var width = canvasStatusBar.width;
		var x = 0, y = 0;
		for( i = 0; i < player.life; i++){
			contextStatusBar.drawImage(img, x, y, width/90, height);
			x += width/100;
		}
		statusBarOccupied = x + width/90;
	}
	
	function colorStatusBar(canvas){
			var context = canvas.getContext('2d');
      context.rect(0, 0, canvas.width, canvas.height);
      // add linear gradient
      var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
      // light blue
      grd.addColorStop(0, '#111111');   
      // dark blue
      grd.addColorStop(1, '#AAAAAA');
      context.fillStyle = grd;
      context.fill();
	}
	
	function weaponCooldown(canvasStatusBar, object){
    var context = canvasStatusBar.getContext('2d');
		
		var d = new Date();
		var time = d.getTime();
		var fillProcent = (time - object.firedTime)/ object.cooldown;
		if(fillProcent > 1)
			fillProcent = 1;
		context.lineWidth = 5;
		context.strokeStyle = "blue";
    context.strokeRect(statusBarOccupied, 0, canvasStatusBar.width * 0.1, canvasStatusBar.height );   
    context.fillStyle = "white"; 
    context.fillRect(statusBarOccupied + 3, 3,(canvasStatusBar.width * 0.1)*fillProcent - 5, canvasStatusBar.height - 3);   
	}
