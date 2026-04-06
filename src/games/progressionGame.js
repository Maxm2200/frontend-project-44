import startGames from "../index.js"
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
};
const getLengthProgression = getRandomNumber(5, 15);
const getIncrementProgression = getRandomNumber(2, 8);
const getIndexHiddenElement = getRandomNumber(0, getLengthProgression - 1);
const getStartElementProgression =  getRandomNumber(2, 30);
const description = 'What number is missing in the progression?';
const game = () => {
    const progression = [];
    for (var i = 0; i < getLengthProgression; i+= 1) {
        progression.push(getStartElementProgression + i * getIncrementProgression);
    };
    const correct = String(progression[getIndexHiddenElement]);
    progression[getIndexHiddenElement] = '..';
    const question = progression.join(' ');
    return [question, correct];
};
const GamesProgression = startGames(description, game);
export default GamesProgression;