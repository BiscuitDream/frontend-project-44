import { getRandomIntNumber, isPrime } from '../tools.js';
import game from '../index.js';

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeQuestion = () => {
  const num = getRandomIntNumber(2, 100);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGcd = () => game(primeDescription, primeQuestion);

export default runGcd;
