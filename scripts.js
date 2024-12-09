



function getComputerChoice(computerChoice = Math.floor(Math.random() * 3)){
    // console.log(computerChoice)
    if (computerChoice === 0){
        console.log("Computer chose Rock!");
        return "rock";
    } else if (computerChoice === 1){
        console.log("Computer chose Paper!");
        return "paper";
    } else if (computerChoice === 2){ 
        console.log("Computer chose Scissor");
        return "scissor";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Please enter your choice: rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        console.log("Player has picked Rock!");
        return humanChoice;
    }
    else if (humanChoice === "paper"){
        console.log("Player has picked Paper!");
        return humanChoice;
    }
    else (humanChoice === "scissor")
        console.log("Player has picked Scissor!");  
        return humanChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    console.log(`Computer:${computerChoice}, Human: ${humanChoice}`);
    if (computerChoice === humanChoice){
        console.log("It's a tie!");
        return "tie";
    } else if (
        (computerChoice === "rock" && humanChoice === "scissor") || 
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissor" && humanChoice === "paper")
    ){
        console.log("Computer wins!");
        return "lose";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ){
        console.log("Player wins!")
        return "win";  
    }
}

function updateScore(result){
    if (result === "win") {
        playerScore++;
    } else if (result === "lose"){
        computerScore++;
    } else {
    (result === "tie")
    console.log("No points awarded for a tie!");
    }
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
}


document.querySelector("#choices").addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    const humanChoice = e.target.id.toLowerCase();
    const computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice)
    updateScore(result);
});

        
/* function playGame(){
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(computerChoice, humanChoice);
        updateScore(result);
    }
    if (playerScore > computerScore){
        console.log ("Player is the overall winner!");
    } else 
        console.log ("Computer is the overall winner!");    
} */
        
//playGame(playRound);


