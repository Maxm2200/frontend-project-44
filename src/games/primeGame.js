import startGames from '../index.js'
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const prime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}
const game = () => {
  const question = Math.floor(Math.random() * 100) + 1
  const correct = prime(question) ? 'yes' : 'no'
  return [String(question), correct]
}
const GamesPrime = () => startGames(description, game)
export default GamesPrime()