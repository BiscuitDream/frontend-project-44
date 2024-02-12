import { getRandomIntNumber, isPrime } from '../tools.js';
import game from '../index.js';

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeQuestion = () => {
  const question = getRandomIntNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGcd = () => game(primeDescription, primeQuestion);

export default runGcd;
