const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const playerScoreScreen = document.querySelector("#playerScore");
const computerScoreScreen  = document.querySelector("#computerScore");
const playerBox = document.querySelector("#playerBox");
const computerBox = document.querySelector("#computerBox");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const message = document.querySelector("#message");
let gameStarted = false;
let gameWon = false;
let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach((button) => {
    button.addEventListener("click", () => {
        choiceClicked(button.innerHTML)
      });
})


startBtn.addEventListener("click", () => {
    if(!gameStarted){
        gameStarted = true;
    }
    
});
resetBtn.addEventListener("click", () => {
    gameWon = false;
    computerScore = 0;
    playerScore = 0;
    playerScoreScreen.innerHTML = 0;
    computerScoreScreen.innerHTML = 0;
    playerBox.innerHTML = "❔"
    computerBox.innerHTML = "❔"
    gameStarted = false;
    message.innerHTML = "";

    
});

function choiceClicked(userChoice){ 
    if(gameStarted){
        startGame(userChoice);
    }else{
        if(!gameWon){
             message.innerHTML = "Please click start game";
        }else{
            message.innerHTML = "Please click reset";
        }
    }
}

function startGame(userChoice){
        
    
        let computerChoice = getComputerChoice();
        playerBox.innerHTML = userChoice;
        
        

        if(userChoice == "✊"){
            
            if(computerChoice == "scissors"){
                computerBox.innerHTML = "✌";
                
                message.innerHTML = ("Rock beats scissors, you win");
                playerScore++;

            }else if(computerChoice == "paper"){
                computerBox.innerHTML = "🤚"
                message.innerHTML = ("Paper beats rock, you lose");
                
                computerScore++
            }else{
                computerChoice = "✊"
                message.innerHTML = ("Tie");
            }

        }else if(userChoice == "🤚"){
            
            if(computerChoice == "rock"){
                
                computerBox.innerHTML = "✊"
                message.innerHTML = ("Paper beats rock, you win");
                
                playerScore++;
            }else if(computerChoice == "scissors"){
                
                computerBox.innerHTML = "✌"
                console.log("Scissors beat paper, you lose");
                message.innerHTML = ("Scissors beat paper, you lose");
                computerScore++
            }else{
                computerBox.innerHTML = "🤚"
                message.innerHTML = ("Tie");
                

            }
        }else{
            if(computerChoice == "paper"){
                computerBox.innerHTML = "🤚"
                message.innerHTML = ("Scissors beats paper, you win");
                
                playerScore++;
            }else if(computerChoice == "rock"){
                computerBox.innerHTML = "🤚"
                message.innerHTML = ("Rock beats scissors, you lose");
                
                computerScore++
            }else{
                computerBox.innerHTML = "✌"
                message.innerHTML = ("Tie");
                
            }

        }
        playerScoreScreen.innerHTML = playerScore;
        computerScoreScreen.innerHTML = computerScore;
        if(playerScore >= 5){
            message.innerHTML = ("You won the Game!");
            gameStarted = false;
            gameWon = true;
        }else if(computerScore >=5){
            message.innerHTML = ("You lost the game!");
            gameStarted = false;
            gameWon = true;
        }

    }
  





function getComputerChoice(){
    let rand = Math.floor((Math.random() * 3) + 1);
    if(rand == 1){
        return "rock";
    }else if(rand == 2){
        return "scissors";
    }else{
        return "paper";
    }
}

