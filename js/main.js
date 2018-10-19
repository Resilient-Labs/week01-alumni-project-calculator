// Object oriented Calculator
class Calculator {

  // Add two values together and returns the sum
  add (val1, val2) {
    var sum = val1 + val2
    return sum
  }
  // Subtract two values and return the difference
  sub (val1, val2) {
    var diff = val1 - val2
    return diff
  }
  // Multiplies two values together and returns the product
  multi (val1, val2) {
    var prod = val1 * val2
    return prod
  }
  // Divide two values and return the quotient
  divi (val1, val2) {
    var quot = val1 / val2
    return quot
  }

};
// When the page loads create a claculator
const calc = new Calculator();
// Event listeners for add, subtract, multiply, and divide
document.getElementById('zebra').onclick = addVal
document.getElementById('lion').onclick = subVal
document.getElementById('tiger').onclick = multiVal
document.getElementById('bear').onclick = diviVal
// Pulls values from DOM for addition
function addVal(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var addSum = calc.add(val1, val2)
  // Displays sum in DOM
  document.getElementsByTagName('h2')[0].innerHTML = addSum
}
// Pulls values from DOM for subtraction
function subVal(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var difference = calc.sub(val1, val2)
  // Displays difference in DOM
  document.getElementsByTagName('h2')[0].innerHTML = difference
}
// Pulls values from DOM for multiplication
function multiVal(){
  console.log('anne')
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var product = calc.multi(val1, val2)
  // Displays product in DOM
  document.getElementsByTagName('h2')[0].innerHTML = product
}
// Pulls values from DOM for division
function diviVal(){
  console.log('anne')
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var quotient = calc.divi(val1, val2)
  // Displays quotient in DOM
  document.getElementsByTagName('h2')[0].innerHTML = quotient
}
