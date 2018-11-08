const button = document.getElementsByTagName('button')
const input = document.getElementsByClassName('answer')[0]
const num = ['', '']
const decimal = [false, false]
let count = 0
let operator = ''
let prevOp = null

Array.from(button).forEach((el) => {
  el.addEventListener('click', function (){
    if(this.name === 'number'){
      num[count] += parseFloat(this.value)
      input.value = num[count]
    }else if( this.name === 'operator'){
      if(num[0] !== '' && num[1] !== ''){
        prevOp = operator
        if(prevOp){
          answer()
        }
        operator = this.value
      }else{
        operator = this.value
        count++
      }
    }else if(this.name === 'equal'){
      if(num[0] !== '' && num[1] !== ''){
        answer()
      }else{
        input.style.fontSize = '2rem'
        input.value = 'No values to add'
      }
    }else if(this.name === 'clear'){
      num[0] = ''
      num[1] = ''
      decimal[0] = false
      decimal[1] = false
      count = 0
      operator = ''
      prevOp = null
      input.value = 0
    }else if(this.name === 'decimal'){
      if(!demical[count]){
        demical[count] = true
        num[count] += '.'
        input.value = num[count]
      }
    }
  });
});


function answer(){
  let data = {
    'num1': parseFloat(num[0]),
    'num2': parseFloat(num[1]),
    'operator': operator
  }
  console.log(data)
  fetch('calc',{
    method: 'post',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(answer) {
    num[0] = answer
    num[1] = ''
    count = 1
    input.value = answer
  });
}
