var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissor_div = document.getElementById("scissor");
var details_div = document.getElementById("details");
var user_score_div = document.getElementById("user-score");
var computer_score_div = document.getElementById("computer-score");
let user_score=0,computer_score=0;
let user_choise, computer_choise, win_lose;

function calculateComputerChoise(){
    values = ["rock", "paper", "scissor"];
    return values[(Math.floor(Math.random()*3))];
}

function calculateWinOrLose(user_choise, computer_choise){

    var temp = user_choise + computer_choise;

    switch(temp){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            return true;
        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            return false;
        default:
            return;    
    }
}

function convert(string){
    if(string === "rock"){
        return "Rock";
    }
    if(string === "paper"){
        return "Paper";
    }
    return "Scissor";
}

function win(user_choise, computer_choise){
    user_score++;
    user_score_div.innerHTML = user_score;
    computer_score_div.innerHTML = computer_score;
    details_div.innerText = convert(user_choise) + " Beats "+ convert(computer_choise) + ". You Win!";
    let user_choise_div = document.getElementById(user_choise);
    user_choise_div.classList.add("green");
    setTimeout(() => {
        user_choise_div.classList.remove("green");
    }, 300);
}

function lose(user_choise, computer_choise){
    computer_score++;
    user_score_div.innerHTML = user_score;
    computer_score_div.innerHTML = computer_score;
    details_div.innerText = convert(user_choise) + " Loses To "+ convert(computer_choise) + ". You Lose...";
    let user_choise_div = document.getElementById(user_choise);
    user_choise_div.classList.add("red");
    setTimeout(() => {
        user_choise_div.classList.remove("red");
    }, 300);
}

function draw(user_choise, computer_choise){
    user_score_div.innerHTML = user_score;
    computer_score_div.innerHTML = computer_score;
    details_div.innerText = convert(user_choise) + " Equals "+ convert(computer_choise) + ". Its a Draw.";
    let user_choise_div = document.getElementById(user_choise);
    user_choise_div.classList.add("gray");
    setTimeout(() => {
        user_choise_div.classList.remove("gray");
    }, 300);
}

rock_div.addEventListener('click',function(){
    user_choise = "rock";
    main();
})

paper_div.addEventListener('click',function(){
    user_choise = "paper";
    main();
})

scissor_div.addEventListener('click',function(){
    user_choise = "scissor";
    main();
})

function main(){

    computer_choise = calculateComputerChoise();
    
    win_lose = calculateWinOrLose(user_choise, computer_choise);

    if(win_lose == true){
        win(user_choise, computer_choise);
    }
    else if(win_lose == false){
        lose(user_choise, computer_choise);  
    } 
    else{
        draw(user_choise, computer_choise);
    }
    
}