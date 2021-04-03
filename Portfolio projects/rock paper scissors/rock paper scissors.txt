var userChoice = 'Rock'
var computerChoice
const getUserChoice = userChoice => {
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors'){
    userChoice = userChoice.toLowerCase();
      return userChoice
  } else if (userChoice === 'bomb') {
  console.log('You threw a bomb! You won!')
  } else {
    console.log('Please write rock, paper or scissors')
  }
};
const getComputerChoice = computerChoice => Math.floor(Math.random * 3)
  switch (getComputerChoice) {
    case 0:
      return computerChoice = 'rock';
    case 1:
      return computerChoice = 'paper';
    case 2:
      return computerChoice = 'scissors';
  }
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return `That's a tie!`
    }
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
    return 'The computer won!'
  } else {
    return 'You won!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }

  const playGame = () => {
    console.log(`You threw: ${userChoice}.`);
    console.log(`The computer threw: ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();