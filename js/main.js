const button = document.getElementsByTagName('button')
let input = document.getElementsByClassName('answer')[0]
let num = {
  'val1': '',
  'val2': ''
}
let count = 1
let operator = ''
let answer;

Array.from(button).forEach((el, e) => {
  el.addEventListener('click', function (e){
    e.preventDefault()
    if(this.name === 'number'){
      if(count === 1){
        num['val1'] += parseInt(this.value)
        input.value = num.val1
      }else if(count === 2){
        num['val2'] += parseInt(this.value)
        input.value = num.val2
      }else{
        input.style.fontSize = '1rem'
        input.value = 'Click the equal button to run math operation'
      }
    }else if( this.name === 'operator'){
      operator = this.value
      count++
    }else if(this.name === 'equal'){
      if(num.val1 === '' && num.val2 === ''){
        input.style.fontSize = '.8rem'
        input.value = `Enter a first value followed by a operator and then second value to compute math operation`
      }else{
        let calc = new Calculator(parseFloat(num.val1), parseFloat(num.val2))
        answer = calc[operator]()
        input.value = answer
        count++
      }
    }else if(this.name === 'clear'){
      num.val1 = ''
      num.val2 = ''
      count = 1
      input.value = 0
    }
  });
});


class Calculator{
  constructor(val1, val2){
    this.val1 = val1
    this.val2 = val2
  }

  add(){
    return this.val1 + this.val2
  }
  subtract(){
    return this.val1 - this.val2
  }
  multiply(){
    return this.val1 * this.val2
  }
  divide(){
    return this.val1 / this.val2
  }
}
