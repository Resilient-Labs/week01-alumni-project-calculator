// objects come from here
class Calculator {

  // Add two values together and returns the sum
  add (val1, val2) {
    var sum = val1 + val2
    return sum
  }
  // subtract two values together and returns the difference
  subtract (val1, val2) {
    var diff = val1 - val2
    return diff
  }
  // multiply two values together and returns the product
  multiply (val1, val2) {
    var prod = val1 * val2
    return prod
  }
  // divides two values together and returns the quotent
  divide (val1, val2) {
    var quo = val1 / val2
    return quo
  }
};

//load calc when page loads
const calc = new Calculator();

// event listers for 4 different functions
document.getElementById('add').onclick = addVal
document.getElementById('sub').onclick = subVal
document.getElementById('multi').onclick = divVal
document.getElementById('divi').onclick = multiVal

//
function addVal(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = calc.add(val1, val2)

  // displays sum to DOM
  document.getElementsByTagName('h2')[0].innerHTML = sum
}

function subVal(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var diff = calc.subtract(val1, val2)

  // displays difference to DOM
  document.getElementsByTagName('h2')[0].innerHTML = diff
}

function divVal(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var quotent = calc.multiply(val1, val2)

  // displays quotent to DOM
  document.getElementsByTagName('h2')[0].innerHTML = quotent
}

function multiVal(){
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var product = calc.divide(val1, val2)

  // displays product to DOM
  document.getElementsByTagName('h2')[0].innerHTML = product
}
