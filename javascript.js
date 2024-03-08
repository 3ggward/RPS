let userScore = 0;
let cpuScore = 0;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getComputerChoice() {    
    switch (randomIntFromInterval(1, 3)) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    // while (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
    //     playerSelection = prompt("Invalid input! Pick Rock, Paper, or Scissors:").toLowerCase();
    // }

    switch (true) {
        case (playerSelection == computerSelection):
            return "A tie! You and the computer both chose " + playerSelection;
        case (playerSelection == "rock" && computerSelection == "paper"):
            cpuScore++;
            return "You lose! Paper beats Rock";
        case (playerSelection == "rock" && computerSelection == "scissors"):
            userScore++;
            return "You win! Rock beats Scissors";
        case (playerSelection == "paper" && computerSelection == "rock"):
            userScore++;
            return "You win! Paper beats Rock";
        case (playerSelection == "paper" && computerSelection == "scissors"):
            cpuScore++;
            return "You lose! Scissors beats Paper"; 
        case (playerSelection == "scissors" && computerSelection == "paper"):
            userScore++;
            return "You win! Scissors beats Paper";
        case (playerSelection == "scissors" && computerSelection == "rock"):
            cpuScore++;
            return "You lose! Rock beats Scissors";
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), getComputerChoice()));
    }

    console.log("You won " + userScore + " rounds!");
    console.log("The computer won " + cpuScore + " rounds!");

    if (userScore == cpuScore) {
        console.log("It's a tie!");
    } else if (userScore > cpuScore) {
        console.log("You won!!!");
    } else {
        console.log("CPU won!!!");
    }
}

playGame();