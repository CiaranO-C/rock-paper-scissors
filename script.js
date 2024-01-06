// gets random computer choice
function getComputerChoice() {
    switch(Math.floor((Math.random() * 3) + 1)) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
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




function playRound(computerChoice, playerChoice) {
if (playerChoice === "rock" && computerChoice === "paper") {return "You Lose! Paper beats Rock"}
}