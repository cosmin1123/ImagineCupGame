function initMap2(canvas) {
    var context = canvas.getContext('2d');
    context.drawImage(document.getElementById("map"), 0, 0, canvas.width, canvas.height);

    //context.drawImage(document.getElementById("map"), 100, 100, 200, 200);
    //context.drawImage(document.getElementById("map"), 700, 900, 200, -200);
    context.strokeStyle = '#f00';
    //context.strokeRect(1000, 520, 90, 90);
    //context.strokeCirc

}