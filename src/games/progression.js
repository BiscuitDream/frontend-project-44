import { getRandomIntNumber } from '../tools.js';
import game from '../index.js';

const minProgressionLength = 5;
const maxProgressionLength = 10;

const progressionDescription = 'What number is missing in the progression?';

const generateProgression = (length, diff) => {
  const firstElem = getRandomIntNumber(1, 30);
  const progression = [firstElem];

  for (let i = 1; i < length; i += 1) {
    const newElem = progression[i - 1] + diff;
    progression.push(newElem);
  }

  return progression;
};

const progressionQuestion = () => {
  const length = getRandomIntNumber(minProgressionLength, maxProgressionLength);
  const progressionDifference = getRandomIntNumber(1, 15);
  const hiddenElementIndex = getRandomIntNumber(0, length - 1);

  const progression = generateProgression(length, progressionDifference);
  const correctAnswer = String(progression[hiddenElementIndex]);

  const beforeHidden = hiddenElementIndex !== 0 ? `${progression.slice(0, hiddenElementIndex).join(' ')} ` : '';
  const afterHidden = progression.slice(hiddenElementIndex + 1).join(' ');
  const question = `${beforeHidden}.. ${afterHidden}`;

  return [question, correctAnswer];
};

const runProgression = () => game(progressionDescription, progressionQuestion);

export default runProgression;
