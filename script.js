const results ={
    rock: {rock:0 , paper: -1, scissors:1},
    paper: {rock:1, paper:0, scissors:-1},
    scissors: {rock:-1, paper: 1, scissors:0},

}

function getComputerChoice(){
    let choice = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return choice[index];
}

function getHumanChoice(){
    let choice = prompt("Rock,paper or scissors?");
    return choice.toLowerCase();
}

let rounds =5;
let computerScore=0;
let humanScore=0;

while (rounds>0){


let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let outcome = results[humanChoice][computerChoice];

console.log(
    `---Round Results---\n human: ${humanChoice}\n computer:${computerChoice}`
);

switch(outcome){
case -1:
    console.log("You lost!");
    computerScore+=1;
    break;
case 0:
    console.log("It's a tie!");
    break;
case 1:
    console.log("You won!!!")
    humanScore+=1;
}
console.log(
    `---Score---\n human: ${humanScore}\n computer:${computerScore}`
);
rounds-=1;
}