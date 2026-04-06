import startGames from '../index.js'
const description = 'What is the result of the expression?'
const calculate = (num1, num2, znac) => {
  switch (znac) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: return null
  }
}
const game = () => {
  const znacs = ['+', '-', '*']
  const num1 = Math.floor(Math.random() * 20) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  const znac = znacs[Math.floor(Math.random() * znacs.length)]
  const question = `${num1} ${znac} ${num2}`
  const correct = String(calculate(num1, num2, znac))
  return [question, correct]
}
const GamesCalculate = () => startGames(description, game)
export default GamesCalculate()
