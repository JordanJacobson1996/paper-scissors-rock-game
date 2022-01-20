let computerSelection = computerPlay();

function computerPlay (){
    const options = ["rock", "paper", "scissors"];

    computerOutput = (Math.floor(Math.random() * options.length));
    return (computerOutput, options[computerOutput]);
}

function round (computerSelection, playerSelection){
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'scissor' && computerSelection === 'paper' ){
        return ("Player Won!")
    } else {
        return ("Computer Won!");
    }
}

