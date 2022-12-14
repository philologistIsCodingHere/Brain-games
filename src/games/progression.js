import getRandomNumber from '../math.js';

export const task = 'What number is missing in the progression?';

const ELEMENTS_COUNT = 10;

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

const MAX_RANDOM_NUMBER = 100;

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
