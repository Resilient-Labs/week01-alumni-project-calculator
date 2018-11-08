"use strict";

const { Calculator } = require('../lib/calculator')

exports.calculation = (num1, num2, operator) => {
  const calc = new Calculator( num1, num2 )
  const answer = calc[operator]()
  return `${answer}`
}
