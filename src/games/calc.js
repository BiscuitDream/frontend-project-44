import { getRandomIntNumber } from '../tools.js';
import game from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomIntNumber(0, 2);
  return operators[randomIndex];
};

const getResult = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Unexpected operator');
  }
};

const calcDescription = 'What is the result of the expression?';

const calcQuestion = () => {
  const num1 = getRandomIntNumber(0, 30);
  const num2 = getRandomIntNumber(0, 30);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(getResult(num1, num2, operator));
  return [question, correctAnswer];
};

const runCalc = () => game(calcDescription, calcQuestion);

export default runCalc;
