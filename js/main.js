const button = document.getElementsByTagName('button')
const input = document.getElementsByClassName('answer')[0]
const num = {
  'val1': '',
  'val2': '',
  'total': ''
}

let count = 1
let operator = ''

Array.from(button).forEach((el, e) => {
  el.addEventListener('click', function (e){
    e.preventDefault()
    if(this.name === 'number'){
      if(count === 1){
        num.val1 += parseFloat(this.value)
        input.value = num.val1
      }else if(count === 2){
        num.val2 += parseFloat(this.value)
        input.value = num.val2
      }
    }else if( this.name === 'operator'){
      if(num.val1 !== '' && num.val2 !== ''){
        console.log('checking')
        operator = this.value
        const calc = new Calculator( parseFloat(num.val1), parseFloat(num.val2) )
        num.val1 = calc[operator]()
        num.val2 = ''
        input.value = parseFloat(num.val1)
        count = 2
      }else{
        operator = this.value
        if(count === 1){
          count++
        }
      }
    }else if(this.name === 'equal'){
      if(num.val1 === '' && num.val2 === ''){
        input.style.fontSize = '.8rem'
        input.value = `No values to run mathmatical operation val1: ${num.val1}, val2: ${num.val2} `
      }else{
        input.style.fontSize = '2.4rem'
        let calc = new Calculator( parseFloat(num.val1), parseFloat(num.val2) )
        num.val1 = calc[operator]()
        num.val2 = ''
        input.value = percise(num.val1)
        count = 2
      }
    }else if(this.name === 'clear'){
      num.val1 = ''
      num.val2 = ''
      num.total = ''
      count = 1
      operator = ''
      input.value = 0
    }else if(this.name === 'decimal'){
      num[`val${count}`] += '.'
      input.value = num[`val${count}`]
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


function percise(value){
  const num = value.toString()
  let newNum = []
  for(let x = 0; x < num.length; x++){
    if(num[x] !== '0' && num[x + 1] !== '0'){
      newNum.push(num[x])
    }
  }
  return newNum.join('')
}
