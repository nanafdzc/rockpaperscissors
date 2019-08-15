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

 function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "paper" && computerSelection == "rock") {
        return("You win! paper beats rock");

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! rock beats scissors";

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! scissors beats paper";

    } else if (playerSelection == computerSelection) { 
        return "It's a tie!";

    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }

}

let computerSelection 
let buttons = document.querySelectorAll('input');

buttons.forEach((input) => {

input.addEventListener('click', (e) => {
   playerSelection = input.id;
   computerSelection = computerPlay();
   console.log(playRound(playerSelection,computerSelection));
    });
});

