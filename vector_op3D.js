function performOperations3D() {
        // Get input values for vector u
        var uX = parseFloat(document.getElementById('uX').value);
        var uY = parseFloat(document.getElementById('uY').value);
        var uZ = parseFloat(document.getElementById('uZ').value);
  
        // Get input values for vector v
        var vX = parseFloat(document.getElementById('nvX').value);
        var vY = parseFloat(document.getElementById('nvY').value);
        var vZ = parseFloat(document.getElementById('nvZ').value);
  
        // Create vectors u and v
        var u = [uX, uY, uZ];
        var v = [vX, vY, vZ];
  
        // Perform vector operations
        // Addition u + v
        var uPlusV = [u[0] + v[0], u[1] + v[1], u[2] + v[2]];
  
        // Scalar multiplication 3u
        var threeU = [3 * u[0], 3 * u[1], 3 * u[2]];
  
        // Negation -u
        var negU = [-u[0], -u[1], -u[2]];
  
        // Subtraction v - u
        var vMinusU = [v[0] - u[0], v[1] - u[1], v[2] - u[2]];

      // Update rectangles with user input values
    document.querySelector('.rectangle-11-6').innerHTML = "" + uPlusV[0] + "";
    document.querySelector('.rectangle-10-6').innerHTML = "" + uPlusV[1] + "";
    document.querySelector('.rectangle-16-2').innerHTML = "" + uPlusV[2] + "";
    document.querySelector('.rectangle-11-7').innerHTML = "" + threeU[0] + "";
    document.querySelector('.rectangle-10-7').innerHTML = "" + threeU[1] + "";
    document.querySelector('.rectangle-16-3').innerHTML = "" + threeU[2] + "";
    document.querySelector('.rectangle-11-8').innerHTML = "" + negU[0] + "";
    document.querySelector('.rectangle-10-8').innerHTML = "" + negU[1] + "";
    document.querySelector('.rectangle-16-4').innerHTML = "" + negU[2] + "";
    document.querySelector('.rectangle-11-9').innerHTML = "" + vMinusU[0] + "";
    document.querySelector('.rectangle-10-9').innerHTML = "" + vMinusU[1] + "";
    document.querySelector('.rectangle-16-5').innerHTML = "" + vMinusU[2] + "";
}