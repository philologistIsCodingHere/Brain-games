import getRandomNumber from '../math.js';

const MAX_RANDOM_NUMBER = 100;

export const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const getQuestionAndResult = () => {
  let answer;
  const question = getRandomNumber(MAX_RANDOM_NUMBER);
  if (isEven(question)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};
