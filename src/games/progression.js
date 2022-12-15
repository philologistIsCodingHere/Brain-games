import getRandomNumber from '../math.js';

const MAX_RANDOM_NUMBER = 100;
const ELEMENTS_COUNT = 10;

export const TASK = 'What number is missing in the progression?';

const getProgression = (numberOne, numberTwo) => {
  let num = numberOne;
  const result = [];
  const step = num - numberTwo;
  for (let i = 1; i <= ELEMENTS_COUNT; i += 1) {
    num += step;
    result.push(num);
  }
  return result;
};

export const getQuestionAndResult = () => {
  const randomNumberOne = getRandomNumber(MAX_RANDOM_NUMBER);
  const randomNumberTwo = getRandomNumber(MAX_RANDOM_NUMBER);
  let question = getProgression(randomNumberOne, randomNumberTwo);
  const randomIndex = getRandomNumber(question.length);
  const result = String(question[randomIndex]);
  question[randomIndex] = '..';
  question = question.join(' ');
  return [question, result];
};
