import getRandomNumber from '../math.js';

export const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (numberOne, numberTwo) => {
  let num1 = numberOne;
  let num2 = numberTwo;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return String(num1 + num2);
};

const MAX_RANDOM_NUMBER = 100;

export const getQuestionAndResult = () => {
  const randomNumberOne = getRandomNumber(MAX_RANDOM_NUMBER);
  const randomNumberTwo = getRandomNumber(MAX_RANDOM_NUMBER);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const result = getGcd(randomNumberOne, randomNumberTwo);
  return [question, result];
};
