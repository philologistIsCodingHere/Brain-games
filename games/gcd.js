export const task = 'Find the greatest common divisor of given numbers.';

const maxRandomNumber = 100;

export const getQuestionAndResult = () => {
  let result = '';
  let randomNumberOne = Math.floor(Math.random() * maxRandomNumber);
  let randomNumberTwo = Math.floor(Math.random() * maxRandomNumber);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  while (randomNumberOne !== 0 && randomNumberTwo !== 0) {
    if (randomNumberOne > randomNumberTwo) {
      randomNumberOne %= randomNumberTwo;
    } else {
      randomNumberTwo %= randomNumberOne;
    }
  }
  result = String(randomNumberOne + randomNumberTwo);
  return [question, result];
};
