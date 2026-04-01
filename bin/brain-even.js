import { welcome } from "../src/cli";
welcome();
const startEven = () => {
console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const random = Math.floor(Math.random() * 100) + 1;
    const otvet = random % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${random}`);
    const user = readlineSync.question('Your answer: ').toLowerCase();
    if (user === otvet) {
      console.log('Correct!');
    } else {
      console.log(`'${user}' is wrong answer ;(. Correct answer was '${otvet}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default startEven;
