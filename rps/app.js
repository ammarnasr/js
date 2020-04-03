let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice(){

    const choices = ['rock' , 'paper' , 'scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];

}

function win(userChoice , computerChoice){

    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. YOU WIN!`;

}

function draw(userChoice , computerChoice){

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. YOU DRAW!`;

}

function lose(userChoice , computerChoice){

    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallCompWord}. YOU LOSE!`;

}


function game(userChoice){

    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice , computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
        default:
            lose(userChoice, computerChoice);
    }

}

function main(){


    rock_div.addEventListener('click' , function(){
        game("rock");
    })

    paper_div.addEventListener('click' , function(){
        game("paper");
    })

    scissor_div.addEventListener('click' , function(){
        game("scissor");
    })

}

main();