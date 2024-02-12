import { getGcd, getRandomIntNumber } from '../tools.js';
import game from '../index.js';

const gcdDescription = 'Find the greatest common divisor of given numbers.';

const gcdQuestion = () => {
  const num1 = getRandomIntNumber(1, 50);
  const num2 = getRandomIntNumber(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

const runGcd = () => game(gcdDescription, gcdQuestion);

export default runGcd;
