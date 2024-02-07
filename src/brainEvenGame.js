import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomIntNumber = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isEven = (number) => number % 2 === 0;

const askQuestion = () => {
  const askedNumber = getRandomIntNumber(0, 100);
  console.log(`Question: ${askedNumber}`);
  return askedNumber;
};

const getAnswer = () => readlineSync.question('Your answer: ');

const getCorrectAnswer = (askedNumber) => (isEven(askedNumber) ? 'yes' : 'no');

const brainEvenGame = () => {
  const rounds = 3;
  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i += 1) {
    const askedNumber = askQuestion();
    const correctAnswer = getCorrectAnswer(askedNumber);
    const answer = getAnswer();
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEvenGame;
