
const wins = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

const hands = Object.keys(wins)

game()

function game() {
    const scores = {
        computer: 0,
        player: 0,
        draw: 0
    }
    while (scores["player"] < 3 && scores["computer"] < 3) {
        const result = playRound()
        if (!result) break
        adjustScores(scores, result)
        console.log(`Computer score = ${scores["computer"]}`);
        console.log(`Player score = ${scores["player"]}`);
    }
    return scores["player"] === 3 ? "Congrats you win!" : "Oh no! The Computer wins";
}

function playRound() {
    const playerChoice = getPlayerChoice()
    if (!playerChoice) return null
    const computerChoice = getComputerChoice()
    const result = evaluateWinner(playerChoice, computerChoice)
    return result
}

function getPlayerChoice() {
    while (true) {
        const choice = prompt("Choose your weapon!")?.toLowerCase();
        if (!choice) break;
        if (hands.includes(choice)) return choice
        alert("Please try again! Type Rock, Paper or Scissors!");
    }
}

function getComputerChoice() {
    const index = Math.floor(Math.random() * hands.length)
    return hands[index]
}

function evaluateWinner(playerChoice, computerChoice) {
    if (wins[playerChoice] === computerChoice) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}!`)
        return "player"
    } else if (wins[computerChoice] === playerChoice) {
        console.log(`You loose! ${computerChoice} beats ${playerChoice}!`)
        return "computer"
    } else {
        console.log("tie, go again!")
        return "draw";
    }
}

function adjustScores(scores, result) {
    scores[result]++
}
