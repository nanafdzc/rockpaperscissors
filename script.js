 
        //Random computer play
        function computerPlay() {
            let random = (Math.floor(Math.random() * 3) + 1);
 
            if (random == 1) {
                return("Rock");
 
            } else if (random == 2) {
                    return("Scissors");
               
            } else {
                return("Paper");
            }
         } 
 
         //Computer vs Player Round
         const computerSelection = computerPlay();
         let selection = prompt("Rock, Paper or Scissors?");
         let playerSelection = capitalize(selection);
 
         //Case insensitive
         function capitalize() {
         let lowercase = selection.toLowerCase();
         let capital = lowercase.charAt(0).toUpperCase();
         let result = capital + lowercase.slice(1);
         return(result)
          }
         
         
         function playRound(playerSelection, computerSelection) {
             if (playerSelection == "Paper" && computerSelection == "Rock") {
                 console.log("You win! Paper beats Rock");
 
             } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
                 console.log("You win! Rock beats Scissors");
 
             } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
                 console.log("You win! Scissors beats Paper");
 
             } else if (playerSelection == computerSelection) { 
                 console.log("It's a tie!")
 
             } else {
                 console.log("You lose! " + computerSelection + " beats " + playerSelection );
             }
 
         }
        
        //Game round
 
         let computerScore 
         let playerScore
 
         function score(playerSelection, computerSelection) {
             if (playerSelection == "Paper" && computerSelection == "Rock") {
                  playerScore = 1; 
                  computerScore = 0;
 
             } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
                 playerScore = 1;
                 computerScore = 0;
 
             } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
                 playerScore = 1;
                 computerScore = 0;
 
             } else if (playerSelection == computerSelection) { 
                 playerScore = 1;
                 computerScore = 1;
 
             } else {
                 playerScore = 0;
                 computerScore = 1;
             }
             console.log(' Player : ' + playerScore + ' Computer : ' + computerScore);
         }
 
         
         function game() {
             return playRound(playerSelection, computerSelection);
             return score(playerSelection, computerSelection);
             
 
         }
 