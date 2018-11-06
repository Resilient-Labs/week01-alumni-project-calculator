document.addEventListener("DOMContentLoaded", ()=> {
  //global variables
  let num = " "//will save the saved input once an operator is clicked
  let num_2 = " "//will be saving all inputs before an operator is clicked on to this
  let answer = " "//will save the math after  operation is executed
  let operator = 0//will save the clicked operator
  let decimal = " "//will save decimal
  let math//use to create the new Calculator class

  //CREATING THE Calculator CLASS
  class Calculator {
    constructor(num, num_2, operator){//takes three parameters, ones saved after clicked by user, and saving it to their respected properties
      this.num1 = num,
      this.num2 = num_2
      this.operator = operator
    }

    runOperation(){//created a method in the Calculator class that does the math
      return eval(`${this.num1} ${this.operator} ${this.num2}`)//eval does math
    }
  }

  //THE SHOW STARTS HERE, listening for when a button is cicked
  let clicked = $('button').click(function(){
    let buttons = this.value//save the clicked button value to check conditionals
    if(buttons >= 0){//condition for if the button value is a number
      num_2 = num_2 + buttons//save after each click
      console.log(num_2) //log number as after each save
      showOnScreen()//function that will display on screen
    }
    else if(buttons === '.'){//condition for if the button value is a .
      decimal = buttons//save
      checkDecimal(decimal)//function that will allow only one decimal per number
      showOnScreen()//function that will display on screen
    }
    else if(buttons === "="){//condition for if the button value is an =
      if((num !== " ") && (operator !== 0) && (num_2 !== " ")){//condition to check if we have 2 unique numbers and an operator saved, THEN and ONLY THEN can we create a new Calculator class to get the answer
        math = new Calculator(num, num_2, operator)//math is extending the Calculator class and passing in the 2 unique numbers and the operator
        console.log(math)//logging math
        answer = math.runOperation()//saving the operation results into answer
        // getAnswer(answer)
      }
      else if(operator === 0){//condition for if an operator was not saved, then there's only 1 unique number
        answer = num_2//saving the unique answer into answer
      }
      else{//condition for mainly if there's 1 unique number and an operator but no second number, it is an error
        answer = "Please revise"//advising users that an error has occur
      }
      getAnswer()//function tha will show the operation result and reset all values
    }
    else if( (buttons === '/') || (buttons === '*') || (buttons === '+') || (buttons === '-') ){//condition for id an operator is clicked
      let oper = buttons//save the operator into oper
      saveOperator(oper)//function that will check to see if a number has been saved before so it can take in the operator
    }
  })

  //checking if number has a decimal, if yes then do not add another, if no then add the decimal
  function checkDecimal(decimal){
    let numb = num_2
    let point = decimal
    if(numb % 1 === 0){//if this is true (means it does equal 0) it means that there are no decimals in the number and therefore can be added
      num_2 = numb + point
    }
    else{//otherwise, stick to number already have
      num_2 = numb
    }
  }

  //function that will save operator and save the number before the operator was saved into num instead of num_2
  function saveOperator(oper){
    let sign = oper

    if((num_2 !== " ") && (num === " ") ){//conditional for if and only if a unique number exist in num_2 but num is still blank, save the operator, allow switch of saved number from num_2 into num to happen, and reset reset num_2
      if(sign === "/"){//for when it is a /
        operator = sign
        num = num_2
        num_2 = " "
        showOnScreen()
      }
      if(sign === "*"){ //for when it is an *
        operator = sign
        num = num_2
        num_2 = " "
        showOnScreen()
      }
      if(sign === "+"){//for when it is an +
        operator = sign
        num = num_2
        num_2 = " "
        showOnScreen()
      }
      if(sign === "-"){//for when it is a -
        operator = sign
        num = num_2
        num_2 = " "
        showOnScreen()
      }
    }
  }

  function showOnScreen(){//function that show the saved inputs into the calculator
    if(operator === 0){
      $('#x').val(num_2)
    }
    else{
      $('#x').val(num + operator + num_2)
    }
  }

  function getAnswer(answer){//function that shows the result of the operation into the calculator and then resetting key variables
    $('#x').val(answer)
    console.log(num + operator + num_2 + " = " + answer)
    num = " "
    operator = 0
    num_2 = " "
    decimal = " "
  }

});
