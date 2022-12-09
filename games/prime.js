export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxRandomNumber = 100;

export const getQuestionAndResult = () => {
  let result;
  const question = Math.floor(Math.random() * maxRandomNumber);
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      result = 'no';
      break;
    } else {
      result = 'yes';
    }
  }
  if (question === 2) {
    result = 'yes';
  } else if (question === 0 || question === 1) {
    result = 'no';
  }
  return [question, result];
};
