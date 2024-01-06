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

function getUserChoice() {
   let choice = prompt("Choose your weapon!", '');
   choice = choice.toLowerCase();
   if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice
   } else {
    alert("Please try again! Type Rock, Paper or Scissors!");
    return getUserChoice();
   }
}

console.log(getUserChoice());