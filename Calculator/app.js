class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    //this function will clear all numbers on the display when there's nothing inputted

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    // appendNum function will check if the numbers have a "." 
    // Will keep the numbers appending instead of adding them 

    appendNum(number){

        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
        console.log(this.currentOperand)
    }
    chooseOperation(operation){
        
        //this line will automatically calculate the sum if the user doesn't input another number after cicking an operation button

        if(this.currentOperand === '') return

        // this line allows the calculator to get the sum of 2 nums when clicking on another operation button

        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    //this allows us to add the logic to the operations [+, -, *, /]
    // if the previous number or the current number are not numbers, don't execute the function. Else, fire the operation used

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default: 
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    //update() will update the display whenever a button gets clicked

    update(){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand

        // if the operation isn't null, append the first number inputted AKA the previousOp with the operation being used

        if(this.operation != null){
            this.previusOperandTextElement = `${this.previousOperand} ${this.operation}`
        }
    }
}

//delcaring variables for numbers, operation buttons, the current numbers, and the total result

const numBtns = document.querySelectorAll('[data-number')
const operationBtns = document.querySelectorAll('[data-operation')
const equals = document.querySelector('[data-equals]')
// const clear = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

//creating a new calculator object that takes in the previous text and the current text and will show the numbers on the screen
//every button will be able to be clicked from the forEach function
// calculator will update the display screen when we click on a number
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// when clicking on numbers in the calculator, the display will update each button clicked
console.log(previousOperandTextElement, currentOperandTextElement )
numBtns.forEach(button => {
    button.addEventListener('click', () => {
       calculator.appendNum(button.innerHTML)
       calculator.update() 
    })
})

// when clicking on an operation button, it will update the display with the opartion clicked

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
       calculator.chooseOperation(button.innerHTML)
       calculator.update() 
    })
})

// when clicking on the equals button, it will fire the compute function and update the display

equals.addEventListener('click', button =>{
    calculator.compute()
    calculator.update()
})


//this function will fire when the user clicks the "C" button and reset the display

// clear.addEventListener('click', button =>{
//     calculator.clear()
//     calculator.update()
// })