class calculator{
  add(x,y){
    var n = x + y;
    return n;
  }
  sub(x,y){
    var n = x - y;
    return n;
  }
  mul(x,y){
    var n = x * y;
    return n;
  }
  div(x,y){
    var n = x / y;
    return n;
  }
}

function calculate(operation){
  var num1 = parseInt(document.getElementById('val1').value)
  var num2 = parseInt(document.getElementById('val2').value)
  var answer = operation(num1,num2)
  document.getElementById('answer').innerHTML = answer;
}

var calc = new calculator();

document.getElementById('add').onclick = function(){
  calculate(calc.add)
}
document.getElementById('sub').onclick = function(){
  calculate(calc.sub)
}
document.getElementById('mul').onclick = function(){
  calculate(calc.mul)
}
document.getElementById('div').onclick = function(){
  calculate(calc.div)
}
