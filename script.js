function computerPlay() {
    let random = (Math.floor(Math.random() * 3) + 1);

    if (random == 1) {
        return("rock");

    } else if (random == 2) {
            return("scissors");
       
    } else {
        return("paper");
    }
 } 

 const displayResult = document.querySelector('#results');

 function playRound(playerSelection, computerSelection) {
  

    if (playerSelection == "paper" && computerSelection == "rock") {
        displayResult.textContent = "You win! paper beats rock";

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        displayResult.textContent = "You win! rock beats scissors";

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        displayResult.textContent = "You win! scissors beats paper";

    } else if (playerSelection == computerSelection) { 
        displayResult.textContent = "It's a tie!";

    } else {
        displayResult.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
    };
};

function score(playerSelection, computerSelection) {
            
    if (playerSelection == "paper" && computerSelection == "rock") {
         playerScore++;
       
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;

    } else if (playerSelection == computerSelection) { 
        

    } else {
        computerScore++;
    }         
};

let computerSelection 
let buttons = document.querySelectorAll('input');
let playerScore = 0;
let computerScore = 0;

const selections = document.querySelector('#selections');
const showSelection = document.createElement('div');
showSelection.classList.add('showSelection');

const gameScore = document.createElement('div');
gameScore.classList.add('score');


buttons.forEach((input) => {

input.addEventListener('click', (e) => {
   playerSelection = input.id;
   computerSelection = computerPlay();
   console.log(playRound(playerSelection,computerSelection));
   console.log(score(playerSelection, computerSelection));

   showSelection.textContent = 'Computer Selection: ' + computerSelection;
   selections.appendChild(showSelection);

   gameScore.textContent = ' Player : ' + playerScore + ' Computer : ' + computerScore;
   selections.appendChild(gameScore);
    });
});

