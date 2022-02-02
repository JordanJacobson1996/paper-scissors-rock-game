let playerScore = 0;
let computerScore = 0;

displayScore(playerScore, computerScore);

document.getElementById('scissors').onclick = function(){
    let playerSelection = this.id;
    round(playerSelection);
}

document.getElementById('paper').onclick = function(){
    let playerSelection = this.id;
    round(playerSelection);
}

document.getElementById('rock').onclick = function(){
    let playerSelection = this.id;
    round(playerSelection);
} 


function round (playerSelection){

    let computerSelection = computerPlay();
    let resultContent;

    if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        resultContent = 'Scissors beats paper. Player won!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        resultContent = 'Paper beats rock. Player won!';
    } else if (playerSelection === 'rock' && computerSelection ==='scissors'){
        playerScore++;
        resultContent = 'Rock beats scissors. Player won!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        resultContent = 'Scissors beats paper. Computer won!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        resultContent = 'Paper beats rock. Computer won!';
    } else if (playerSelection === 'scissors' && computerSelection ==='rock'){
        computerScore++;
        resultContent = 'Rock beats Scissors. Computer won!';
    } else if (playerSelection === computerSelection){
        resultContent = "It's a draw!";
    } else {
        return null;
    }
    displayRoundResult(resultContent);
    displayScore(playerScore, computerScore);
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

function displayRoundResult (resultContent) {
    document.getElementById("roundResultPara").textContent = resultContent;
}

function displayScore (playerScore, computerScore){
    document.getElementById("pScore").textContent = "Player: " + playerScore;
    document.getElementById("cScore").textContent = "Computer: " + computerScore;
}