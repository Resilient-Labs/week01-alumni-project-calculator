document.addEventListener("DOMContentLoaded" , () => {
   const numberButtons = document.getElementsByTagName("input");
   const numberDisplay = document.getElementById("display");
   let usersNum;
   let user
   
   class Calculator {
      constructor(operator) {
         this.firstNum = "";
         this.operator = operator;
         this.secondNum = "";
      }
      doMath() {
         return eval(`${this.firstNum} ${this.operator} ${this.secondNum}`);
      }
   }
   
   const checkForDoubleDecimal = x => {
      const y = numberDisplay.childNodes[numberDisplay.childNodes.length - 1];
      if (x.toString() === "NaN") {
         numberDisplay.removeChild(y); 
      }  
   }
   
   const deleteCalculatorInstance = calculator => {
      calculator = null;
      delete calculator.prototype;
      numberDisplay.innerHTML = "";
   }
  
   for (let i = 0; i < numberButtons.length; i++) {
      numberButtons[i].addEventListener("click", e => {
         switch (true) {
            case numberButtons[i].value >= 0 || numberButtons[i].value === ".":
               let textNode = document.createTextNode(e.target.value);
               numberDisplay.appendChild(textNode);
               usersNum = Number(numberDisplay.innerHTML);
               checkForDoubleDecimal(usersNum);  
               break;
            case numberButtons[i].value !== "=":
               user = new Calculator(e.target.value);
               user.firstNum = usersNum;
               numberDisplay.innerHTML = "";
               break;
            case numberButtons[i].value === "C":
               deleteCalculatorInstance();
               break;
            default: 
               user.secondNum = usersNum;
               numberDisplay.innerHTML = user.doMath();
         }
      }); 
   }
});