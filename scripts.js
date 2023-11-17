function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

    

function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a tie!";
    }

    else if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "paper"){
            return "You lose! Paper beats rock.";
        }
        else if(computerSelection.toLowerCase() === "scissors"){
            return "You win! Rock beats scissors.";
        }
        else return `${computerSelection} is not a valid input`;
    }

    else if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection.toLowerCase() === "rock"){
            return "You win! Paper beats rock.";
        }
        else if(computerSelection.toLowerCase() === "scissors"){
            return "You lose! Scissors beats paper.";
        }
        else return `${computerSelection} is not a valid input`;
    }

    else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection.toLowerCase() === "rock"){
            return "You lose! Rock beats scissors.";
        }
        else if(computerSelection.toLowerCase() === "paper"){
            return "You win! Scissors beats paper.";
        }
        else return `${computerSelection} is not a valid input`;
    }

    else{
        return "Your input was not 'rock', 'paper', or 'scissors'. Try again!";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(`Computer played ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));