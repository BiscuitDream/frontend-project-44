import { generateQuestionPredicateRandNum, isEven } from '../tools.js';
import game from '../index.js';

const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenQuestion = () => generateQuestionPredicateRandNum(0, 100, isEven);

const runEven = () => game(evenDescription, evenQuestion);

export default runEven;
