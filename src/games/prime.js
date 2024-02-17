import { generateQuestionPredicateRandNum, isPrime } from '../tools.js';
import game from '../index.js';

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeQuestion = () => generateQuestionPredicateRandNum(2, 100, isPrime);

const runGcd = () => game(primeDescription, primeQuestion);

export default runGcd;
