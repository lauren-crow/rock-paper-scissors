//todo: center score, loop, restart game

const buttons = document.querySelectorAll('button');
const playerBox = document.querySelector('#player');
const computerBox = document.querySelector('#computer');
const roundResultBox = document.querySelector('#roundResult');
const playerImg = document.querySelector('#playerImg');
const computerImg = document.querySelector('#computerImg');
const playerScoreBox = document.querySelector('#playerScoreBox');
const computerScoreBox = document.querySelector('#computerScoreBox');
const rockImg = "https://img.icons8.com/ios-filled/50/000000/rock.png";
const paperImg = "https://img.icons8.com/ios/50/000000/paper-plane.png";
const scissorsImg = "https://img.icons8.com/ios-filled/50/000000/cut.png";

//if computer is winner change computerbox

let playerScore = 0;    //initializes scores
let computerScore = 0;
let tieCount = 0;

 //get input from user's button click and assign it to variable - return
function playerPlay() {
    buttons.forEach((button) => {
        button.addEventListener('click', () =>  {
            playRound(button.id);
            const playerResult = document.createElement('div');
            playerResult.textContent = (button.id);
            //playerBox.appendChild(playerResult);
            return button.id; 
        });
    });
}

//generate computer's random choice and return to later assign to variable
function computerPlay() {       
    let choiceArray = ["rock","paper","scissors"]                               //array of choices
    let randomChoice = Math.floor(Math.random()*choiceArray.length);            //random choice of index
    let computerSelection = choiceArray[randomChoice];                          // choose string associated with chosen index
    //console.log("The computer chose "+ computerSelection);
    const computerResult = document.createElement('div');
    computerResult.textContent = (computerSelection);
    //computerBox.appendChild(computerResult);
    return computerSelection;
    }

    const playerSelection = playerPlay();
    const computerSelection = computerPlay(); 

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
     
    //compare computer's choice with playe r's choice and print results 
    function compare(playerSelection, computerSelection) {     
        //set result variables    
        let tie = "    Tied round";      
        let win = "   You won the round!";
        let loss = "   Computer won the round.";

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

    showSelections(playerSelection, computerSelection);

    function getResult() {
        let result = compare(playerSelection, computerSelection);
        roundResultBox.innerHTML = result;
    }

    function getScore() {        
        //console.log("Your score: " + playerScore + " Computer score: " + computerScore + " Tie count: " + tieCount);
        playerScoreBox.innerHTML = playerScore;
        computerScoreBox.innerHTML = computerScore;
    }

    getResult();
    getScore();
}


//playRound();






//when user clicks button, triggers playRound() and provides playRound with returned id