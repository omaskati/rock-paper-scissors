function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

    

function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return [0, "It's a tie!"];
    }

    else if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "paper"){
            return [-1, "You lose! Paper beats rock."];
        }
        else if(computerSelection.toLowerCase() === "scissors"){
            return [1, "You win! Rock beats scissors."];
        }
        else return `${computerSelection} is not a valid input`;
    }

    else if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection.toLowerCase() === "rock"){
            return [1, "You win! Paper beats rock."];
        }
        else if(computerSelection.toLowerCase() === "scissors"){
            return [-1, "You lose! Scissors beats paper."];
        }
        else return `${computerSelection} is not a valid input`;
    }

    else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection.toLowerCase() === "rock"){
            return [-1, "You lose! Rock beats scissors."];
        }
        else if(computerSelection.toLowerCase() === "paper"){
            return [1, "You win! Scissors beats paper."];
        }
        else return `${computerSelection} is not a valid input`;
    }

    else{
        return [undefined, "Your input was not 'rock', 'paper', or 'scissors'. Try again!"];
    }
}

function game(){
    let numPlayerWins = 0;
    let numCompWins = 0;
    let numTies = 0;
    for (let i=1; i<6; i++){
        let playerSelection = prompt("Choose 'rock', 'paper', or 'scissors'!");
        while(playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors"){
            playerSelection = prompt("Try again. Choose 'rock', 'paper', or 'scissors'!")
        }
        let computerSelection = getComputerChoice();
        console.log(`Computer played ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        console.log(result[1]);
        if(result[0] === 1){
            numPlayerWins++;
        }
        else if(result[0] === 0){
            numTies++;
        }
        else if(result[0] === -1){
            numCompWins++;
        }
        else return;

        console.log(`Your record after Round ${i}: ${numPlayerWins}-${numCompWins}-${numTies}`);
    }

    console.log(numPlayerWins>numCompWins?"You win!":(numPlayerWins<numCompWins?"You lose :(": "Draw."));
    return true;
}