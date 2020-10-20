function game() { //loop round * 5 for whole game
    for (let i = 0; i <= 4; i++) {

        let round = i + 1;
        
        //get input from user and assign to variable - player's choice:
        let playerSelection = prompt("Round " + round + ": Rock paper scissors, 1-2-3! Type your choice:");

        //console test
        console.log('You chose '+ playerSelection);

        //generate computer's choice and assign it to variable
        function computerPlay() {
            //array of choices
            let choiceArray = ["rock","paper","scissors"]
            //random choice of index
            let randomChoice = Math.floor(Math.random()*choiceArray.length);
            // choose string associated with chosen index
            let computerSelection = choiceArray[randomChoice];
            //test computerSelection worked
            //console.log("in function - computerSelection: " + computerSelection);
            return(computerSelection);
        }

        let computerSelection = computerPlay();

        //compare computer's choice with player's choice
        function playRound(computerSelection, playerSelection) {
            if (playerSelection == 'rock') {
                if (computerSelection == playerSelection){
                    console.log("Computer chose " + computerSelection + "- tie");
                }
                else if (computerSelection == 'scissors'){
                    console.log("Computer chose  " + computerSelection + " - you win round");
                }
                else if (computerSelection == 'paper'){
                    console.log("Computer chose  " + computerSelection + " - computer wins round");
                }
            }
            else if (playerSelection == 'paper') {
                if (computerSelection == playerSelection){
                    console.log("Computer chose " + computerSelection + "- tie");
                }
                else if (computerSelection == 'rock'){
                    console.log("Computer chose " + computerSelection + "- you win round");
                }
                else if (computerSelection == 'scissors'){
                    console.log("Computer chose " + computerSelection + "- computer wins round");
                }
            }
            else if (playerSelection == 'scissors') {
                if (computerSelection == playerSelection){
                    console.log("Computer chose " + computerSelection + "- tie");
                }
                else if (computerSelection == 'paper'){
                    console.log("Computer chose " + computerSelection + "- you win round");
                }
                else if (computerSelection == 'rock'){
                    console.log("Computer chose " + computerSelection + "- computer wins round");
                }
            }
        }

        playRound(computerSelection, playerSelection);
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
