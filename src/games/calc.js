import getRandomNumber from '../math.js';

export const task = 'What is the result of the expression?';

const getCalc = (numberOne, operator, numberTwo) => {
  let result = '';
  if (operator === '+') {
    result = String(numberOne + numberTwo);
  } else if (operator === '-') {
    result = String(numberOne - numberTwo);
  } else {
    result = String(numberOne * numberTwo);
  }
  return result;
};

const MAX_RANDOM_NUMBER = 100;
const OPERATORS = ['+', '-', '*'];

export const getQuestionAndResult = () => {
  let result = '';
  const randomNumberOne = getRandomNumber(MAX_RANDOM_NUMBER);
  const randomNumberTwo = getRandomNumber(MAX_RANDOM_NUMBER);
  const indexOperator = getRandomNumber(OPERATORS.length);
  const randomOperator = OPERATORS[indexOperator];
  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  result = getCalc(randomNumberOne, randomOperator, randomNumberTwo);
  return [question, result];
};
