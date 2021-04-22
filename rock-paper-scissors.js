const getUserChoice = userInput => {userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput;
} else {
  console.log(`${userInput} is an invalid option.`)}
};

//console.log(getUserChoice('rock'))

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors'
    break;
  };
 return randomNumber
};

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
  return "Tie"
};
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'Computer wins.';
  } else {
    return 'User wins.';
    }
};
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer wins.';
  } else {
    return 'User wins.';
    }
};

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer wins.';
  } else {
    return 'User wins.';
    }
};

};

//console.log(determineWinner('rock', 'scissors'));

function playGame () {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame()









