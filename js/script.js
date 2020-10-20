function playRound() {
    function playerPlay() {             //get input from user and assign to variable - player's choice:
        let playerSelection = prompt(/*"Round " + round + */": Rock paper scissors, 1-2-3! Type your choice:");
        console.log('You chose '+ playerSelection);
        return playerSelection;
        }

    function computerPlay() {           //generate computer's choice and assign it to variable
        let choiceArray = ["rock","paper","scissors"]                               //array of choices
        let randomChoice = Math.floor(Math.random()*choiceArray.length);            //random choice of index
        let computerSelection = choiceArray[randomChoice];                          // choose string associated with chosen index
        console.log("The computer chose "+ computerSelection);
        return computerSelection;
        }

    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
                            
    function compare(playerSelection, computerSelection) {    //compare computer's choice with playe r's choice and print results  
            
        //set result variables    
        let tie = "- tie";      
        let win = " - you win round";
        let loss = "- computer wins round";

        if (playerSelection == computerSelection) {
            return tie;
        }
        else {
            if (playerSelection == 'rock') {
                if (computerSelection == 'scissors') {
                    return win;
                    let playerScore = playerScore + 1;  // add point to playerScore   
                }
                else if (computerSelection == 'paper') {
                    return loss;
                    let computerScore = computerScore +1; // add point to computerPoint
                }
            }
            else if (playerSelection == 'paper') {
                if (computerSelection == 'rock'){
                    return win;
                    let playerScore = playerScore + 1;  // add point to playerScore  
                }
                else if (computerSelection == 'scissors'){
                    return loss;
                    let computerScore = computerScore +1; // add point to computerPoint
                }
            }
            else if (playerSelection == 'scissors') {
                if (computerSelection == 'paper'){
                    return win;
                    let playerScore = playerScore + 1;  // add point to playerScore 
                }
                else if (computerSelection == 'rock'){
                    return loss;
                    let computerScore = computerScore +1; // add point to computerPoint
                }
                
            }
        }
    }

    function getResult() {
        let result = compare(playerSelection, computerSelection);
        console.log("result is " + result);
    }

    getResult();
}


function game() {     //keep score   //report winner at the end
    for (let i = 0; i <= 4; i++) { //loop round * 5 for whole game

        let round = i + 1;

        playRound();

        /*if (round == 0) {
            let playerScore = 0;   //initialize playerScore
            let computerScore = 0;       //initialize computerScore
        }
        else if (result == win) {
            playerScore+=1
        }
        else if (result == lose) {
            computerScore+=1
        }
            
        console.log(result + playerScore + computerScore)*/

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

