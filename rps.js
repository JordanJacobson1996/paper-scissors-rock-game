let playerScore = 0;
let computerScore = 0;
let playerSelection;

document.getElementById('Scissors').onclick = function (e){
    return playerSelection = 'scissors';
}

document.getElementById('Paper').onclick = function (e){
    return playerSelection = 'paper';
}

document.getElementById('Rock').onclick = function (e){
    return playerSelection = 'rock';
}

function round (playerSelection, computerSelection){
    if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(playerSelection, computerSelection);
        playerScore++;
        return ('Scissors beats paper. Player won!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(playerSelection, computerSelection);
        playerScore++;
        return ('Paper beats rock. Player won!');
    } else if (playerSelection === 'rock' && computerSelection ==='scissors'){
        console.log(playerSelection, computerSelection);
        playerScore++;
        return ('Rock beats scissors. Player won!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log(playerSelection, computerSelection);
        computerScore++;
        return ('Scissors beats paper. Computer won!')
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log(playerSelection, computerSelection);
        computerScore++;
        return ('Paper beats rock. Computer won!');
    } else if (playerSelection === 'scissors' && computerSelection ==='rock'){
        console.log(playerSelection, computerSelection);
        computerScore++;
        return ('Rock beats scissors. Computer won!');
    } else if (playerSelection === computerSelection){
        console.log(playerSelection, computerSelection);
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