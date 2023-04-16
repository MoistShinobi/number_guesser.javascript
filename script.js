let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    // Generate a random integer between 0 and 9
    return Math.floor(Math.random() * 10);
};

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    const humanDifference = Math.abs(targetNumber - humanGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);

    if (humanDifference <= computerDifference) {
        return true; // human wins
    } else {
        return false; // computer wins
    }
};

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

function advanceRound() {
    currentRoundNumber++;
};
