import readlineSync from 'readline-sync'
const startGames = (description, game) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)
  for (let i = 0; i < 3; i += 1) {
    const [question, correct] = game()
    console.log(`Question: ${question}`)
    const user = readlineSync.question('Your answer: ')
    if (user === String(correct)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${user}' is wrong answer ;(. Correct answer was '${correct}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
export default startGames
