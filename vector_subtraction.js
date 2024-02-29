function calculateVector() {
    var initialX = parseFloat(document.getElementById('initialX').value);
    var initialY = parseFloat(document.getElementById('initialY').value);
    var terminalX = parseFloat(document.getElementById('terminalX').value);
    var terminalY = parseFloat(document.getElementById('terminalY').value);
  
    var xComponent = terminalX - initialX;
    var yComponent = terminalY - initialY;
  
    // Update rectangles with user input values
    document.querySelector('.rectangle-20-1').innerHTML = "" + yComponent + "";
    document.querySelector('.rectangle-22-1').innerHTML = "" + xComponent + "";
    document.querySelector('.rectangle-24-1').innerHTML = "" + initialY + "";
    document.querySelector('.rectangle-23-1').innerHTML = "" + terminalY + "";
    document.querySelector('.rectangle-26-1').innerHTML = "" + initialX + "";
    document.querySelector('.rectangle-25-1').innerHTML = "" + terminalX + "";
  }
  