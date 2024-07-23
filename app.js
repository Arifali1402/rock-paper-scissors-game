let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
msg.style.background = "rgb(2, 78, 2)";


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    // Rock-->0, Paper-->1 and Scissor-->2
    // Generating random index
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const drawGame = () => {
    // console.log("Game was Draw!")
    msg.innerHTML = "Game Ended in a DRAW!!!";
    msg.style.background = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        userScorePara.innerHTML = userScore;
        // console.log("YOU WON!!!");
        msg.innerHTML = `YOU WON!!! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.background = "green";
    }
    else if (userWin === false) {
        compScore++;
        compScorePara.innerHTML = compScore;
        // console.log("YOU LOST!!");
        msg.innerHTML = `YOU LOST!!! Computer's ${compChoice} beats yours ${userChoice}`;
        msg.style.background = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("User Chose:", userChoice);
    // Generate Computer Choice --> Modular way
    const compChoice = genCompChoice();
    // console.log("Comp Chose:", compChoice);

    // Winning Condition
    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    }
    else {
        // Suppose that user has won
        let userWin = true;
        // if user choses rock
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        // if user choses paper
        else if (userChoice === "paper") {

            userWin = compChoice === "scissor" ? false : true;
        }
        // if user choses scissor
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const reset = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerHTML = userScore;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = "Game Restarted.";
    msg.style.background = "rgb(2, 78, 2)";
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice)
        playGame(userChoice);
    });
});

let resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click", (e) => {
    reset();
})