let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");


function getComputerChoice(){

    const choices = ['rock' , 'paper' , 'scissor' , "lizard" , "spock"];
    const randomNumber = Math.floor(Math.random()*5);
    return choices[randomNumber];

}

function win(userChoice , computerChoice){

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} VAPORIZES ${computerChoice}${smallCompWord}. YOU WIN!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow") , 500);

}

function draw(userChoice , computerChoice){

    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. YOU DRAW!`;
    userChoice_div.classList.add("blue-glow");
    setTimeout(() => userChoice_div.classList.remove("blue-glow") , 500);

}

function lose(userChoice , computerChoice){

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallCompWord}. YOU LOSE!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow") , 500);

}


function game(userChoice){

    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissor":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorpaper":
        case "scissorlizard":
        case "lizardpaper":
        case "lizardspock":
        case "spockrock":
        case "spockscissor":
            win(userChoice , computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
        case "lizardlizard":
        case "spockspock":
            draw(userChoice, computerChoice);
            break;
        default:
            lose(userChoice, computerChoice);
    }

}

function main(){


    rock_div.addEventListener('click' , () => game("rock") );
    paper_div.addEventListener('click' ,() => game("paper"));
    scissor_div.addEventListener('click' ,()=> game("scissor"));
    lizard_div.addEventListener('click' ,()=> game("lizard"));
    spock_div.addEventListener('click' ,()=> game("spock"));

}

main();