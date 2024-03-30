window.addEventListener("DOMContentLoaded", () => { 
    let userScore = 0;
    let cpuScore = 0;
    const userScoreText = document.querySelector(".userText");
    const cpuScoreText = document.querySelector(".cpuText");
    const results = document.querySelector("#result");
    userScoreText.textContent = "User Score: " + userScore;
    cpuScoreText.textContent = "CPU Score: " + cpuScore;

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    rockButton.onclick = () => playRound("rock");
    paperButton.onclick = () => playRound("paper");
    scissorsButton.onclick = () => playRound("scissors");


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

    function playRound(playerSelection) {
        // while (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
        //     playerSelection = prompt("Invalid input! Pick Rock, Paper, or Scissors:").toLowerCase();
        // }
        const computerSelection = getComputerChoice();

        switch (true) {
            case (playerSelection == computerSelection):
                results.textContent = "A tie! You and the computer both chose " + playerSelection;
                break;
            case (playerSelection == "rock" && computerSelection == "paper"):
                cpuScore++;
                results.textContent = "You lose! Paper beats Rock";
                updateScore();
                break;
            case (playerSelection == "rock" && computerSelection == "scissors"):
                userScore++;
                results.textContent = "You win! Rock beats Scissors";
                updateScore();
                break;
            case (playerSelection == "paper" && computerSelection == "rock"):
                userScore++;
                results.textContent = "You win! Paper beats Rock";
                updateScore();
                break;
            case (playerSelection == "paper" && computerSelection == "scissors"):
                cpuScore++;
                results.textContent = "You lose! Scissors beats Paper";
                updateScore();
                break;
            case (playerSelection == "scissors" && computerSelection == "paper"):
                userScore++;
                results.textContent = "You win! Scissors beats Paper";
                updateScore();
                break;
            case (playerSelection == "scissors" && computerSelection == "rock"):
                cpuScore++;
                results.textContent = "You lose! Rock beats Scissors";
                updateScore();
                break;
        }

        if (userScore  == 5 || cpuScore == 5) {
            winScreen();
        }
    }

    function updateScore() {
        userScoreText.textContent = "User Score: " + userScore;
        cpuScoreText.textContent = "CPU Score: " + cpuScore;
    }

    function winScreen() {
        if (userScore == 5) {
            document.querySelector("h1").textContent = "You Won!!";
        } else {
            document.querySelector("h1").textContent = "CPU Won!!";
        }

        rockButton.replaceWith(rockButton.cloneNode(true));
        paperButton.replaceWith(paperButton.cloneNode(true));
        scissorsButton.replaceWith(scissorsButton.cloneNode(true));
        exit();
    }
});


// function playGame() {
//     for (i = 0; i < 5; i++) {
//         console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), getComputerChoice()));
//     }

//     console.log("You won " + userScore + " rounds!");
//     console.log("The computer won " + cpuScore + " rounds!");

//     if (userScore == cpuScore) {
//         console.log("It's a tie!");
//     } else if (userScore > cpuScore) {
//         console.log("You won!!!");
//     } else {
//         console.log("CPU won!!!");
//     }
// }

// playGame();