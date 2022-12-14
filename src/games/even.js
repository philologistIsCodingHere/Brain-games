import getRandomNumber from '../math.js';

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const MAX_RANDOM_NUMBER = 100;

export const getQuestionAndResult = () => {
  let result;
  const question = getRandomNumber(MAX_RANDOM_NUMBER);
  if (isEven(question)) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [question, result];
};
