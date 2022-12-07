export const task = 'What is the result of the expression?';

const maxRandomNumber = 100;
const operators = ['+', '-', '*'];

export const getQuestionAndResult = () => {
  let result;
  const randomNumberOne = Math.floor(Math.random() * maxRandomNumber);
  const randomNumberTwo = Math.floor(Math.random() * maxRandomNumber);
  const indexOperator = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[indexOperator];
  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  if (randomOperator === '+') {
    result = String(randomNumberOne + randomNumberTwo);
  } else if (randomOperator === '-') {
    result = String(randomNumberOne - randomNumberTwo);
  } else {
    result = String(randomNumberOne * randomNumberTwo);
  }
  return [question, result];
};
