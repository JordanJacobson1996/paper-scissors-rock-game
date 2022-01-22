let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i= 0; i < 6; i++){
        let playerSelection = prompt("paper, scissors, rock?");
        let computerSelection = computerPlay();

        computerPlay();
        console.log(round(computerSelection, playerSelection));
    }
    console.log(winner(playerScore, computerScore));
}


function round (computerSelection, playerSelection){
    computerPlay();
    if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return ('Scissors beats paper. Player won!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return ('Paper beats rock. Player won!');
    } else if (playerSelection === 'rock' && computerSelection ==='scissors'){
        playerScore++;
        return ('Rock beats scissors. Player won!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return ('Scissors beats paper. Computer won!')
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return ('Paper beats rock. Computer won!');
    } else if (playerSelection === 'scissors' && computerSelection ==='rock'){
        computerScore++;
        return ('Rock beats scissors. Computer won!');
    } else if (playerSelection === computerSelection){
        return ("It's a draw!");
    } else {
        return null;
    }
}

function computerPlay (){
    const options = ["rock", "paper", "scissors"];
    computerOutput = (Math.floor(Math.random() * options.length));
    return (computerOutput, options[computerOutput]);
}

function winner (playerScore, computerScore){
    if (playerScore > computerScore){
        return ("Player won! Score:" + playerScore + "-" + computerScore);
    } else {
        return ("Computer won! Score:" + computerScore + "-" + playerScore);
    }
}