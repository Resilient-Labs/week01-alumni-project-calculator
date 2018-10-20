let opButton = document.querySelectorAll(".op");
let equalButton = document.querySelector(".equal");
let numButton = document.querySelectorAll(".num")
let clearButton = document.querySelector(".clear");
let input = document.querySelector(".input");
var op = "";

// CALCULATOR OBJECT
let calc = {
  val1: 0,
  val2: 0,
  equal: null,

  // when click on operator set val1 and set op
  operation(){
    val1 = Number(input.value);
    input.value = "";
  },

  // when click on equal decide what function to do
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

    op = "";
  },

  clear(){
    input.value = "";
    val1= 0
    val2= 0
    equal= null
    op = "";
  }
}

// when number button gets clicked, add number text to input
for(let i = 0; i < numButton.length;i++){
  numButton[i].addEventListener("click", function(e){
    e.preventDefault();
    input.value += this.textContent
  });
}

// when operator gets clicked change val1 & op
for(let i = 0; i < opButton.length;i++){
  opButton[i].addEventListener("click", function(e){
    e.preventDefault();
    op = this.textContent;
    calc.operation();
  });
}



// when equal gets clicked change val2, and do equation
equalButton.addEventListener("click", calc.equate);

// clear everything
clearButton.addEventListener("click", calc.clear);
