import getRandomNumber from '../math.js';

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const MAX_RANDOM_NUMBER = 100;

export const getQuestionAndResult = () => {
  let result;
  const question = getRandomNumber(MAX_RANDOM_NUMBER);
  if (isPrime(question)) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [question, result];
};
