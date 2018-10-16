// console.log("yo")
let firstInput = prompt("Please enter a number");
inputChecker(firstInput);
let secondInput = prompt("Please enter a number");
inputCheck(secondInput)
let thirdInput = prompt("please enter an operator");
inputChecker(thirdInput);

function inputChecker(firstInput) {
if ((firstInput != null) && (isNaN(firstInput) == false)) {
    document.getElementById("demo").innerHTML =
    "Hello " + firstInput + "! How are you today?";
}
else {
   document.getElementById("demo").innerHTML =
   "Please enter an input";
   console.log("asdfd")
}
}

function inputCheck(secondInput) {
  if ((secondInput != null) && (secondInput == ("/" || "*" || "+" || "-"))) {
      document.getElementById("demo").innerHTML =
      console.log((secondInput));;
  }
  else {
     document.getElementById("demo").innerHTML =
     "Please enter an input";
     console.log("asdfd")
  }
}


class Calculate {
  constructor(firstInput, secondInput, thirdInput) {
    this.firstInput = firstInput;
    this.secondInput = secondInput;
    this.thirdInput = thirdInput;
    this.plus = firstInput + thirdInput;
    this.minus = firstInput - thirdInput;
    this.multiply = firstInput * thirdInput;
    this.divide = firstInput / thirdInput;
  }
  // Return the character description
}

const result = new Calculate(firstInput, secondInput, thirdInput);
console.log(result)
if (result.secondInput =="/"){
  document.getElementById("demo").innerHTML =
  result.divide;

}
else if (result.secondInput=="*"){
  document.getElementById("demo").innerHTML =
  result.multiply;
}
else if (result.secondInput=="-"){
  document.getElementById("demo").innerHTML =
  result.minus;
}
else if (result.secondInput=="+"){
  document.getElementById("demo").innerHTML =
  result.plus;
}
else {
  console.log(secondInput)
  console.log("invalid equation")
}
// Aurora is harmed by an arrow
// aurora.health -= 20;
//
// // Aurora gains a strength necklace
// aurora.strength += 10;
//
// // Aurora learns a new skill
// aurora.xp += 15;





// console.log(aurora.results());


// class FullCalculator {
//   constructor(firstInput, secondInput, thirdInput) {
//     this.seven = 7;
//     this.eight = 8;
//     this.nine = 9;
//     this.four = 4;
//     this.five = 5;
//     this.six = 6;
//     this.one = 1;
//     this.two = 2;
//     this.three = 3;
//     this.zero = 0;
//     this.divide = '/';
//     this.multiply = '*';
//     this.add = '+';
//     this.minus = '-';
//     this.dot = '.';
//     this.equals = '=';
//   }
//   // Return the character description
//   results() {
//     console.log(this.seven)
//     return `${this.seven}`;
//   }
// }
