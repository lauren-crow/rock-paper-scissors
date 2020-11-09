//todo: get stars working, fix newgame score

const buttons = document.querySelectorAll('.btns');
const playerBox = document.querySelector('#player');
const computerBox = document.querySelector('#computer');
const roundResultBox = document.querySelector('#roundResult');
const selectionBox = document.querySelector('#selections');
const playerImg = document.querySelector('#playerImg');
const computerImg = document.querySelector('#computerImg');
const scoreBox = document.querySelector('#scoreBox');
const playerScoreBox = document.querySelector('#playerScoreBox');
const computerScoreBox = document.querySelector('#computerScoreBox');
const playerWon = document.querySelector('#playerWon');
const computerWon = document.querySelector('#computerWon');
const rockImg = "rock.png";
const paperImg = "paper.png";
const scissorsImg = "scissors.png";
const starsImg = "stars.png";

//if computer is winner change computerbox

let playerScore = 0;    //initializes scores
let computerScore = 0;
let tieCount = 0;
selectionBox.style.visibility = "hidden";
scoreBox.style.visibility = "hidden";

 //get input from user's button click and assign it to variable - return
function playerPlay() {
    buttons.forEach((button) => {
        button.addEventListener('click', () =>  {
            selectionBox.style.visibility = "visible";
            scoreBox.style.visibility = "visible";
            playRound(button.id);
            const playerResult = document.createElement('div');
            playerResult.textContent = (button.id);
            return button.id; 
        });
    });
}


//generate computer's random choice and return to later assign to variable
function computerPlay() {       
    let choiceArray = ["rock","paper","scissors"]                               //array of choices
    let randomChoice = Math.floor(Math.random()*choiceArray.length);            //random choice of index
    let computerSelection = choiceArray[randomChoice];                          // choose string associated with chosen index
    const computerResult = document.createElement('div');
    computerResult.textContent = (computerSelection);
    return computerSelection;
    }

const playerSelection = playerPlay(); 

//displays computer's selection and player's selection
function showSelections(playerSelection, computerSelection){

    if(playerSelection == 'rock'){
        playerImg.src = rockImg;
    }else if(playerSelection == 'paper'){
        playerImg.src = paperImg;
    }else if (playerSelection == 'scissors'){
        playerImg.src = scissorsImg;
    }

    if(computerSelection == 'rock'){
        computerImg.src = rockImg;
    }else if(computerSelection == 'paper'){
        computerImg.src = paperImg;
    }else if (computerSelection == 'scissors'){
        computerImg.src = scissorsImg;
    }
    
}

function playRound(playerSelection) {             //get input from user and assign to variable - return
    const computerSelection = computerPlay();
    //compare computer's choice with playe r's choice and print results 
    function compare(playerSelection, computerSelection) {    

        if (playerSelection == computerSelection) {
            result = 'tie';
        }
        else if (playerSelection === 'rock') {
            if (computerSelection == 'scissors') { 
                result = 'win'; 
            }
            else if (computerSelection == 'paper') {
                result = 'loss';
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock'){
                result = 'win';  
                }
            else if (computerSelection == 'scissors'){
                result = 'loss';
            }
        }else if (playerSelection == 'scissors') {
            if (computerSelection == 'paper'){
                result = 'win';  
            }
            else if (computerSelection == 'rock'){
                result = 'loss';
            }
                
        }
        return result;
    }
    result = compare(playerSelection, computerSelection);
    //console.log(`playerSelection = ${playerSelection}`);
    //console.log(`computerSelection = ${computerSelection}`);
    //console.log(`result = ${result}`);

    //shows round result message and tallies score  
    switch(result){ 
        case 'tie':
            playerBox.style.border = ('none');
            computerBox.style.border = ('none');
            tieCount = tieCount +1;
            roundMessage = "    Tied round"; 
            //tally score
            //display round result message
            //border box to show winner
        break;
        case 'win':
            playerBox.style.border = ('solid hotpink 1px');
            computerBox.style.border = ('none');
            playerScore = playerScore + 1;
            roundMessage = "   You won the round!";
        break;
        case 'loss':
            computerScore = computerScore + 1;  // add point to computerPoint
            computerBox.style.border = ('solid hotpink 1px');
            playerBox.style.border = ('none');
            roundMessage = "   The computer won the round.";
        break;
        }

        //ends game if either player gets 5 points
        if(computerScore == 5 || playerScore == 5){
            roundResultBox.style.fontSize = "1.5em";
            roundResultBox.style.marginTop = "1%";
            //add play again button
            const resetButton = document.createElement('button');
            resetButton.id = "resetBtn"
            resetButton.textContent = "Play Again";
            scoreBox.appendChild(resetButton);
            document.querySelector('.buttons').style.visibility = "hidden";
            
            if(computerScore == 5){
                roundMessage = "Sorry, the computer won this time.";
                computerBox.style.backgroundColor= ('yellow');
                computerWon.src = starsImg;
            }else if(playerScore == 5){
                roundMessage = "You won the game!!";
                playerBox.style.backgroundColor = ('yellow');
                playerWon.src = starsImg;
            } 

            resetButton.addEventListener('click', () =>  {
                document.querySelector('.buttons').style.visibility = "visible";
                selectionBox.style.visibility = "hidden";
                scoreBox.style.visibility = "hidden";
                resetButton.style.visibility = "hidden";
                roundResultBox.style.visibility = "hidden";
                playerWon.style.visibility = "hidden";
                computerWon.style.visibility = "hidden";
                playerBox.style.backgroundColor = ('hsl(195, 53%, 97%)');
                computerBox.style.backgroundColor = ('hsl(195, 53%, 97%)');
                computerScore = 0;
                playerScore = 0;
            }); 
        }
  

    showSelections(playerSelection, computerSelection);

    function getResult() {
        let result = compare(playerSelection, computerSelection);
        roundResultBox.innerHTML = roundMessage;
    }

    function getScore() {        
        playerScoreBox.innerHTML = playerScore;
        computerScoreBox.innerHTML = computerScore;
    }

    getResult();
    getScore();
}


