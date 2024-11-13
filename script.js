function startGame(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        console.log("Rock, Paper, Scissors and Shoot!");
        console.log("...");
        console.log("You played: " + userChoice);
        console.log("The computer played: " + computerChoice);

        if(userChoice == "rock"){
            if(computerChoice == "scissors"){
                console.log("Rock beats scissors, you win");
                playerScore++;

            }else if(computerChoice == "paper"){
                console.log("Paper beats rock, you lose");
                computerScore++
            }else{
                console.log("Tie")
            }

        }else if(userChoice == "paper"){
            if(computerChoice == "rock"){
                console.log("Paper beats rock, you win");
                playerScore++;
            }else if(computerChoice == "scissors"){
                console.log("Scissors beat paper, you lose");
                computerScore++
            }else{
                console.log("Tie")

            }
        }else{
            if(computerChoice == "paper"){
                console.log("Scissors beats paper, you win");
                playerScore++;
            }else if(computerChoice == "rock"){
                console.log("Rock beats scissors, you lose");
                computerScore++
            }else{
                console.log("Tie")
            }

        }
        console.log("Your score: " + playerScore);
        console.log("Computer Score: " + computerScore);


  
    }
    if(playerScore > computerScore){
        console.log("You won!");
    }else if(playerScore<computerScore){
        console.log("You lost!");
    }else{
        console.log("You tied");
    }

}

function getUserChoice(){
    let input = prompt("Enter rock, paper or scissors");
    
    input = input.toLowerCase();
    if(input !== "rock" && input !== "paper" && input !== "scissors" ){
        console.log("Please enter valid input");
        getUserChoice();
        
    }
    return input;
    

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

startGame();