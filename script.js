let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//first we generate the target number
let generateTarget = () => {
 return Math.floor(Math.random() * 10);
}

//work out a formula for calculating the absolute distance
let getAbsoluteDistance = (num1, num2) => {
  let distance = Math.abs(num1 - num2);
  return distance;
}

//next we compare each guess to the target number
let compareGuesses = (humanGuess, compGuess, target) => {
  let humanDistance = getAbsoluteDistance(humanGuess, target);
  let compDistance = getAbsoluteDistance(compGuess, target);
  return humanDistance <= compDistance;
}

//then we update the score
let updateScore = winner => {
  let humanScore = 0;
  let computerScore = 0;
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
}

//then we advance the round
let advanceRound = () => {
  currentRoundNumber++;
}


