 
        //Random computer play
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
 
         //Computer vs Player Round
        
         
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
         let playerSelection
         let playerScore = 0;
         let computerScore = 0;
        
        //Game round

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
                return (' Player : ' + playerScore + ' Computer : ' + computerScore);
                
         }

 
            // Five rounds game

         function game() {

            for (let i = 0; i < 5; i++) {
                    let selection = prompt("Rock, Paper, or Scissors?");
                    let playerSelection = selection.toLowerCase();
                    let computerSelection = computerPlay();
                   
                    console.log(playRound(playerSelection, computerSelection));
                    console.log(score(playerSelection, computerSelection));
            }
             
             if (playerScore > computerScore) {
                 return ("You win! WOOOHOO!")
             } else {
                 return ("BOOHOO! You are a loser!")
             }

            }