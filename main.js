let table = document.getElementById('calcBoard')
const calculator = {
  numbers: {
    numArray: [],
    number: '',
    answer: 0,
  },
  operation: [],
  methods: {
    "-": (arr) => arr.reduce((acc, curr) => acc - curr),
    "+": (arr) => arr.reduce((acc, curr) => acc + curr),
    "*": (arr) => arr.reduce((acc, curr) => acc * curr),
    "/": (arr) => arr.reduce((acc, curr) => acc / curr)
  },
  work() {
    table.onclick = (event) => {
      let calculatorDisplay = document.getElementById('display')
      // console.log(calculatorDisplay.innerText);
      // Im only interested in the clicks that happen on a 'td'
      let target = event.target.closest('button');
      target.classList.add('clicked')
      setTimeout(() => {
        target.classList.remove('clicked')
      }, 200)

      if (target.name != 'button') return; // not on TD? Then we're not interested
      // We click on a number gets
      if (target.value == 'AC') {
        this.numbers.numArray = [];
        this.numbers.number = '';
        this.numbers.answer = 0
        this.operation = []
        calculatorDisplay.innerText = ''
        return;
      }
      // Add numbers to the DOM and to current number to be pushed later into numsArray stack to be reduced
      if (!['/', '+', "*", '-', '='].includes(target.value)) {
        console.log('sdf');
        this.numbers.number += (target.value);
        if (calculatorDisplay.innerText == this.numbers.numArray[this.numbers.numArray.length - 1]) {
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
        if (this.operation.length >= 1) {
          let action = this.operation.pop()
          this.numbers.numArray.push(Number(this.numbers.number));
          this.operation.push(target.value)
          this.numbers.answer = this.methods[action](this.numbers.numArray)
          this.numbers.numArray = []
          this.numbers.numArray.push(Number(this.numbers.answer));
          this.numbers.number = ''
          calculatorDisplay.innerText = this.numbers.answer
        } else {
          // Push current number into numsArray and reset the current number
          // Also push the opperation into the operations stack
          this.numbers.numArray.push(Number(this.numbers.number));
          this.numbers.number = ''
          this.operation.push(target.value)
          calculatorDisplay.innerText = this.numbers.numArray[this.numbers.numArray.length - 1]
        }
      }
      // Push current number to numsArray and reduce with operation that is in operationArray
      if (target.value == '=') {
        this.numbers.numArray.push(Number(this.numbers.number))
        let action = this.operation.pop()
        this.numbers.answer = this.methods[action](this.numbers.numArray)
        this.numbers.number = this.methods[action](this.numbers.numArray)
        this.numbers.numArray = []
        calculatorDisplay.innerText = this.numbers.answer
      }
    };
  }
}
calculator.work()
