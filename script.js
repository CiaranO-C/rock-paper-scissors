const wins = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

const hands = Object.values(wins);

let scores = {
tie : 0,
playerScore : 0,
computerScore : 0,
};

let rounds=0;

let pScore = document.getElementById("player-score");
let cScore = document.getElementById("computer-score");
let tScore = document.getElementById('tie');
let winner = document.querySelector(".winner");
let buttons = document.querySelectorAll("button");
let playerWins = document.querySelector('#player-wins');
let compWins = document.querySelector('#comp-wins');

//writes user name above character
let pName = document.getElementById("player-name");
pName.textContent = prompt("What's your name?");

//play single round
function playRound(playerChoice, computerChoice) {
    console.log(playerChoice); //test
    console.log(computerChoice); //test
if (wins[playerChoice] === computerChoice) {
    return tally('player');
} else if (wins[computerChoice] === playerChoice) {
    return tally('computer');
} else 
    return tally('tie');
}


function getComputerChoice() {
return hands[Math.floor(Math.random()*hands.length)];
}


buttons.forEach(function(button) {
    button.addEventListener('click', function(event){
        playRound(event.target.alt, getComputerChoice());
    });
});


function tally(roundResult) {
    if (roundResult === 'player') {
        ++scores.playerScore;
        pScore.textContent = scores.playerScore;
    } else if (roundResult === 'computer') {
        ++scores.computerScore;
        cScore.textContent = scores.computerScore;
    } else {++scores.tie;
    tScore.textContent = scores.tie;
    }
    if (scores.playerScore > 2 || scores.computerScore > 2) {
        checkScores(scores.playerScore, scores.computerScore);
    }
}



function checkScores(player, computer){
    let point = document.createElement('img');
    point.src = './score-dot.png';
if (player > 2) {
    winner.textContent = pName.textContent;
    playerWins.appendChild(point);
} else if (computer > 2) {
    winner.textContent = "Computer!";
    compWins.appendChild(point);
}
//resets object values to 0
Object.keys(scores).forEach(function(key) {
scores[key] = 0;
});

pScore.textContent = 0;
cScore.textContent = 0;
tScore.textContent = 0;
}



