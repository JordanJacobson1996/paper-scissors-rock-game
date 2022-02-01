let playerScore = 0;
let computerScore = 0;

document.getElementById('Scissors').onclick = function(){
    let playerSelection = this.id;
    round(playerSelection);
}

document.getElementById('Paper').onclick = function(){
    let playerSelection = this.id;
    round(playerSelection);
}

document.getElementById('Rock').onclick = function(){
    let playerSelection = this.id;
    round(playerSelection);
} 


function round (playerSelection){

    let computerSelection = computerPlay();

    if (playerSelection === 'Scissors' && computerSelection === 'paper'){
        playerScore++;
        return ('Scissors beats paper. Player won!');
    } else if (playerSelection === 'Paper' && computerSelection === 'rock'){
        playerScore++;
        return ('Paper beats rock. Player won!');
    } else if (playerSelection === 'Rock' && computerSelection ==='scissors'){
        playerScore++;
        return ('Rock beats scissors. Player won!');
    } else if (playerSelection === 'Paper' && computerSelection === 'scissors') {
        computerScore++;
        return ('Scissors beats paper. Computer won!')
    } else if (playerSelection === 'Rock' && computerSelection === 'paper'){
        computerScore++;
        return ('Paper beats rock. Computer won!');
    } else if (playerSelection === 'Scissors' && computerSelection ==='rock'){
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
    } else if (computerScore > playerScore){
        return ("Computer won! Score:" + computerScore + "-" + playerScore);
    } else {
        return ("Its a draw!")
    }
}
