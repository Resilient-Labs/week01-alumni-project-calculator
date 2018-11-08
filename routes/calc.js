const math = require('../services/calcService')


exports.calc = (req, res) => {
  const {num1, num2, operator } = req.body
  return res.send(math.calculation(num1, num2, operator))
}
