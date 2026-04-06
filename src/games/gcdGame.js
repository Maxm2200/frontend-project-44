import startGames from '../index.js'
const description = 'Find the greatest common divisor of given numbers.'
const gcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}
const game = () => {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1
  const question = `${num1} ${num2}`
  const correct = String(gcd(num1, num2))
  return [question, correct]
}
const GamesGcd = () => startGames(description, game)
export default GamesGcd()