let playerScore = 0;    //initializes scores
let computerScore = 0;
let tieCount = 0;

function playRound() {
    function playerPlay() {             //get input from user and assign to variable - return
        //let playerSelection = prompt(/*"Round " + round + */": Rock paper scissors, 1-2-3! Type your choice:");
        let playerSelection = 
        console.log('You chose '+ playerSelection);
        return playerSelection;
        }

    function computerPlay() {           //generate computer's choice and assign it to variable - return
        let choiceArray = ["rock","paper","scissors"]                               //array of choices
        let randomChoice = Math.floor(Math.random()*choiceArray.length);            //random choice of index
        let computerSelection = choiceArray[randomChoice];                          // choose string associated with chosen index
        console.log("The computer chose "+ computerSelection);
        return computerSelection;
        }

    const playerSelection = playerPlay();        //set playerSelection const
                            
    function compare(playerSelection, computerSelection) {    //compare computer's choice with playe r's choice and print results  
            
        //set result variables    
        let tie = "    Tied round";      
        let win = "   You win the round!";
        let loss = "   Computer wins the round.";

        if (playerSelection == computerSelection) {
            tieCount = tieCount +1; // add point to tie count
            return tie;
        }
        else {
            if (playerSelection == 'rock') {
                if (computerSelection == 'scissors') {
                    playerScore = playerScore + 1;  // add point to playerScore  
                    return win; 
                }
                else if (computerSelection == 'paper') {
                    computerScore = computerScore + 1; // add point to computerPoint
                    return loss;
                }
            }
            else if (playerSelection == 'paper') {
                if (computerSelection == 'rock'){
                    playerScore = playerScore + 1;  // add point to playerScore 
                    return win;  
                }
                else if (computerSelection == 'scissors'){
                    computerScore = computerScore + 1;  // add point to computerPoint
                    return loss;
                }
            }
            else if (playerSelection == 'scissors') {
                if (computerSelection == 'paper'){
                    playerScore = playerScore + 1;   // add point to playerScore
                    return win;  
                }
                else if (computerSelection == 'rock'){
                    computerScore = computerScore + 1;  // add point to computerPoint
                    return loss;
                }
                
            }
        }
    }

    function getResult() {
        let result = compare(playerSelection, computerSelection);
        console.log(result);
    }

    function getScore() {        
        console.log("Your score: " + playerScore + " Computer score: " + computerScore + " Tie count: " + tieCount);
    }

    getResult();
    getScore();
}



function game() {          //loops round five times                                          //to-do:   //report winner at the end
    for (let i = 0; i <= 4; i++) { //loop round * 5 for whole game

        let round = i + 1;

        playRound();

    }

    if (playerScore == computerScore) {
        console.log("It's a draw");
    }
    else if (playerScore > computerScore) {
        console.log("You win!!");
    }
    if (playerScore < computerScore) {
        console.log("You lose, loser! The computer beat you.");
    }
}


game();


//output result of round (return)
//output result of round (test with console.log)
//compute overall game stats (return)

//output result of game





/*variables/functions from Odin:
computerPlay() / playRound()
game()
playerSelction
computerSelection
*/

/*To do:
make repeated phrases into variables: tie message, win message, loss message, computer chose message
make case sensitive
throw error message if not rock paper or scissors*/

