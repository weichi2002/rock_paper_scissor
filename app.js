
let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let message = "";
const optionBtn = document.querySelectorAll("div.container button");

optionBtn.forEach(button => { button.addEventListener('click', handleClick)});
document.querySelector(".restart").addEventListener('click',() => location.reload());

function handleClick(e){
    playerChoice  = e.target.className;
    console.log(`player chooses ${playerChoice}`);
    play(playerChoice);
}

function play(player){

    computerChoice = computer_choice();
    document.querySelector(".cpuChoose").innerHTML = `Computer Chooses: ${computerChoice}`;
    document.querySelector(".playerChoose").innerHTML = `Player Chooses: ${playerChoice}`;

    console.log("computer chooses " + computerChoice);

    if(player == computerChoice){
        message = "Tie!!!";
    }
    else if(player == "rock" && computerChoice == "scissors"
    || player == "paper" && computerChoice == "rock"
    || player == "scissors" && computerChoice == "paper"){
        playerScore++;
        message = "You win!!!";
    }
    else{
        computerScore++;
        message = "Computer Wins"
    }

    //update the score board
    document.querySelector(".message").innerHTML = `Result: ${message}`;
    document.querySelector(".computerScore").innerHTML = `Computer Score: ${computerScore}`;
    document.querySelector(".playerScore").innerHTML = `Player Score:  ${playerScore}`;

    //check if the computer or the player reached 5
    if(playerScore == 5 || computerScore == 5){
        optionBtn.forEach(button => {
            button.removeEventListener('click', handleClick);
        });

    }
}

function computer_choice(){
    let choice = Math.floor(Math.random() * 3) + 1
    switch(choice){
        case 1: 
            return "rock";
        case 2:
            return "scissors";
        case 3:
            return "paper";
    }
}



