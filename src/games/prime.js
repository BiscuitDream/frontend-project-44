import { getRandomIntNumber } from '../tools.js';
import game from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeQuestion = () => {
  const question = getRandomIntNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGcd = () => game(primeDescription, primeQuestion);

export default runGcd;
