function calculateComponentForm() {
    // Get the components of the first vector
    var vector1x = parseFloat(document.getElementById("vector1x").value);
    var vector1y = parseFloat(document.getElementById("vector1y").value);
    var vector1z = parseFloat(document.getElementById("vector1z").value);

    // Get the components of the second vector
    var vector2x = parseFloat(document.getElementById("vector2x").value);
    var vector2y = parseFloat(document.getElementById("vector2y").value);
    var vector2z = parseFloat(document.getElementById("vector2z").value);

    // Perform the subtraction to get the result components
    var resultX = vector1x - vector2x;
    var resultY = vector1y - vector2y;
    var resultZ = vector1z - vector2z;

    // Update rectangles with user input values
    document.querySelector('.rectangle-27').innerHTML = "" + vector2z +"";
    document.querySelector('.rectangle-28').innerHTML = "" + vector1z + "";
    document.querySelector('.rectangle-24').innerHTML = "" + vector1y + "";
    document.querySelector('.rectangle-23').innerHTML = "" + vector2y + "";
    document.querySelector('.rectangle-26').innerHTML = "" + vector1x + "";
    document.querySelector('.rectangle-25').innerHTML = "" + vector2x + "";
    
    document.querySelector('.rectangle-22').innerHTML = "" + resultX + "";
    document.querySelector('.rectangle-20').innerHTML = "" + resultY + "";
    document.querySelector('.rectangle-21').innerHTML = "" + resultZ + "";
}