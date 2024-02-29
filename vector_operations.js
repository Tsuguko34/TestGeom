function performOperations() {
      var vX = parseFloat(document.getElementById('vX').value);
      var vY = parseFloat(document.getElementById('vY').value);
      var wX = parseFloat(document.getElementById('wX').value);
      var wY = parseFloat(document.getElementById('wY').value);

      var v = [vX, vY];
      var w = [wX, wY];

      // Addition v + w
      var vPlusW = [v[0] + w[0], v[1] + w[1]];

      // Scalar multiplication 3v
      var threeV = [3 * v[0], 3 * v[1]];

      // Negation -v
      var negV = [-v[0], -v[1]];

      // Subtraction w - v
      var wMinusV = [w[0] - v[0], w[1] - v[1]];

      // Update rectangles with user input values
    document.querySelector('.rectangle-13').innerHTML = "" + vPlusW[0] + "";
    document.querySelector('.rectangle-12').innerHTML = "" + vPlusW[1] + "";
    document.querySelector('.rectangle-11-2').innerHTML = "" + threeV[0] + "";
    document.querySelector('.rectangle-10-2').innerHTML = "" + threeV[1] + "";
    document.querySelector('.rectangle-11-3').innerHTML = "" + negV[0] + "";
    document.querySelector('.rectangle-10-3').innerHTML = "" + negV[1] + "";
    document.querySelector('.rectangle-11-4').innerHTML = "" + wMinusV[0] + "";
    document.querySelector('.rectangle-10-4').innerHTML = "" + wMinusV[1] + "";
}