// selects all buttons with the calss '.op'
let opButton = document.querySelectorAll(".op");
let equalButton = document.querySelector(".equal");
// selects all buttons with the class '.num'
let numButton = document.querySelectorAll(".num")
let clearButton = document.querySelector(".clear");
let input = document.querySelector(".input");
var op = "";

// Creates calculator object
let calc = {
  val1: 0,
  val2: 0,
  equal: null,

  // called by the opButton event listener: when user clicks
  // on operator set val1 and set op
  operation(){
    val1 = Number(input.value);
    input.value = "";
  },

  // called by equalButton event listener: when user clicks
  // on equal set val2 and decide which operation to do
  equate(){
    val2 = Number(input.value);

    if(op == "+"){
      input.value = val1 + val2
    }else if(op == "-"){
      input.value = val1 - val2
    }else if(op == "x"){
      input.value = val1 * val2
    }else if(op == "/"){
      input.value = val1 / val2
    }
    // reset op value
    op = "";
  },

  // called by clear button event listener
  clear(){
    input.value = "";
    val1= 0
    val2= 0
    equal= null
    op = "";
  }
}

// when number button gets clicked, insert number text to input
for(let i = 0; i < numButton.length;i++){
  numButton[i].addEventListener("click", function(e){
    e.preventDefault();
    input.value += this.textContent
  });
}

// when operator gets clicked set op to text content
for(let i = 0; i < opButton.length;i++){
  opButton[i].addEventListener("click", function(e){
    e.preventDefault();
    op = this.textContent;
    // calc calls operation
    calc.operation();
  });
}



// when equal gets clicked update val2, and do equation
equalButton.addEventListener("click", calc.equate);

// clear everything
clearButton.addEventListener("click", calc.clear);
