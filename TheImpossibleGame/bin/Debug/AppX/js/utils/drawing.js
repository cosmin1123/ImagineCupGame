function resizeDraw(img, x, y, width, height) {
    contextForeground.drawImage(img, Math.round(scalePercentageX * x),
   Math.round(scalePercentageY * y),
   Math.round(scalePercentageX * width),
   Math.round(scalePercentageY * height));
}

function resizeDrawWall(img, x, y, width, height) {
    contextBackground.drawImage(img, scalePercentageX * x,
    scalePercentageY * y, scalePercentageX * width,
    scalePercentageY * height);
}
