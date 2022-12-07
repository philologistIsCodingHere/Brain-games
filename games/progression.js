export const task = 'What number is missing in the progression?';

const maxRandomNumber = 100;
const elementsCount = 10;

export const getQuestionAndResult = () => {
  let question = [];
  let randomNumberOne = Math.floor(Math.random() * maxRandomNumber);
  const randomNumberTwo = Math.floor(Math.random() * maxRandomNumber);
  const step = randomNumberOne - randomNumberTwo;
  for (let i = 1; i <= elementsCount; i += 1) {
    randomNumberOne += step;
    question.push(randomNumberOne);
  }
  const randomIndex = Math.floor(Math.random() * question.length);
  const result = String(question[randomIndex]);
  question[randomIndex] = '..';
  question = question.join(' ');
  return [question, result];
};
