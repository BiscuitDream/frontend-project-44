import { getRandomIntNumber, isEven } from '../tools.js';
import game from '../index.js';

const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenQuestion = () => {
  const question = getRandomIntNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => game(evenDescription, evenQuestion);

export default runEven;
