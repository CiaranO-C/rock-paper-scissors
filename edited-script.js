
//to start with, a not on file organisation. Maybe overkill here but consider a larger project where someone new comes across your file and needs to 
//make adjustments - the purpose of the file and necessary variables should be the first thing they see. 

//in this case we have the wins object, the array (reasoning for this addition below), and the function call for game- the entry point is immediately 
//clear to the reader. 

//now, walk through the game function, the first function call is getPlayerChoice, which is the function immediately below the game definition. The 
// organisation of the logic follows the order in which it is read, with the variables which can be adjusted to change the game at the very top of the page- 
// it's easy to make a couple tweaks and move on.

//again, overkill for this but its a good practice and one you will appreciate when dealing with large projects

const wins = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};


// object.Keys makes an array of the keys of an object, so hands is now ["rock", "paper", "scissors"] - not necessarily in that order but the point
// is that it populates an array with the keys of an object, in cases where you will need to pull a value randomly (computerChoice), this is ideal

// if you now add a property to wins like- plastic: "rock"
// the rest of the program would consider this a valid hand for the game, and it only took a single line!  

const hands = Object.keys(wins)

game()

function game() {
     //flow follows data, sort your data out and your life becomes so much easier- the object now allows us to access the correct property by name, or by the 
    //value stored in the variable returned from play round
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

//overkill here, but just highlighting the idea is to make it clear what's going on- scores are dependent on round results but adjusting score is a seperate 
//piece of functionality
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
        //dont need an if else chain, it will break, or return, or log an alert and repeat
        if (!choice) break;
        //choice can be directly returned without breaking out first
        if (hands.includes(choice)) return choice
        alert("Please try again! Type Rock, Paper or Scissors!");
    }
}

// gets random computer choice
function getComputerChoice() {
    //as we made an array, we can remove the switch for greater extensibility, similar approach, however, this time we 0 base the random number (so no +1), 
    //and use it as the index for the array. 
    // on a side note, by default return breaks out of a switch case, you only need break or return, not both

    //clarity of intention, store the random number as an index- don't use magic numbers (hardcoded values like 3)
    const index = Math.floor(Math.random() * hands.length)
    return hands[index]
}

function evaluateWinner(playerChoice, computerChoice) {
    //log the message you wish to display before returning a value which represents the winner of the round, the idea of returning the 'you win' message is on
    //the right track, but its harder to read at a glance, and contains other information which makes the new approach of key accessing much much harder
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

//overkill here, but the idea is just to highlight explicit units of functionality, dont tightly couple the round logic with the score logic- what if you want
// to add, for example, a random chance of bonus points? a win streak? 
function adjustScores(scores, result) {
    scores[result]++
}

