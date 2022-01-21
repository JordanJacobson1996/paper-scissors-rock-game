let playerSelection = 'scissors';
let computerSelection = computerPlay();


function computerPlay (){
    const options = ["rock", "paper", "scissors"];

    computerOutput = (Math.floor(Math.random() * options.length));
    return (computerOutput, options[computerOutput]);
}

function round (computerSelection, playerSelection){
    computerPlay();
    if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return ('Scissors beats paper. Player won!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return ('Paper beats rock. Player won!');
    } else if (playerSelection === 'rock' && computerSelection ==='scissors'){
        return ('Rock beats scissors. Player won!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return ('Scissors beats paper. Computer won!')
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return ('Paper beats rock. Computer won!');
    } else if (playerSelection === 'scissors' && computerSelection ==='rock'){
        return ('Rock beats scissors. Computer won!');
    } else if (playerSelection === computerSelection){
        return ("It's a draw!");
    } else {
        return null;
    }
}

console.log(round(computerSelection, playerSelection));