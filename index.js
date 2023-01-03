// Step 1 - Define the Initital State
let initState = {
    msg: "Start the guessing (1 to 20)...",
    userNumber: "",
    computerNumber: "?",
    score: 20,
    highScore: 0
};

// Step 2 - Define the current state of the application
let currState = {};

// Step 3 - Initialize all dom elements
// Start from top to bottom
const msgEle = document.querySelector(".msg");
const userNumberEle = document.querySelector(".user-input");
const playButtonEle = document.querySelector(".play-button");
const computerNumberEle = document.querySelector(".computer-number");
const scoreEle = document.querySelector(".score span");
const highScoreEle = document.querySelector(".high-score");


// Step 4 - Initialize the game
// Generate Random Number
let random; // gives value in 0.something
function init() {
    random = Math.round(Math.random() * 20);
    console.log("computer number : ", random);
    currState = {...initState}; // this is called object destructuring
    // render(currState); // render the application
}



init();