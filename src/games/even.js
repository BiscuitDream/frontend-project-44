import { getRandomIntNumber, isEven } from '../tools.js';
import game from '../index.js';

const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenQuestion = () => {
  const number = getRandomIntNumber(0, 100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => game(evenDescription, evenQuestion);

export default runEven;
