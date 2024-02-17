export const getRandomIntNumber = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isEven = (number) => number % 2 === 0;

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

export const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a > 0 && b > 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return Math.max(a, b);
};

export const generateQuestionPredicateRandNum = (randomFrom, randomTo, predicate) => {
  const question = getRandomIntNumber(randomFrom, randomTo);
  const correctAnswer = predicate(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
