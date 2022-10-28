
function computer_choice(){
    let choice = Math.floor(Math.random() * 3) + 1

    switch(choice){
        case 1: 
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissor"
    }

}

function player_choice(){

    let choice = prompt("Enter choice: ");

    if(choice.toUpperCase()=="ROCK" || choice.toUpperCase() =="R"){
        return "Rock"
    }
    if(choice.toUpperCase() == "SCISSOR" || choice.toUpperCase() == "S"){
        return "Scissor"
    }
        
    if(choice.toUpperCase() == "PAPER" || choice.toUpperCase() == "P"){
        return "Paper"
    }
    else{
        return "Invalid Choice"
    }

}

function Game(){

    let player = player_choice();
    let computer= computer_choice();


    if(player == computer){
        return "Tie!!"
    }

    if(player == "Rock"){
        if(computer == "Paper"){
            return "You Lose"
        }
        else{
            return "You Win!!!"
        }
    }
    if(player == "Paper"){
        if(computer == "Scissor"){
            return "You Lose"
        }
        else{
            return "You Win!!!"
        }
    }
    if(player == "Scissor"){
        if(computer == "Rock"){
            return "You Lose"
        }
        else{
            return "You Win!!!"
        }
    }
    else{
        return player
    }

}

for(let i = 0; i < 5; i++) {
    alert(Game())
}
