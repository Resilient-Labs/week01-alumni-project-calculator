let button = document.getElementsByTagName('button')

Array.from(button).forEach(function(el){
    el.addEventListener('click',function(){
      let name = this.name
      console.log(name)
      let val1 = parseInt(document.getElementById('val1').value)
      let val2 = parseInt(document.getElementById('val2').value)
      let answer;
      let calc = new Calculator
      if (name == 'add'){
        console.log('running')
        answer = calc.add(val1,val2)
      }else if (name == 'sub'){
        answer = calc.sub(val1, val2)
      }else if (name == 'multi'){
        answer = calc.multi(val1, val2)
      }else if (name == 'div'){
        answer = calc.div(val1, val2)
      }
      displayAnswer(answer)
    })
})

  function displayAnswer(answer){
    document.getElementById('answer').innerHTML=answer
  }


class Calculator{
  constructor(){
  }
  add (val1, val2){
    return val1 + val2
  }
  sub (val1, val2){
    return val1 - val2
  }
  multi (val1, val2){
    return val1 * val2
  }
  div (val1, val2){
    return val1 / val2
  }

}
