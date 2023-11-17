function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

    

function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return [0, "It's a tie this round!"];
    }

    else if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "paper"){
            return [-1, "You lose this round! Paper beats rock."];
        }
        else if(computerSelection.toLowerCase() === "scissors"){
            return [1, "You win this round! Rock beats scissors."];
        }
        else return `${computerSelection} is not a valid input`;
    }

    else if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection.toLowerCase() === "rock"){
            return [1, "You win this round! Paper beats rock."];
        }
        else if(computerSelection.toLowerCase() === "scissors"){
            return [-1, "You lose this round! Scissors beats paper."];
        }
        else return `${computerSelection} is not a valid input`;
    }

    else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection.toLowerCase() === "rock"){
            return [-1, "You lose this round! Rock beats scissors."];
        }
        else if(computerSelection.toLowerCase() === "paper"){
            return [1, "You win this round! Scissors beats paper."];
        }
        else return `${computerSelection} is not a valid input`;
    }

    else{
        return [undefined, "Your input was not 'rock', 'paper', or 'scissors'. Try again!"];
    }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const winnerDiv = document.querySelector("#winner");
const roundResultDisplay = document.querySelector("#roundResult");

rockButton.addEventListener('click', ()=>{game("rock")});
paperButton.addEventListener('click', ()=>{game("paper")});
scissorsButton.addEventListener('click', ()=>{game("scissors")});

let numPlayerWins = 0;
let numCompWins = 0;
//let numTies = 0;

function updateScore(winner, score){
    let winnerScorePara = document.querySelector(`p#${winner}Score`);
    winnerScorePara.innerText=score;

}

function game(playerSelection){

    if(numPlayerWins === 5 || numCompWins === 5) return false;
    let computerSelection = getComputerChoice();
    roundResultDisplay.innerText = `Computer played ${computerSelection}.`;
    let result = playRound(playerSelection, computerSelection);
    roundResultDisplay.innerText += " " + result[1];
    if(result[0] === 1){
        updateScore("player", ++numPlayerWins);
        if(numPlayerWins === 5) announceWinner("player");
    }
    else if(result[0] === 0){
        //numTies++;
    }
    else if(result[0] === -1){
        updateScore("comp", ++numCompWins);
        if(numCompWins === 5) announceWinner("comp");
    }
    else return;
    return true;
}

function announceWinner(winner){
    let winnerAnnouncement = document.createElement("h2");
    winnerAnnouncement.innerText=`${winner.toUpperCase()} wins the game!`;
    winnerDiv.appendChild(winnerAnnouncement);
}