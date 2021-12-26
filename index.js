class Calculator {
    constructor(intA, intB) {
        this.intA = intA,
        this.intB = intB
    };

    add() {
        return this.intA + this.intB;
    }

    subtract() {
        return this.intA - this.intB;
    }

    multiply() {
        return this.intA * this.intB;
    }

    divide() {
        if(this.intB === 0) {
            throw error('Cannot divide by 0');
        } else {
            return this.intA / this.intB;
        }
    }
}

// Example Testing

const trial1 = new Calculator(5,5);
console.log(trial1); 
console.log(trial1.add(), 'expect: 10'); 
console.log(trial1.subtract(), 'expect: 0'); 
console.log(trial1.multiply(), 'expect: 25'); 
console.log(trial1.divide(), 'expect: 1'); 

const trial2 = new Calculator(5,10);
console.log(trial2); 
console.log(trial2.add(), 'expect: 15'); 
console.log(trial2.subtract(), 'expect: -5'); 
console.log(trial2.multiply(), 'expect: 50'); 
console.log(trial2.divide(), 'expect: 0.5'); 