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
let roundsPlayed = 0;

function playRound(computerChoice, humanChoice) {
    console.log(`Computer: ${computerChoice}, Human: ${humanChoice}`);
    
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        return "It's a tie!";
    } else if (
        (computerChoice === "rock" && humanChoice === "scissor") || 
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissor" && humanChoice === "paper")
    ) {
        console.log("Computer wins!");
        return "You lose!";
    } else {
        console.log("Player wins!");
        return "You win!";
    }
}

function updateScore(result){
    if (result === "You win!") {
        playerScore++;
    } else if (result === "You lose!"){
        computerScore++;
    } else {
    (result === "It's a tie!")
    result= "No points awarded for a tie!";
    }
    return (`Player: ${playerScore} Computer: ${computerScore}`);
}

function updateImage(humanChoice, computerChoice) {
    const choices = {
        rock: '../img/rock.jpg',
        paper: '../img/paper.jpg',
        scissor: '../img/scissor.jpg',
    };
    document.getElementById('human-img').src = choices[humanChoice];
    document.getElementById('computer-img').src = choices[computerChoice];
}

document.querySelector("#choices").addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    if (roundsPlayed>= 5){
        anounceWinner();
        return;
    }
    const humanChoice = e.target.id.toLowerCase();
    const computerChoice = getComputerChoice();

    const result = playRound(computerChoice, humanChoice)
    const scoreUpdate = updateScore(result);

    updateImage (humanChoice, computerChoice);

    const resultDisplay = document.querySelector("#result")
    resultDisplay.textContent = `Result: ${result}`

    const scoreDisplay = document.querySelector("#score")
    scoreDisplay.textContent = scoreUpdate;

    roundsPlayed++;

    if (roundsPlayed===5){
        announceWinner()
    }
});

function announceWinner() {
    const resultDisplay = document.querySelector("#result");
    if (playerScore > computerScore) {
        resultDisplay.textContent = "Congratulations, Player wins!";
    } else if (playerScore < computerScore) {
        resultDisplay.textContent = "Game Over! Computer wins.";
    } else {
        resultDisplay.textContent = "It's a Draw!";
    }
}

        
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


