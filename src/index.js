import readlineSync from 'readline-sync';

const gamesLogic = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.task);
  for (let i = 1; i <= 3; i += 1) {
    const [question, result] = game.getQuestionAndResult(); // question, result = ['16 + 25', '41'];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gamesLogic;