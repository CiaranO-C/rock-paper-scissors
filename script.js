// gets random computer choice
function getComputerChoice() {
    switch(Math.floor((Math.random() * 3) + 1)) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break
    }
}

// gets player choice, while loop until a correct entry is made
function getPlayerChoice() {
    let choice;
    while(true) {
        choice = prompt("Choose your weapon!", '');

        if (choice === null) {
            alert("See ya next time!");
            break; //exit loop if user selects cancel prompt
        }

        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
         break; //exit loop if choice is valid   
        } else {
         alert("Please try again! Type Rock, Paper or Scissors!");
        }  
    }
    return choice;
}




function playRound(playerChoice, computerChoice) {
    console.log(playerChoice); //test
    console.log(computerChoice); //test
if (wins[playerChoice] === computerChoice) {
    playerScore++;
    return ("You win! " + playerChoice + " beats " + computerChoice + "!");
} else if (wins[computerChoice] === playerChoice) {
    computerScore++;
    return ("You Loose! " + computerChoice + " beats " + playerChoice + "!");
} else if (playerChoice === computerChoice) {
    return "Tie! Go again!";
}
}


const wins = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

let computerScore = 0
let playerScore = 0

function game(){
    while(playerScore < 3 && computerScore < 3) {
    playRound(getPlayerChoice(), getComputerChoice());
    console.log("comp score = " + computerScore); //test
    console.log("player score = " + playerScore); //test
    }
    if (playerScore === 3) {
       return "Congrats you win!"; //test
    } else return "Oh no! computer wins";
}

console.log(game());