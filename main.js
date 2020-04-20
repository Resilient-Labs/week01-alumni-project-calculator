let table = document.getElementById('calcBoard')

function Calculator() {
  this.numbers = {
    numArray: [],
    number: '',
    answer: 0
  }
  this.operation = {
    operationArray: []
  }
  this.methods = {
    "-": (arr) => arr.reduce((acc, curr) => acc - curr),
    "+": (arr) => arr.reduce((acc, curr) => acc + curr),
    "*": (arr) => arr.reduce((acc, curr) => acc * curr),
    "/": (arr) => arr.reduce((acc, curr) => acc / curr)
  };
}

let newCalculator = new Calculator
// Event listener on the whole table
table.onclick = function(event) {
  let calculatorDisplay = document.getElementById('display')
  // console.log(calculatorDisplay.innerText);
  // Im only interested in the clicks that happen on a 'td'
  let target = event.target.closest('button');
  target.classList.add('clicked')
  setTimeout(() => {target.classList.remove('clicked')}, 200)

  console.log(typeof target.value)
  console.log(target.value)

  if (target.name != 'button') return; // not on TD? Then we're not interested
  // We click on a number gets
  if(target.value == 'AC'){
    newCalculator.numbers.numArray = [];
    newCalculator.numbers.number = '';
    newCalculator.numbers.answer = 0
    newCalculator.operation.operationArray = []
    calculatorDisplay.innerText = ''
    return;
  }
  // Add numbers to the DOM and to current number to be pushed later into numsArray stack to be reduced
  if (!['/', '+', "*", '-', '='].includes(target.value)) {
    console.log('sdf');
    newCalculator.numbers.number += (target.value);
    if (calculatorDisplay.innerText == newCalculator.numbers.numArray[newCalculator.numbers.numArray.length - 1]) {
      calculatorDisplay.innerText = ''
      calculatorDisplay.innerText += target.value;
    } else {
      calculatorDisplay.innerText += target.value;
    }
  }
  // Push current number into numsArray and reset the current number
  // Also push the opperation into the operations stack
  if (['/', '+', "*", '-'].includes(target.value)) {
    // if operations stack is >= reduce the current array of numbers and show anser on DOM
    if (newCalculator.operation.operationArray.length >= 1) {
      let action = newCalculator.operation.operationArray.pop()
      newCalculator.numbers.numArray.push(Number(newCalculator.numbers.number));
      newCalculator.operation.operationArray.push(target.value)
      newCalculator.numbers.answer = newCalculator.methods[action](newCalculator.numbers.numArray)
      newCalculator.numbers.numArray = []
      newCalculator.numbers.numArray.push(Number(newCalculator.numbers.answer));
      newCalculator.numbers.number = ''
      calculatorDisplay.innerText = newCalculator.numbers.answer
    } else {
      // Push current number into numsArray and reset the current number
      // Also push the opperation into the operations stack
      newCalculator.numbers.numArray.push(Number(newCalculator.numbers.number));
      newCalculator.numbers.number = ''
      newCalculator.operation.operationArray.push(target.value)
      calculatorDisplay.innerText = newCalculator.numbers.numArray[newCalculator.numbers.numArray.length - 1]
    }
  }
  // Push current number to numsArray and reduce with operation that is in operationArray
  if (target.value == '=') {
    newCalculator.numbers.numArray.push(Number(newCalculator.numbers.number))
    let action = newCalculator.operation.operationArray.pop()
    newCalculator.numbers.answer = newCalculator.methods[action](newCalculator.numbers.numArray)
    newCalculator.numbers.number = newCalculator.methods[action](newCalculator.numbers.numArray)
    newCalculator.numbers.numArray = []
    calculatorDisplay.innerText = newCalculator.numbers.answer
  }
  console.log(newCalculator)
};
