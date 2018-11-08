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


module.exports = { Calculator }
