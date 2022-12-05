export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxRandomNumber = 100;
export const getQuestionAndResult = () => {
  let result;
  const question = Math.floor(Math.random() * maxRandomNumber);
  if (question % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [question, result];
};
