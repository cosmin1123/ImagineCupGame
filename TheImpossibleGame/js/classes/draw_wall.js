var wall = document.getElementById("wall");
var walls = new Array;
var index = 0;

function wall_vertical(context, fromX, fromY, toY, scale) {
    
    context.save();
    while (fromY <= toY) {
    	  resizeDrawWall(wall, fromX, fromY, scale, scale);
    	  
        walls[index++] = new Wall(fromX, fromY, scale);
        fromY += scale;
    }
    context.restore();
};
function wall_horizontal(context, fromX,fromY, toX,scale) {

    context.save();
    while (fromX <= toX) {
    	  resizeDrawWall(wall, fromX, fromY, scale, scale);
      
        walls[index++] = new Wall(fromX, fromY, scale);
        fromX += scale;
    }
    context.restore();
};
