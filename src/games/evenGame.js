import startGames from '../index.js';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correct = question % 2 === 0 ? 'yes' : 'no';
  return [question, correct];
};
const GamesEven = () => startGames(description, game);
export default GamesEven();